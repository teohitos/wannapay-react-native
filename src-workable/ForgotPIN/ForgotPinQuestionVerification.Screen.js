//ref: https://www.npmjs.com/package/react-native-element-dropdown

import React, {useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActionSheetIOS, TextInput, Picker, Alert} from 'react-native';
import styles from './ForgotPinQuestionVerification.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getForgotPinVerifyQuestionRequest} from './ForgotPIN.Action';

const ForgotPinQuestionVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const getCheckPhone = useSelector(state => state.getCheckPhone);
  const forgotPinQuestion = useSelector(state => state.getForgotPinQuestion);
  // console.log('---- ios forgotPinQuestion',JSON.stringify(forgotPinQuestion.data.iosdata))

  const forgotPinVerifyQuestion = useSelector(state => state.getForgotPinVerifyQuestion);

  const [text, onChangeText] = React.useState("");
  const [answer, onChangeAnswer] = React.useState("");
  const [selectedvalue, setSelectedvalue] = useState(route.params.id);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(0);

  const [androiditems, setAndroiditems] = useState([]);
  const [dismiss,setDismiss] = useState(false);
  const [nextclick,setNextclick] = useState(false);
  const [iositems, setIositems] = useState(forgotPinQuestion.data ? forgotPinQuestion.data.iosdata : []);

  useEffect(() => {
    
    //alert
    if(forgotPinVerifyQuestion.data) {
      if(!forgotPinVerifyQuestion.data.success) {
        if(!dismiss) {
          Alert.alert(
            "Question Verification",
            forgotPinVerifyQuestion.data.message,
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
            }
          );
        }
      
      } else {

        //reset
        setNextclick(false)

        if(nextclick) {
          if(forgotPinVerifyQuestion.data && forgotPinVerifyQuestion.data.success) {
            navigation.navigate('SetupPinScreen', {});
          }
        }
      }

    }
    
  }, [forgotPinVerifyQuestion])
  
  useEffect(() => {
    if(forgotPinQuestion.data) {
      setAndroiditems(forgotPinQuestion.data.data)
    }
  }, [forgotPinQuestion])

  const refresh = () => {
    console.log('--- refresh')
  }

  const getVerifyQuestion = () => {
    const question_answer = answer;    
    const phone = getCheckPhone.data ? getCheckPhone.data.data.phone : "";
    const question_id = selectedvalue;

    //reset
    setDismiss(false);
    setNextclick(true);

    dispatch(getForgotPinVerifyQuestionRequest({phone, question_id, question_answer}))

    if(forgotPinVerifyQuestion.data && forgotPinVerifyQuestion.data.success) {
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
          onPress={() => {
            navigation.goBack()


          }}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Question Verification</Text>
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
        setSelectedvalue(buttonIndex);
      }
    );
    
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>
            Security Question Verification
          </Text>
          {/* <Text style={styles.textContent}>
            Please enter the last 6 characters of your registered ID
          </Text>           */}

         {/* android picker */}
         {
            Platform.OS == 'android' &&
              <View style={styles.androidcard}>
                <Picker
                  selectedValue={selectedvalue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedvalue(itemIndex);

                    if(itemIndex !== 0) {
                      navigation.navigate('ForgotPinQuestionVerificationScreen', {});
                      }

                  }}
                >
                  {
                    androiditems.map((item, key)=>
                      <Picker.Item label={item.label} value={item.value} />
                  )}

                </Picker>
              </View>   
          }          

          {
            //ios action sheet
            Platform.OS == 'ios' &&
            <View style={styles.ioscard}>
              <TouchableOpacity
                style={styles.picker}
                onPress={onPress}
              >
                <Text style={styles.textContent}>
                  {
                    selectedvalue == 0 ? 
                      'Please Select Question' : 
                      iositems[selectedvalue]
                  }
                  
                </Text>
              </TouchableOpacity>
            </View>
          }        

          <TextInput
            style={styles.input}
            onChangeText={onChangeAnswer}
            value={answer}
            placeholder="Enter Answer"
          />

          
          <TouchableOpacity style={answer ? styles.button : styles.buttonDisabled} 
              onPress={getVerifyQuestion}
          >
            <Text style={answer ? styles.buttonText : styles.buttonTextDisabled}>
            Next

            </Text>
          </TouchableOpacity>

        </SafeAreaView>

    </View>
    
  );
};
export default ForgotPinQuestionVerificationScreen;
