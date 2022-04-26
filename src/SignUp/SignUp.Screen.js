import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert} from 'react-native';
import styles from './SignUp.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import {useDispatch, useSelector} from 'react-redux';

import {getValidatePhoneRequest, getQuestionRequest} from './SignUp.Action';


const SignUpScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)

  const getValidatePhone = useSelector(state => state.getValidatePhone);

  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [phone, setPhone] = useState("");
  const [allownext,setAllownext] = useState(false);

  useEffect(() => {
    dispatch(getQuestionRequest())
  }, [])

  useEffect(() => {
    
    //alert
    if(getValidatePhone.data) {
      if(!getValidatePhone.data.success) {
        if(allownext) {
          Alert.alert(
            "Sign Up",
            getValidatePhone.data.message,
            [
              {
                text: "OK",
                onPress: () => {},
                style: "default",
              },
            ],
            {
              cancelable: true,
                onDismiss: () => 
                  {}
            }
          );
  
        }

      } else {
        if(getValidatePhone.data && getValidatePhone.data.success && allownext) {
          navigation.navigate('SignUpOtpScreen', {phone: getValidatePhone.data.data.phone});
        }
      }

    }
    
  }, [getValidatePhone, allownext])

  const handleSubmit = () => {

    setAllownext(true);

    dispatch(getValidatePhoneRequest(formattedValue.substring(1)))
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
          <Text style={styles.titleToolbar}>Sign Up</Text>
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
            Mobile Number
          </Text>
          <Text style={styles.textContent}>
            Let's get started by keying in your mobile number !
          </Text>
          
          <View>
            <PhoneInput
              // ref={phoneInput}
              defaultValue={formattedValue.substring(1)}
              defaultCode="MY"
              layout="first"
              onChangeText={(text) => {
                setPhone(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.phoneinput_textInput}
              // withDarkTheme
              // withShadow
              // autoFocus
            />            
            
            <TouchableOpacity 
              style={formattedValue ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
            >
            <Text 
              style={formattedValue ? styles.buttonText : styles.buttonTextDisabled}
            >
              Login
            </Text>
          </TouchableOpacity>

          {/* <Text style={styles.debugContent}>
            { '{ ' + "\n" +
              'formattedValue : ' + formattedValue.substring(1) + ',' + "\n" +
              '}' }
          </Text> */}

          </View>

        </SafeAreaView>

    </View>
    
  );
};
export default SignUpScreen;
