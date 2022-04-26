import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, Platform, TextInput, TouchableHighlight, ActionSheetIOS, ScrollView, Picker, Alert} from 'react-native';
import styles from './SignUpProfile.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getRegisterRequest} from './SignUp.Action';
import { setAppInfo } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const SignUpProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)
  
  const getValidatePhone = useSelector(state => state.getValidatePhone);
  const getRegister = useSelector(state => state.getRegister);

  const [text, onChangeText] = React.useState("+60");
  const [selectedValue, setSelectedValue] = useState("");

  const [firstname, onChangeFirstname] = React.useState("");
  const [lastname, onChangeLastname] = React.useState("");
  const [idno, onChangeIdno] = React.useState("");
  // const [email, onChangeEmail] = React.useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [idtype, setIdtype] = useState('');
  const [idresult, setIdresult] = useState(0);
  const [thecountryresult, setThecountryresult] = useState(0);

  const [country, setCountry] = useState('');
  const [thecountry, setThecountry] = useState('');
  const [theemail, setTheemail] = useState('');

  const [pin, setPin] = useState('');
  const [question, setQuestion] = useState('');
  const [allownext,setAllownext] = useState(false);

  const [iosiditems, setIosiditems] = useState([]);
  const [iositems, setIositems] = useState(['Cancel', 'NRIC', 'Passport']);
  const [ioscountryitems, setIoscountryitems] = useState(['Cancel', 'Malaysia', 'Singapore']);
  
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const getErrorDetail = data => {
    console.log('--- getErrorDetail data', data)

    if(data && data.email) {
      return data.email;
    }

    return '';
  }

  useEffect(() => {
    console.log('--- getRegister')

    //alert
    if(getRegister.data) {
      if(!getRegister.data.success) {

          if(allownext) {
            Alert.alert(
              "Sign Up",
              getRegister.data.message + "\n" + getErrorDetail(getRegister.data.data),
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
        if(getRegister.data && getRegister.data.success && allownext) {
          navigation.navigate('SignUpSuccessScreen', {});
        }

      }
    }
  }, [getRegister])

  const handleSubmit = () => {
    const phone = getValidatePhone.data.data.phone;
    const pin = route.params.pin;
    const question_id = route.params.question_id;
    const question_answer = route.params.answer;
    const first_name = firstname;
    const last_name = lastname;
    const country = thecountry;
    const identity_type = idtype.toUpperCase();
    const identity_no = idno;
    const email = theemail;
    
    setAllownext(true);

    dispatch(getRegisterRequest({phone, pin, question_id, question_answer, first_name, last_name, country, identity_type, identity_no, email}))
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
          <Text style={styles.titleToolbar}>First Things First</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const onChangeEmail = e => {
    setTheemail(e);
  }

  //ios
  const onPressId = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: iositems,
        // destructiveButtonIndex: 0,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        console.log('--- onPressId buttonIndex',buttonIndex, iositems[buttonIndex])
        setIdtype(iositems[buttonIndex]);
        setIdresult(buttonIndex);
        // if(buttonIndex !== 0) {
        //   navigation.navigate('ForgotPinIdVerificationScreen', {id: buttonIndex});
        // }
    }
  );

  //ios
  const onPressCountry = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ioscountryitems,
        // destructiveButtonIndex: 0,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        console.log('--- onPressCountry buttonIndex', buttonIndex, ioscountryitems[buttonIndex])
        setThecountry(ioscountryitems[buttonIndex]);
        setThecountryresult(buttonIndex);
        // if(buttonIndex !== 0) {
        //   navigation.navigate('ForgotPinIdVerificationScreen', {id: buttonIndex});
        // }
    }
  );
  
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.titleText}>
              First Things First
              </Text>
              <Text style={styles.textContent}>
                Help us to know you a little better. Fret not, we'll keep your personal info
              </Text>
              
              <TextInput
                style={styles.input}
                onChangeText={onChangeFirstname}
                value={firstname}
                placeholder="First Name"
              />

              <TextInput
                style={styles.input}
                onChangeText={onChangeLastname}
                value={lastname}
                placeholder="Last Name"
              />

              {
                //android picker
                Platform.OS == 'android' &&
                  <View style={styles.androidcard}>
                    <Picker
                      selectedValue={selectedValue}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) => {
                        setIdtype(itemValue);

                        // if(itemIndex !== 0) {
                        //   navigation.navigate('ForgotPinIdVerificationScreen', {id: itemIndex});
                        //   }

                      }}
                    >
                          <Picker.Item label={'Please Select ID'} value={'selectid'} />
                          <Picker.Item label={'NRIC'} value={'nric'} />
                          <Picker.Item label={'Passport'} value={'passport'} />
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
                          iositems[idresult]
                      }
                      
                    </Text>
                  </TouchableOpacity>
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
                        console.log('--- itemValue',itemValue)
                        console.log('--- selectedValue',selectedValue)
                        
                        setThecountry(itemValue);

                        // if(itemIndex !== 0) {
                        //   navigation.navigate('ForgotPinIdVerificationScreen', {id: itemIndex});
                        //   }

                      }}
                    >
                          <Picker.Item label={'Please Select Country'} value={'selectid'} />
                          <Picker.Item label={'Malaysia'} value={'malaysia'} />
                          <Picker.Item label={'Singapore'} value={'singapore'} />
                    </Picker>
                  </View>   
              } 

              {
                //ios action sheet
                Platform.OS == 'ios' &&
                <View style={styles.ioscard}>
                  <TouchableOpacity
                    style={styles.picker}
                    onPress={onPressCountry}
                  >
                    <Text style={styles.textContent}>
                      {
                        thecountryresult == 0 ? 
                          'Please Select Country' : 
                          ioscountryitems[thecountryresult]
                      }
                      
                    </Text>
                  </TouchableOpacity>
                </View>
              }    

              <TextInput
                style={styles.input}
                onChangeText={onChangeIdno}
                value={idno}
                placeholder="ID Number"
              />

              <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={theemail}
                placeholder="Email"
              />

              {/* <TouchableHighlight 
                style={styles.buttonWrapper}
              >
                <Button 
                  title="Next"
                  color="#ffc107"
                  onPress={handleSubmit}
                /> 
              </TouchableHighlight>  */}

            <TouchableOpacity style={firstname && lastname && idtype && thecountry && idno && theemail ? styles.button : styles.buttonDisabled} 
              onPress={handleSubmit}
            >
              <Text style={firstname && lastname && idtype && thecountry && idno && theemail ? styles.buttonText : styles.buttonTextDisabled}>
                Next
              </Text>
            </TouchableOpacity>

              {/* <Text style={styles.debugContent}>
                { '{ ' + 
                  'phone : ' + '' + getValidatePhone.data.data.phone + ',' + "\n" +
                  'pin : ' + route.params.pin + ',' + "\n" +
                  'question_id : ' + route.params.question_id + ',' + "\n" +
                  'question_answer : ' + route.params.answer + ',' + "\n" +

                  'firstname : ' + firstname + ',' + "\n" +
                  'lastname : ' + lastname + ',' + "\n" +
                  'identity_type : ' + idtype + ',' + "\n" +
                  'country : ' + thecountry + ',' + "\n" +
                  'identity_no : ' + idno + ',' + "\n" +
                  'email : ' + theemail + ',' + "\n" +

                  'idresult : ' + idresult + ',' + "\n" +
                  'thecountryresult : ' + thecountryresult + ',' + "\n" +
                  '}' }
              </Text> */}
          </ScrollView>
        </SafeAreaView>

    </View>
    
  );
};
export default SignUpProfileScreen;
