//ref: https://www.npmjs.com/package/react-native-element-dropdown

import React, {useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActionSheetIOS, TextInput, Alert} from 'react-native';
import styles from './SetupPin.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import {getForgotPinRequest, getForgotPinVerifyIdentityClear} from './ForgotPIN.Action';

const SetupPinScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");

  const getCheckPhone = useSelector(state => state.getCheckPhone);
  const getForgotPin = useSelector(state => state.getForgotPin);

  const [dismiss,setDismiss] = useState(false);

  useEffect(() => {

    //alert
    if(getForgotPin.data) {
      if(getForgotPin.data.success) {
        if(!dismiss) {
          Alert.alert(
            "Setup PIN",
            getForgotPin.data.message,
            [
              {
                text: "OK",
                onPress: () => {
                  setDismiss(true);
                  navigation.navigate('LoginScreen', {});
                },
                style: "default",
              },
            ],
            {
              cancelable: true,
                onDismiss: () => 
                  setDismiss(true)
            }
          );
        }
      
      }

    }
    
  }, [getForgotPin])

  const handleSubmit = () => {
    const phone = getCheckPhone.data ? getCheckPhone.data.data.phone : "";
    const pin = (pin1 == pin2 && pin1 !== '' && pin2 !== '') ? pin2 : '';

    dispatch(getForgotPinRequest({phone, pin}))

    //reset
    setDismiss(false);
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
          onPress={() => {
            dispatch(getForgotPinVerifyIdentityClear())
            navigation.goBack(() => refresh())
          }}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Forgot PIN : Setup PIN</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

    
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>
            Enter new 6-digit PIN
          </Text>
          <Text style={styles.textContent}>
            The 6-digit PIN will be asked when you transact
          </Text>          
          
          <SmoothPinCodeInput password mask="﹡"
            containerStyle={styles.pincodeinput_container}
            cellStyle={styles.pincodeinput_cell}
            // cellStyleFocused={{
            //   borderColor: 'red',
            // }}
            cellSize={50}
            codeLength={6}
            value={pin1}
            onTextChange={password => setPin1(password)}
          />

          <SmoothPinCodeInput password mask="﹡"
            containerStyle={styles.pincodeinput_container}
            cellStyle={styles.pincodeinput_cell}
            // cellStyleFocused={{
            //   borderColor: 'red',
            // }}
            cellSize={50}
            codeLength={6}
            value={pin2}
            onTextChange={password => setPin2(password)}
          />

          <TouchableOpacity style={(pin1 == pin2 && pin1 !== '' && pin2 !== '') ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
          >
            <Text style={(pin1 == pin2 && pin1 !== '' && pin2 !== '') ? styles.buttonText : styles.buttonTextDisabled}>
            Next
            </Text>
          </TouchableOpacity>

        </SafeAreaView>

    </View>
    
  );
};
export default SetupPinScreen;
