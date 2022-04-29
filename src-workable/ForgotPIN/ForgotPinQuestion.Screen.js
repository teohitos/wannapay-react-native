//ref: https://www.npmjs.com/package/react-native-element-dropdown

import React, {useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActionSheetIOS, TextInput, Platform, Picker} from 'react-native';
import styles from './ForgotPinQuestion.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {getForgotPinQuestionRequest} from './ForgotPIN.Action';

const ForgotPinQuestionScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const forgotPinQuestion = useSelector(state => state.getForgotPinQuestion);
  // console.log('---- ios forgotPinQuestion',JSON.stringify(forgotPinQuestion.data ? forgotPinQuestion.data.iosdata: []))

  const [text, onChangeText] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(0);
  const [idresult, setIdresult] = useState(0);

  const [androiditems, setAndroiditems] = useState([]);
  const [iosiditems, setIosiditems] = useState([]);
  const [iositems, setIositems] = useState(forgotPinQuestion.data ? forgotPinQuestion.data.iosdata : []);

  useEffect(() => {
    if(forgotPinQuestion.data) {
      setAndroiditems(forgotPinQuestion.data.data)
    }
  }, [forgotPinQuestion])

  useEffect(() => {
    //ios use    
    // console.log('--- androiditems',androiditems)
    // if(iositems.length == 1) {
      // androiditems.map((item, key) => {
        // iositems.push(item.label)
      // })
    // }

    if(iosiditems.length == 1) {
      iosiditems.push("NRIC")
      iosiditems.push("Passport")
    }
    
  }, [androiditems])

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
          <Text style={styles.titleToolbar}>Forgot PIN : Select a Question</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const onPressId = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: iosiditems,
        // destructiveButtonIndex: 0,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        // console.log('--- onPressId buttonIndex',buttonIndex, iosiditems[buttonIndex])
        setIdresult(buttonIndex);

        if(buttonIndex !== 0) {
          navigation.navigate('ForgotPinIdVerificationScreen', {id: buttonIndex});
        }
    }
  );
    
  const onPress = () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: iositems,
      // destructiveButtonIndex: 0,
      cancelButtonIndex: 0,
      userInterfaceStyle: 'light'
    },
    buttonIndex => {
      setResult(buttonIndex);

      if(buttonIndex !== 0) {
        navigation.navigate('ForgotPinQuestionVerificationScreen', {id: buttonIndex});
        }

    }
  );
  
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>
          </Text>
          
          {
            //android picker
            Platform.OS == 'android' &&
              <View style={styles.androidcard}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);

                    if(itemIndex !== 0) {
                      navigation.navigate('ForgotPinIdVerificationScreen', {id: itemIndex});
                      }

                  }}
                >
                      <Picker.Item label={'Please Select ID'} value={'selectid'} />
                      <Picker.Item label={'NRIC'} value={'NRIC'} />
                      <Picker.Item label={'Passport'} value={'Passport'} />
                </Picker>
              </View>   
          }          

          {
            //android picker
            Platform.OS == 'android' &&
              <View style={styles.androidcard}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);

                    if(itemIndex !== 0) {
                      navigation.navigate('ForgotPinQuestionVerificationScreen', {id: itemIndex});
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
                onPress={onPressId}
              >
                <Text style={styles.textContent}>
                  {
                    idresult == 0 ? 
                      'Please Select ID' : 
                      iosiditems[idresult]
                  }
                  
                </Text>
              </TouchableOpacity>
            </View>
          }    

          {
            Platform.OS == 'ios' &&
            <View style={styles.ioscard}>
              <TouchableOpacity
                style={styles.picker}
                onPress={onPress}
              >
                <Text style={styles.textContent}>
                  {
                    result == 0 ? 
                      'Please Select Question' : 
                      iositems[result]
                  }
                  
                </Text>
              </TouchableOpacity>
            </View>
          }        

          <TouchableOpacity style={styles.button} 
              // onPress={goSignUpProfile}
          >
            <Text style={styles.buttonText}>
            Next 
            </Text>
          </TouchableOpacity>

        </SafeAreaView>

    </View>
    
  );
};
export default ForgotPinQuestionScreen;
