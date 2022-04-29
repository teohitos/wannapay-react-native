import React, {useEffect, useState} from 'react';
import styles from './RootContainer.Style';
import {Keyboard, Platform, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Login/Login.Screen';
import ForgotPinScreen from '../ForgotPIN/ForgotPIN.Screen';
import OtpScreen from '../ForgotPIN/Otp.Screen';
import ForgotPinQuestionScreen from '../ForgotPIN/ForgotPinQuestion.Screen';
import ForgotPinIdVerificationScreen from '../ForgotPIN/ForgotPinIdVerification.Screen';
import ForgotPinQuestionVerificationScreen from '../ForgotPIN/ForgotPinQuestionVerification.Screen';
import SetupPinScreen from '../ForgotPIN/SetupPin.Screen';
import SignUpScreen from '../SignUp/SignUp.Screen';
import SignUpOtpScreen from '../SignUp/SignUpOtp.Screen';
import SignUpSetupPinScreen from '../SignUp/SignUpSetupPin.Screen';
import SignUpQuestionScreen from '../SignUp/SignUpQuestion.Screen';
import SignUpQuestion from '../SignUp/SignUpQuestion.Screen';
import SignUpProfileScreen from '../SignUp/SignUpProfile.Screen';
import SignUpSuccessScreen from '../SignUp/SignUpSuccess.Screen';
import LandingScreen from '../Landing/Landing.Screen';
import TransactionHistoryScreen from '../Landing/TransactionHistory.Screen';
import TransferScreen from '../Transfer/Transfer.Screen';
import TransferDetailScreen from '../Transfer/TransferDetail.Screen';
import TransferSuccessScreen from '../Transfer/TransferSuccess.Screen';
import ScanScreen from '../Scan/Scan.Screen';

import ReloadScreen from '../Reload/Reload.Screen';
import ReloadDetailScreen from '../Reload/ReloadDetail.Screen';

import ProfileScreen from '../Profile/Profile.Screen';

import DetailFollowerScreen from '../DetailFollower/DetailFollower.Screen';
import DrawerNavigatorScreen from '../DrawerNavigator/DrawerNavigator.Screen';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {clearNetworkFail} from '../actions';

const Stack = createStackNavigator();

const RootContainerScreen = () => {
  const sendNetworkFail = useSelector(state => state.sendNetworkFail);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setIsKeyboardShow(true);
        setKeyboardHeight(e.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardShow(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (sendNetworkFail.err) {
    switch (sendNetworkFail.err) {
      case 'NETWORK_ERROR':
        Toast.show('No network connection, please try again');
        break;
      case 'TIMEOUT_ERROR':
        Toast.show('Timeout, please try again');
        break;
      case 'CONNECTION_ERROR':
        Toast.show('DNS server not found, please try again');
        break;
      default:
        Toast.show(sendNetworkFail.err);
        break;
    }
    clearNetworkStatus();
  }

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer" headerMode={'none'}>
          <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ForgotPinScreen"
            component={ForgotPinScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpOtpScreen"
            component={SignUpOtpScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpSetupPinScreen"
            component={SignUpSetupPinScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpQuestionScreen"
            component={SignUpQuestionScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpQuestion"
            component={SignUpQuestion}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ForgotPinQuestionScreen"
            component={ForgotPinQuestionScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="DetailFollowerScreen"
            component={DetailFollowerScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpProfileScreen"
            component={SignUpProfileScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SignUpSuccessScreen"
            component={SignUpSuccessScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="SetupPinScreen"
            component={SetupPinScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ForgotPinIdVerificationScreen"
            component={ForgotPinIdVerificationScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ForgotPinQuestionVerificationScreen"
            component={ForgotPinQuestionVerificationScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="TransactionHistoryScreen"
            component={TransactionHistoryScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="TransferScreen"
            component={TransferScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="TransferDetailScreen"
            component={TransferDetailScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="TransferSuccessScreen"
            component={TransferSuccessScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ScanScreen"
            component={ScanScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ReloadScreen"
            component={ReloadScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ReloadDetailScreen"
            component={ReloadDetailScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/*Keyboard padding*/}
      {isKeyboardShow && Platform.OS === 'ios' ? (
        <View style={{height: keyboardHeight}} />
      ) : null}
    </View>
  );
};
export default RootContainerScreen;
