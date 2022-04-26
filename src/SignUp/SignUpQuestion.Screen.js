//ref: https://www.npmjs.com/package/react-native-element-dropdown

import React, {useRef, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActionSheetIOS, TextInput, Picker, Alert} from 'react-native';
import styles from './SignUpQuestion.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';

const SignUpQuestionScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const getCheckPhone = useSelector(state => state.getCheckPhone);
  const question = useSelector(state => state.getQuestion);

  const [text, onChangeText] = React.useState("");
  const [selectedvalue, setSelectedvalue] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);

  const [androiditems, setAndroiditems] = useState([]);
  const [allownext,setAllownext] = useState(false);
  const [iositems, setIositems] = useState(question.data ? question.data.iosdata : ['No Data']);

  console.log('--- iositems',iositems)

  useEffect(() => {
  }, [])

  // useEffect(() => {
  //   if(allownext) {
  //     navigation.navigate('SignUpProfileScreen', {pin: route.params.pin, question_id: selectedvalue, answer: answer});
  //   }
  // }, [allownext])
  
  useEffect(() => {
    if(question.data) {
      setAndroiditems(question.data.data)
    }
  }, [question])

  const handleSubmit = () => {
    console.log('--- handleSubmit')
    const question_answer = answer;    
    const phone = getCheckPhone.data ? getCheckPhone.data.data.phone : "";
    const question_id = selectedvalue;

    //reset
    navigation.navigate('SignUpProfileScreen', {pin: route.params.pin, question_id: selectedvalue, answer: answer});
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
          onPress={() => {
            navigation.goBack()


          }}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Sign Up : Security Question</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };
    
  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
          {
            options: iositems,
            // destructiveButtonIndex: 0,
            cancelButtonIndex: 0,
            userInterfaceStyle: 'light'
          },
          buttonIndex => {
            setSelectedvalue(buttonIndex);
          }
        );
  }

  const onChangeAnswer = e => {
    setAnswer(e);
  }

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>
            Security Question
          </Text>
          <Text style={styles.textContent}>
          Choose a security question and set an answer to protect your account better.
          </Text>          

         {/* android picker */}
         {
            Platform.OS == 'android' &&
              <View style={styles.androidcard}>
                <Picker
                  selectedValue={selectedvalue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedvalue(itemIndex+1);

                    // if(itemIndex !== 0) {
                    //   navigation.navigate('ForgotPinQuestionVerificationScreen', {});
                    //   }

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
                onPress={onPress}
              >
                <Text style={styles.textContent}>
                  {
                    selectedvalue == 0 ? 
                      'Please Select Question' : 
                      iositems[selectedvalue]
                  }
                  
                </Text>
              </TouchableOpacity>
            </View>
          }        

          <TextInput
            style={styles.input}
            onChangeText={onChangeAnswer}
            value={answer}
            placeholder="Enter Answer"
          />
          
          <TouchableOpacity style={answer ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
          >
            <Text style={answer ? styles.buttonText : styles.buttonTextDisabled}>
            Next 
            </Text>
          </TouchableOpacity>

          {/* <Text style={styles.debugContent}>
            { '{ ' + "\n" +
              'selectedvalue : ' + selectedvalue + ',' + "\n" +
              'answer : ' + answer+ ',' + "\n" +
              '}' }
          </Text> */}

        </SafeAreaView>

    </View>
    
  );
};
export default SignUpQuestionScreen;
