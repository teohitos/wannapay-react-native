//ref: https://www.npmjs.com/package/react-native-element-dropdown

import React, {useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActionSheetIOS, TextInput, Alert} from 'react-native';
import styles from './ForgotPinIdVerification.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getForgotPinVerifyIdentityRequest} from './ForgotPIN.Action';

const ForgotPinIdVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const getCheckPhone = useSelector(state => state.getCheckPhone);
  const forgotPinVerifyIdentity = useSelector(state => state.getForgotPinVerifyIdentity);
  // console.log('--- forgotPinVerifyIdentity',forgotPinVerifyIdentity)

  const [text, onChangeText] = React.useState("");
  const [answer, onChangeAnswer] = React.useState("");
  const [selectedvalue, setSelectedvalue] = useState(route.params.id);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(0);

  // const [androiditems, setAndroiditems] = useState([]);
  const [iositems, setIositems] = useState([]);
  const [dismiss,setDismiss] = useState(false);
  const [nextclick,setNextclick] = useState(false);
  const [dismissnavigate,setDismissnavigate] = useState(false);

  useEffect(() => {
    
    //alert
    if(forgotPinVerifyIdentity.data) {
      if(!forgotPinVerifyIdentity.data.success) {
        if(!dismiss) {
          Alert.alert(
            "ID Verification",
            forgotPinVerifyIdentity.data.message,
            [
              {
                text: "OK",
                onPress: () => setDismiss(true),
                style: "default",
              },
            ],
            {
              cancelable: true,
                onDismiss: () => 
                  setDismiss(true)
                // Alert.alert(
                //   "This alert was dismissed by tapping outside of the alert dialog."
                // ),
            }
          );
        }
      
      } else {

        //reset
        setNextclick(false)

        if(nextclick) {
          if(forgotPinVerifyIdentity.data && forgotPinVerifyIdentity.data.success) {
            navigation.navigate('SetupPinScreen', {});
          }
        }
      }

    }
    
  }, [forgotPinVerifyIdentity])
  
  const refresh = () => {
    console.log('--- refresh')
  }

  const getVerifyIdentity = () => {
    const identity_no = answer;    
    const phone = getCheckPhone.data ? getCheckPhone.data.data.phone : "";

    //reset
    setDismiss(false);
    setNextclick(true);

    dispatch(getForgotPinVerifyIdentityRequest({phone, identity_no}))

    if(forgotPinVerifyIdentity.data && forgotPinVerifyIdentity.data.success) {
      navigation.navigate('SetupPinScreen', {});
    }
  };

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Forgot PIN : ID Verification</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: iositems,
        // destructiveButtonIndex: 0,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        setResult(buttonIndex);
      }
    );
    
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>
            Registered ID Verification
          </Text>
          <Text style={styles.textContent}>
            Please enter the last 6 characters of your registered {selectedvalue == 1 ? 'NRIC' : 'Passport'} ID
          </Text>          

          <TextInput
            style={styles.input}
            onChangeText={onChangeAnswer}
            value={answer}
            placeholder="Enter Answer"
          />
          
          <TouchableOpacity style={answer ? styles.button : styles.buttonDisabled} 
              onPress={getVerifyIdentity}
          >
            <Text style={answer ? styles.buttonText : styles.buttonTextDisabled}>
            Next
            </Text>
          </TouchableOpacity>

        </SafeAreaView>

    </View>
    
  );
};
export default ForgotPinIdVerificationScreen;
