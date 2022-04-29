import React, { useState, useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, 
  Text, 
  TouchableOpacity, 
  View, 
  SafeAreaView, 
  MyAppText, 
  MyAppHeaderText, 
  TextInput, 
  TouchableHighlight, 
  Button, 
  Alert, 
  ToastAndroid,
  AlertIOS,
} from 'react-native';
import styles from './ForgotPIN.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {getCheckPhoneRequest, getForgotPinQuestionRequest} from './ForgotPIN.Action';
import PhoneInput from "react-native-phone-number-input";

const ForgotPinScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const checkPhone = useSelector(state => state.getCheckPhone);
 
  const phoneInput = useRef<PhoneInput>(null);
  const [formattedValue, setFormattedValue] = useState("");
  const [phone, setPhone] = useState("");
  const [allownext,setAllownext] = useState(false);

  useEffect(() => {
    dispatch(getForgotPinQuestionRequest());
  }, [])

  useEffect(() => {

    //alert
    if(checkPhone.data) {
      if(!checkPhone.data.success) {

          if(allownext) {
            Alert.alert(
              "Forgot PIN",
              checkPhone.data.message,
              [
                {
                  text: "OK",
                  onPress: () => setAllownext(false),
                  style: "default",
                },
              ],
              {
                cancelable: true,
                  onDismiss: () => 
                  setAllownext(false)
              }
            );
          }
      } else {
        //check if click yet?
        if(checkPhone.data && checkPhone.data.success && allownext) {
          navigation.navigate('OtpScreen', {phone: phone});
        }

      }
    }
  }, [checkPhone, allownext])

  const handleSubmit = () => {

    //reset
    setAllownext(true);
    dispatch(getCheckPhoneRequest(formattedValue.substring(1)))
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
          <Text style={styles.titleToolbar}>Forgot PIN</Text>
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
                setAllownext(false);
                setPhone(text);
              }}
              onChangeFormattedText={(text) => {
                setAllownext(false);
                setFormattedValue(text);
              }}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.phoneinput_textInput}
              // withDarkTheme
              // withShadow
              // autoFocus
            />       
            {/* <TextInput
              style={styles.input}
              onChangeText={onChangePhone}
              value={phone}
              placeholder="60"
            /> */}
            
            {/* <TouchableHighlight 
              style={styles.buttonWrapper}
            >
              <Button 
                title="Next"
                color="#ffc107"
                onPress={getCheckPhone}
                disabled={phone ? false : true}
              /> 
            </TouchableHighlight>  */}

          <TouchableOpacity style={phone ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
          >
            <Text style={phone ? styles.buttonText : styles.buttonTextDisabled}>
              Next
            </Text>
          </TouchableOpacity>

          </View>

        </SafeAreaView>

    </View>
    
  );
};
export default ForgotPinScreen;
