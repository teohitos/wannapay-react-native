import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert} from 'react-native';
import styles from './SignUpOtp.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { getSignUpOtp } from '../api';
import { getSignUpOtpRequest } from './SignUp.Action';
import SmoothPinCodeInput from "react-native-smooth-pincode-input"

const SignUpOtpScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const signUpOtp = useSelector(state => state.getSignUpOtp);

  const phone = route.params.phone;
  const [text, onChangeText] = React.useState("");
  const [dismiss,setDismiss] = useState(false);
  const [pin, setPin] = useState("");

  let otp = '';

  if(signUpOtp.data) {
    otp = signUpOtp.data.data.OTP;
  }

  const handleSubmit = () => {
    console.log('--- handleSubmit')
    navigation.navigate('SignUpSetupPinScreen', {});
  };

  useEffect(() => {
    //OTP only send once
    if(phone && !otp) {
      console.log('--- OTP phone',phone)
      dispatch(getSignUpOtpRequest(phone))
    }
  }, [])

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
          <Text style={styles.titleToolbar}>Sign Up : Enter OTP</Text>
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
          </Text>
          <Text style={styles.textContent}>
          Your one-time password (OTP) has been sent to {phone} {otp}
          </Text>
          
          <SmoothPinCodeInput password mask="﹡"
            containerStyle={styles.pincodeinput_container}
            cellStyle={styles.pincodeinput_cell}
            // cellStyleFocused={{
            //   borderColor: 'red',
            // }}
            cellSize={50}
            codeLength={6}
            value={pin}
            onTextChange={password => setPin(password)}
          />

          <View>
            {/* <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            /> */}
            
            <TouchableOpacity style={pin == otp ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
            >
            <Text style={pin == otp ? styles.buttonText : styles.buttonTextDisabled}>
              Next
            </Text>
          </TouchableOpacity>

          {/* <Text style={styles.debugContent}>
            { '{ ' +  "\n" +
              'otp : ' + otp + ',' + "\n" +
              'pin : ' + pin + ',' + "\n" +
              '}' }
          </Text> */}

          </View>

        </SafeAreaView>

    </View>
    
  );
};
export default SignUpOtpScreen;
