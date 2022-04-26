import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert} from 'react-native';
import styles from './Otp.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { getForgotPinOtp } from '../api';
import { getForgotPinOtpRequest } from './ForgotPIN.Action';
import SmoothPinCodeInput from "react-native-smooth-pincode-input"

const OtpScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const forgotPinOtp = useSelector(state => state.getForgotPinOtp);

  const phone = route.params.phone;
  const [text, onChangeText] = React.useState("");
  const [dismiss,setDismiss] = useState(false);
  const [pin, setPin] = useState("");

  let otp = '';

  if(forgotPinOtp.data) {
    otp = forgotPinOtp.data.data.OTP;
  }
  
  

  const handleSubmit = () => {
    navigation.navigate('ForgotPinQuestionScreen', {});
  };

  useEffect(() => {
    //OTP only send once
    if(phone && !otp) {
      console.log('--- OTP phone',phone)
      dispatch(getForgotPinOtpRequest(phone))
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
          <Text style={styles.titleToolbar}>Forgot PIN : Enter OTP</Text>
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
            
            <TouchableOpacity style={pin ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
            >
            <Text style={pin ? styles.buttonText : styles.buttonTextDisabled}>
              Next
            </Text>
          </TouchableOpacity>


          </View>

        </SafeAreaView>

    </View>
    
  );
};
export default OtpScreen;
