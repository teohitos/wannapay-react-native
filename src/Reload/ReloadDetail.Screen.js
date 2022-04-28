////https://www.npmjs.com/package/react-native-qrcode-scanner

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, Image, Picker, ActionSheetIOS, Linking} from 'react-native';
import styles from './ReloadDetail.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getReloadRequest} from '../Reload/Reload.Action';

const ReloadDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);

  const login = useSelector(state => state.getLogin);
  const reload = useSelector(state => state.getReload);

  const [allownext,setAllownext] = useState(false);
  const [credit, setCredit] = useState(route.params.amount);
  const [selectedvalue, setSelectedvalue] = useState(0);
  const [androiditems, setAndroiditems] = useState([]);
  const [pressonlinebanking, setPressonlinebanking] = useState(false);
  const [presscreditcard, setPresscreditcard] = useState(false);
  const [pressewallet, setPressewallet] = useState(false);
  const [iositems, setIositems] = useState(['Cancel','Ambank','CIMB Bank','Hong Leong Bank','Maybank','RHB Bank']);
  const [token, setToken] = useState(login.data && login.data.data.token);

  useEffect(() => {
  }, [])
  
  useEffect(() => {
    if(reload.data && reload.data.success) {

      if(allownext) {
        setAllownext(false)
        Linking.openURL(reload.data.data.redirect_link);        
      }
    }
  }, [reload])

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
          <Text style={styles.titleToolbar}>Reload eWallet</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const onPressOnlineBanking = () => {
    setPressonlinebanking(true);
    setPresscreditcard(false);
    setPressewallet(false);
  }

  const onPressCreditCard = () => {
    setPressonlinebanking(false);
    setPresscreditcard(true);
    setPressewallet(false);
  }

  const onPressEwallet = () => {
    setPressonlinebanking(false);
    setPresscreditcard(false);
    setPressewallet(true);
  }

  const handleSubmit = () => {
    let provider = '';

    switch (selectedvalue) {
      case 1:
        provider = 'AMB'
        break;
  
      case 2:
        provider = 'CIMB'
        break;
  
      case 3:
        provider = 'HLB'
        break;
    
      case 4:
        provider = 'MBB'
        break;
      
      case 5:
        provider = 'RHB'
        break;
        
      default:
        //
    }

    const payment_mode = 'OB';
    const reload = credit;
    const timestamp = new Date().getTime();

    setAllownext(true)
    dispatch(getReloadRequest({token, payment_mode, reload, provider, timestamp}))
  }

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

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

      <SafeAreaView style={{flex: 1}}>

        <View style={styles.title_grid_container}>
          <View style={styles.credit_container}>
            <Text style={styles.titleTextStyle}>Reload Amount</Text>
            <Text style={styles.creditTextStyle}>{credit}</Text>
          </View>
        </View>

        <View style={styles.title_grid_container}>
          <View style={styles.titleCredit}>
            <Text style={styles.paymentTextStyle}>Payment Method</Text>
          </View>
        </View>

        {/* grid */}
        <View style={styles.grid_container}>

          <TouchableOpacity onPress={onPressOnlineBanking} style={pressonlinebanking ? styles.gridBoxSelected : styles.gridBox}>
            <Image source={require('../../assets/images/banking3x.png')}  
              style={styles.grid_icon}
            />
            <Text style={pressonlinebanking ? styles.infoSelected : styles.info}>Online Banking</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCreditCard} style={presscreditcard ? styles.gridBoxSelected : styles.gridBox}>
            <Image source={require('../../assets/images/creditcard3x.png')}  
              style={styles.grid_icon}
            />
            <Text style={presscreditcard ? styles.infoSelected : styles.info}>Credit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressEwallet} style={pressewallet ? styles.gridBoxSelected : styles.gridBox}>
            <Image source={require('../../assets/images/ewallet3x.png')}  
              style={styles.grid_icon}
            />
            <Text style={pressewallet ? styles.infoSelected : styles.info}>Ewallet</Text>
          </TouchableOpacity>

        </View>

        {
          pressonlinebanking &&
            <View style={styles.title_grid_container}>
              <View style={styles.titleCredit}>
                <Text style={styles.paymentTextStyle}>Bank</Text>
              </View>
            </View>
        }

        {/* android picker */}
        {
            Platform.OS == 'android' && pressonlinebanking &&
              <View style={styles.androidcard}>
                <Picker
                  selectedValue={selectedvalue}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedvalue(itemIndex);

                    // if(itemIndex !== 0) {
                    //   navigation.navigate('ForgotPinQuestionVerificationScreen', {});
                    //   }

                  }}
                >
                  <Picker.Item label={'Please Select'} value={''} />
                  <Picker.Item label={'Ambank'} value={'AMB'} />
                  <Picker.Item label={'CIMB'} value={'CIMB'} />
                  <Picker.Item label={'Hong Leong Bank'} value={'HLB'} />
                  <Picker.Item label={'Maybank'} value={'MBB'} />
                  <Picker.Item label={'RHB Bank'} value={'RHB'} />

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
                <Text 
                  style={styles.textContent}
                >
                  {
                    selectedvalue == 0 ? 
                      'Please Select Bank' : 
                      iositems[selectedvalue]
                  }                  
                </Text>
              </TouchableOpacity>
            </View>
          }        

        {/* disclaimer */}
        <View style={styles.tc_grid_container}>
          <View style={styles.tc_container}>
            <Image source={require('../../assets/images/banking3x.png')}  
              style={styles.grid_icon}
            />
            <Text style={styles.tcTextStyle}>Don't worry, your data is kept accorance to the law and is protected by us</Text>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleSubmit}
          style={selectedvalue && (pressonlinebanking || presscreditcard || pressewallet) ? styles.button : styles.buttonDisabled}
        >
          <Text 
            style={selectedvalue && (pressonlinebanking || presscreditcard || pressewallet)? styles.buttonText : styles.buttonTextDisabled}
          >
            Reload eWallet
          </Text>
        </TouchableOpacity>

        {/* <Text style={styles.debugContent}>
          { '{ ' + "\n" +
            'selectedvalue : ' + selectedvalue + ',' + "\n" +
            'pressonlinebanking : ' + pressonlinebanking + ',' + "\n" +
            'presscreditcard : ' + presscreditcard + ',' + "\n" +
            'pressewallet : ' + pressewallet + ',' + "\n" +
            '}' }
        </Text> */}
        
      </SafeAreaView>
    </View>
    
  );
};
export default ReloadDetailScreen;
