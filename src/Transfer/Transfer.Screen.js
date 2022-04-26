//https://www.npmjs.com/package/react-native-qrcode-svg

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert} from 'react-native';
import styles from './Transfer.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import {useDispatch, useSelector} from 'react-redux';
import {getCheckTransactionPhoneRequest} from '../Transfer/Transfer.Action';
import QRCode from 'react-native-qrcode-svg';

const TransferScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);

  const checkPhone = useSelector(state => state.getCheckTransactionPhone);
  const login = useSelector(state => state.getLogin);

  const [formattedValue, setFormattedValue] = useState("");
  const [allownext,setAllownext] = useState(false);
  const [transferenabled,setTransferenabled] = useState(true);
  const [receiveenabled,setReceiveenabled] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
  }, [])

  useEffect(() => {
    //alert
    if(checkPhone.data) {
      if(!checkPhone.data.success) {

          if(allownext) {
            Alert.alert(
              "Transfer",
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
          navigation.navigate('TransferDetailScreen', {data: checkPhone});
        }

      }
    }

  }, [checkPhone, allownext])

  const handleSubmit = () => {
    setAllownext(true);
    dispatch(getCheckTransactionPhoneRequest(formattedValue.substring(1)))
  };

  const handleTransfer = () => {
    setTransferenabled(true)
    setReceiveenabled(false)
  }

  const handleReceive = () => {
    setReceiveenabled(true)
    setTransferenabled(false)
  }

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
          <Text style={styles.titleToolbar}>Transfer</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>

        {/* button bar */}
          <View style={styles.btnGroup}>
            <TouchableOpacity 
              style={transferenabled ? styles.buttonAction : styles.buttonActionDisabled} 
              onPress={handleTransfer}
            >
              <Text 
                style={transferenabled ? styles.buttonActionText : styles.buttonActionTextDisabled}
              >
                Transfer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={receiveenabled ? styles.buttonAction : styles.buttonActionDisabled} 
              onPress={handleReceive}
            >
              <Text 
                style={receiveenabled ? styles.buttonActionText : styles.buttonActionTextDisabled}
              >
                Receive
              </Text>
            </TouchableOpacity>

          </View>

          {
            transferenabled && 
              <View>
                <Text style={styles.textContent}>
                  Transfer to
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
                
                <TouchableOpacity 
                  style={formattedValue ? styles.button : styles.buttonDisabled}
                  onPress={handleSubmit}
                >
                  <Text 
                    style={formattedValue ? styles.buttonText : styles.buttonTextDisabled}
                  >
                    Next
                  </Text>
                </TouchableOpacity>

                {/* <Text style={styles.debugContent}>
                  { '{ ' + "\n" +
                    'formattedValue : ' + formattedValue.substring(1) + ',' + "\n" +
                    '}' }
                </Text> */}

              </View>
          }

          {
            receiveenabled && 
              <View style={styles.qrcode_container}>
                <QRCode
                  value={login.data.phone}
                  size={250}
                />

                <Text style={styles.textContent}>
                  Scan with your WannaPlay app to send money over
                </Text>

              </View>

              
          }


         
        </SafeAreaView>

    </View>
    
  );
};
export default TransferScreen;
