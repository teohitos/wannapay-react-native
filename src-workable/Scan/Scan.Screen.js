////https://www.npmjs.com/package/react-native-qrcode-scanner

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, PermissionsAndroid, Alert} from 'react-native';
import styles from './Scan.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const ScanScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);

  const checkPhone = useSelector(state => state.getCheckTransactionPhone);

  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);

  useEffect(() => {
    requestCameraPermission()
  }, [])

  async function requestCameraPermission() {
    console.log('--- requestCameraPermission')
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
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
          <Text style={styles.titleToolbar}>Scan</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

      <SafeAreaView style={{flex: 1}}>
      {opneScanner ? (
        <View style={{flex: 1}}>
          <CameraKitCameraScreen
            showFrame={false}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={'yellow'}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>
            Barcode and QR Code Scanner using Camera in React Native
          </Text>
          <Text style={styles.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          {qrvalue.includes('https://') ||
          qrvalue.includes('http://') ||
          qrvalue.includes('geo:') ? (
            <TouchableHighlight 
              // onPress={onOpenlink}
            >
              <Text style={styles.textLinkStyle}>
                {
                  qrvalue.includes('geo:') ?
                  'Open in Map' : 'Open Link'
                }
              </Text>
            </TouchableHighlight>
          ) : null}
          <TouchableHighlight
            // onPress={onOpneScanner}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Open QR Scanner
            </Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
    </View>
    
  );
};
export default ScanScreen;
