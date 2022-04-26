//https://reactnative.dev/docs/button
//https://reactnative.dev/docs/text

import React, { useState, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import styles from './Login.Style';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {barStyle} from '../const';
import {useDispatch, useSelector} from 'react-redux';
import NoDataView from '../Components/NoDataView';
import {getLoginRequest} from './Login.Action';
import {useNavigation, useRoute} from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import SmoothPinCodeInput from "react-native-smooth-pincode-input"

const LoginScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const getState = useSelector(state => state);
  console.log('--- getState',getState)

  const login = useSelector(state => state.getLogin);
  const logout = useSelector(state => state.getLogout);

  const forgotPinQuestion = useSelector(state => state.getForgotPinQuestion);
  
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState("Useless Text");
  // const [dismiss,setDismiss] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [formattedValue, setFormattedValue] = useState("");  
  const [allownext,setAllownext] = useState(false);
  const [blur,setBlur] = useState(false);
  const [allowlogout,setAllowlogout] = useState(false);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        // code
        // alert(1111)
    });
    const unsubscribe2 = navigation.addListener('blur', () => {
        // code
        setBlur(true)
    });

    return () => {
     // executed when unmount
     unsubscribe();
     unsubscribe2();
    }
}, [navigation]);

useEffect(() => {
  if(logout.data) {
    if(logout.data.success) {
      // navigation.navigate('LoginScreen', {allowlogout: true});
    }
  }
}, [logout])

useEffect(() => {
  //alert
  if(login.data) {
    if(!login.data.success) {
      if(allownext) {
        Alert.alert(
          "Login",
          login.data.message,
          [
            {
              text: "OK",
              onPress: () => { setAllownext(false) },
              style: "default",
            },
          ],
          {
            cancelable: true,
              onDismiss: () => {}
          }
        );
      }
    
    } else {
      if(!blur && allownext) {
        navigation.navigate('LandingScreen', {});
      }
      
    }
    
  } else {
    // if(allownext) {
    //   Alert.alert(
    //     "Login",
    //     login.err,
    //     [
    //       {
    //         text: "OK",
    //         onPress: () => { setAllownext(false) },
    //         style: "default",
    //       },
    //     ],
    //     {
    //       cancelable: true,
    //         onDismiss: () => {}
    //     }
    //   );
    // }
  }
  
}, [login])

  const goForgotPinScreen = () => {
    navigation.navigate('ForgotPinScreen', {});
  };
  
  const goSignUpScreen = () => {
    navigation.navigate('SignUpScreen', {});
  };
  
  const handleSubmit = () => {
    //reset
    setAllownext(true);

    let phone = formattedValue;
    
    if(phone.substring(0,1) == '+') {
      phone = phone.substring(1)
    } 

    dispatch(getLoginRequest({phone, pin}))
  };
  
  return (
    <View>
      <ImageBackground source={require('../../assets/images/bg3x.png')} 
        resizeMode="cover" 
        style={styles.backgroundimage}
      >
        <SafeAreaView style={styles.container}>
          <Image source={require('../../assets/images/logo3x.png')}  
            style={styles.logo}
           />
          <Text style={styles.baseText}>
            Login
          </Text>
          
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

          <Text style={styles.baseText}>
            6-digit PIN
          </Text>

          {/* <TextInput
            style={styles.input}
            // onChangeText={onChangePin}
            value={pin}
            placeholder="PIN"
            keyboardType="numeric"
          /> */}
          
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
            
          <TouchableOpacity style={styles.btnGetData} 
            onPress={goForgotPinScreen}
          >
            <Text style={styles.centerText}>
              Forgot your PIN?
            </Text>
          </TouchableOpacity>

          {/* <TouchableHighlight 
            style={styles.buttonWrapper}
          >
            <Button 
              title="Login"
              color="#ffc107"
              accessibilityLabel="Learn more about this button"
              onPress={getLogin}
              // disabled={phone && pin ? false : true}
            /> 
          </TouchableHighlight>  */}
          
          <TouchableOpacity style={formattedValue && pin ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
          >
            <Text style={formattedValue && pin ? styles.buttonText : styles.buttonTextDisabled}>
              Login
            </Text>
          </TouchableOpacity>
          
          {/* debug */}
          {/* <Text style={styles.debugContent}>
            { '{ ' + 
              'allowNext : ' + '' + allownext+ ',' + "\n" +
              'formattedValue : ' + formattedValue + ',' + "\n" +
              'pin : ' + pin + ',' + "\n" +
              '}' }
          </Text> */}
          
          <Text style={styles.centerText}
            onPress={goSignUpScreen}
          >
            Don't have an account? Sign-up
          </Text>

        </SafeAreaView>
      </ImageBackground>
    </View>
    
  );
};
export default LoginScreen;
