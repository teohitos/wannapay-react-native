//https://callstack.github.io/react-native-paper/avatar-text.html

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, Dimensions, TextInput, Image, Pressable, Alert, ScrollView, FlatList} from 'react-native';
import styles from './TransferDetail.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input"
import {useDispatch, useSelector} from 'react-redux';
import { Avatar } from 'react-native-paper';
import Modal from "react-native-modal";
import {getVerifyPinRequest, getTransferRequest} from '../Transfer/Transfer.Action';


const TransferDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();


  const dispatch = useDispatch();
  const detail = route.params.data.data.data;
 
  const getState = useSelector(state => state);
  console.log('--- getState', getState)

  const checkPhone = useSelector(state => state.getCheckTransactionPhone);
  const login = useSelector(state => state.getLogin);
  const verifyPin = useSelector(state => state.getVerifyPin);
  const transfer = useSelector(state => state.getTransfer);

  const [formattedValue, setFormattedValue] = useState("");
  const [phone, setPhone] = useState("");
  const [allownext,setAllownext] = useState(false);
  const [allowtransfer,setAllowtransfer] = useState(false);

  const [amount, onChangeAmount] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [pin, setPin] = useState("");
  const [token, setToken] = useState(login.data && login.data.data.token);
  const [error, setError] = useState("");

  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight =
    Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get(
          "REAL_WINDOW_HEIGHT"
        );

  useEffect(() => {
  }, [])

  useEffect(() => {
    if(verifyPin.data && verifyPin.data.success) {
      setModalVisible(false)
      setAllowtransfer(true);

    } else {      
      setError(verifyPin.data && verifyPin.data.message)
    }

  }, [verifyPin])

  useEffect(() => {
    const pay_to_phone = detail.phone;
    const timestamp = new Date().getTime();

    if(allowtransfer) {
      dispatch(getTransferRequest({token, pay_to_phone, amount, description, timestamp}))
    }

  }, [allowtransfer])

  useEffect(() => {

    //alert
    if(transfer.data) {
      if(!transfer.data.success) {

          if(allownext) {
            Alert.alert(
              "Transfer",
              transfer.data.message,
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
        if(allowtransfer) {
          navigation.navigate('TransferSuccessScreen', {amount: amount, description: description});
        }
      }
    }  }, [transfer])

  useEffect(() => {
    if(pin.length == 6) {
     dispatch(getVerifyPinRequest({token,pin}))
    }
    
  }, [pin])
      
  useEffect(() => {
    
    //alert
    if(checkPhone.data) {
      if(!checkPhone.data.success) {

          if(allownext) {
            Alert.alert(
              "Check Phone",
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

      }
    }

  }, [checkPhone, allownext])

  const handleSubmit = () => {
    const pay_to_phone = detail.phone;
    const timestamp = new Date().getTime();
    
    //reset
    setPin("");
    setError("");
    setAllownext(true);
    setAllowtransfer(false);
    setModalVisible(true);
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
          <Text style={styles.titleToolbar}>Transfer Detail</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const handleCloseButton = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
       
            <Text style={styles.textHeader}>
              Transfer to
            </Text>
            
             {/* avatar */}
             <TouchableOpacity style={styles.card}>
               <Avatar.Text size={64} label="SB" color="#ffffff" style={styles.avatar} />
              <View style={styles.cardContent}>
                <Text style={styles.phone}>{detail.phone}</Text>
                <Text style={styles.name}>{detail.first_name} {detail.last_name}</Text>
              </View>
            </TouchableOpacity>

           <Text style={styles.textHeader}>
            Transaction Details
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={onChangeAmount}
              value={amount}
              placeholder="Enter Amount"
              keyboardType="numeric"
            />
            
            <Text style={styles.textHint}>
              You can transfer up to 100
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={onChangeDescription}
              value={description}
              placeholder="Enter Purpose"
            />

            <Text style={styles.textHint}>
              0 / 50
            </Text>

            <View>
              <TouchableOpacity 
                style={(amount && description) ? styles.button : styles.buttonDisabled}
                onPress={handleSubmit}
              >
                <Text 
                  style={(amount && description) ? styles.buttonText : styles.buttonTextDisabled}
                >
                  Confirm Transfer
                </Text>
              </TouchableOpacity>

              {/* <Text style={styles.debugContent}>
                { '{ ' + "\n" +
                'allownext : ' + allownext + ',' + "\n" +
                'allowtransfer : ' + allowtransfer + ',' + "\n" +
                'amount : ' + amount + ',' + "\n" +
                'detail : ' + JSON.stringify(detail) + ',' + "\n" +
                  'description : ' + description + ',' + "\n" +
                  'pin : ' + pin + ',' + "\n" +
                  '}' }
              </Text> */}

            </View>

            {/* modal */}
            <Modal propagateSwipe={true} style={styles.modal} 
              isVisible={modalVisible}
              onBackdropPress={() => setModalVisible(false)}
              deviceWidth={deviceWidth}
              deviceHeight={deviceHeight}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="left"
            >
                <Pressable
                  style={styles.closeButtonWrapper}
                  onPress={handleCloseButton}
                >
                  <Text style={styles.closeButton}>x</Text>
                </Pressable>

                <View style={styles.mainContainer}>

                    {/* <SafeAreaView style={styles.container}> */}
                      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <View style={styles.top}>
                          <Text style={styles.enterDigitsToConfirm}>
                            Enter 6-digit PIN to confirm
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
                          <Text style={styles.alert}>
                            {error}
                          </Text>
                        </View>
                        <View style={styles.footer}>
                          <Image source={require('../../assets/images/protectedbyus3x.png')}  
                            style={styles.grid_icon_gray}
                          />
                          <View style={styles.allYourTransactionSecure_container}>
                            <Text style={styles.allYourTransactionSecure}>All your transactions are processed in a safe and secured environment</Text>
                          </View>
                        </View>

                      </ScrollView>
                    {/* </SafeAreaView> */}

                </View> 
            </Modal>

          </ScrollView>

        </SafeAreaView>


    </View>
    
  );
};
export default TransferDetailScreen;
