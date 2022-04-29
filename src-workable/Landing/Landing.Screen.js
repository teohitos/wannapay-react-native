//https://www.bootdey.com/react-native-snippet/13/User-home-menu
//https://www.bootdey.com/react-native-snippet/29/List-with-search

import React, {useRef, useState, useEffect} from 'react';
import {StatusBar, Text, TouchableOpacity, View, ImageBackground, SafeAreaView, ScrollView, Image, TextInput, TouchableHighlight, FlatList} from 'react-native';
import styles from './Landing.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getCheckBalanceRequest, getCheckTransactionRequest} from '../SignUp/SignUp.Action';

const LandingScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState);
  
  const login = useSelector(state => state.getLogin);
  const checkBalance = useSelector(state => state.getCheckBalance);
  const checkTransaction = useSelector(state => state.getCheckTransaction);

  const [token, setToken] = useState(login.data && login.data.data.token);
  const [point, setPoint] = useState('pts 0.00');
  const [transactiondata, setTransactiondata] = useState([]);

  useEffect(() => {
    dispatch(getCheckBalanceRequest(token))

    dispatch(getCheckTransactionRequest(token))
  }, [])

  useEffect(() => {
    if(checkBalance.data) {
      setPoint(checkBalance.data.data)
    }
  }, [checkBalance])

  useEffect(() => {
    if(checkTransaction.data && checkTransaction.data.success) {
      let filtered = [];

      checkTransaction.data.data.map((item,key) => {
        
        if(key < 10 ) {
          filtered.push(item)
        }
      })

      setTransactiondata(filtered)
    }
  }, [checkTransaction])

  //timestamp converter
  const timestampConverter = (UNIX_timestamp) => {
    
    var timestamp = UNIX_timestamp*1000
    var date = new Date(timestamp);

    return (date.getDate()+
      "/"+(date.getMonth()+1)+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+ (date.getMinutes() == 0 ? date.getMinutes()+'0' : date.getMinutes()) +
      ":"+date.getSeconds()
      );

  }

  const getColor = type => {

    switch (type) {
      case 'RELOAD':
        return styles.transactionTypeBlue;
        break;
        
        case 'TRANSFER':
          return styles.transactionTypeRed;
          break;
          
        default:
          return styles.transactionTypeBlue;
      }
  }

  const getTitle = (data) => {
    
    switch (data.transaction_type) {
      case 'TRANSFER':
        return 'Transfer to ' + data.receiver_id[0].first_name + ' ' + data.receiver_id[0].last_name;
        break;

      case 'RECEIVE':
        return 'Receive from ' + data.sender_id[0].first_name + ' ' + data.sender_id[0].last_name;
        break;
        
      case 'RELOAD':
        return 'Reload';
        break;
        
      default:
        return ''
    }

  }

  const goTransactionHistory = () => {
    navigation.navigate('TransactionHistoryScreen', {});
  }

  const goTransfer = () => {
    navigation.navigate('TransferScreen', {});
  }

  const goReload = () => {
    navigation.navigate('ReloadScreen', {});
  }

  const goScan = () => {
    navigation.navigate('ScanScreen', {});
  }

  const goMenu = () => {
    console.log('--- goMenu')
    navigation.navigate('ProfileScreen', {})    
  }

  return (
    <View>
      <ImageBackground source={require('../../assets/images/bg3x.png')} 
        resizeMode="cover" 
        style={styles.backgroundimage}
      >
        <SafeAreaView>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

            {/* logo */}
            <View style={styles.logo_container}>
              <View style={styles.logo_col}>
                <Image source={require('../../assets/images/logo3x.png')}  
                  style={styles.logo}
                />
              </View>
              
              <View style={styles.menu_col}>

                <TouchableOpacity 
                  // style={styles.button} 
                  onPress={goMenu}
                >
                  <Image source={require('../../assets/images/menu.png')}  
                    style={styles.menu}
                  />
                </TouchableOpacity>

              </View>
            </View>

            {/* points */}
            <View style={styles.credit_container}>
              <View style={styles.credit_col}>
                <Text style={styles.balanceText}>
                  Wallet Balance
                </Text>
                <Text style={styles.pointText}>
                  {point}
                </Text>
              </View>
              <View style={styles.credit_reload_col}>
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={goReload}
                >
                  <Text style={styles.buttonText}>
                    Reload
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* grid 1 */}
            <View style={styles.transfer_container}>

              <TouchableOpacity 
                style={styles.transfer_menuBox} 
                onPress={goTransfer}
              >
                <Image source={require('../../assets/images/transfer3x.png')}  
                  style={styles.grid_icon}
                />
                <Text style={styles.info}>Transfer</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.transfer_menuBox} 
                onPress={goScan}
              >
                <Image source={require('../../assets/images/scan3x.png')}  
                  style={styles.grid_icon}
                />
                <Text style={styles.info}>Scan</Text>
              </TouchableOpacity>

            </View>
            
            {/* grid 2 */}
            <View style={styles.grid_container}>
              <View style={styles.menuBox}>
                <Image source={require('../../assets/images/bill3x.png')}  
                  style={styles.grid_icon_gray}
                />
                <Text style={styles.info}>Bill</Text>
              </View>

              <View style={styles.menuBox}>
              <Image source={require('../../assets/images/cinema3x.png')}  
                  style={styles.grid_icon_gray}
                />
                <Text style={styles.info}>Cinema</Text>
              </View>

              <View style={styles.menuBox}>
              <Image source={require('../../assets/images/gamecredit3x.png')}  
                  style={styles.grid_icon_gray}
                />
                <Text style={styles.info}>Game Credit</Text>
              </View>

              <View style={styles.menuBox}>
              <Image source={require('../../assets/images/prepaid3x.png')}  
                  style={styles.grid_icon_gray}
                />
                <Text style={styles.info}>Prepaid</Text>
              </View>

              <View style={styles.menuBox}>
                <Image source={require('../../assets/images/evoucher3x.png')}  
                  style={styles.grid_icon_gray}
                />
                <Text style={styles.info}>E-Voucher</Text>
              </View>

              <View style={styles.menuBox}>
                <Image source={require('../../assets/images/more3x.png')}  
                  style={styles.grid_icon_gray}
                />
              <Text style={styles.info}>More</Text>
              </View>

            </View>
            
            {/* list header */}
            <View style={styles.transfer_header_container}>
              <View style={styles.transaction_history_box}>
                <Text style={styles.transaction_history_txt}>Transaction History</Text>
              </View>

              <View style={styles.viewmore_box}>
                <Text style={styles.viewmore_txt} onPress={goTransactionHistory}>View More </Text>
              </View>

            </View>

            {/* list */}
            <View style={styles.transaction_container}>
              <FlatList 
                style={styles.flatlist} 
                enableEmptySections={true}
                data={transactiondata}
                renderItem={({item}) => {
                  return (
                    <View style={styles.transactionCard}>
                      
                      {
                          item.status_name.toLowerCase() !== 'success' && 
                            <View style={styles.alertBox}> 
                              <Text style={styles.alert}>
                                  Unsuccessful
                              </Text>
                            </View>
                        }

                      <View style={styles.transactionBox}> 
                        <Text style={getColor(item.transaction_type)}>{item.transaction_type}</Text>
                      </View>

                      <View style={styles.transactionAmountBox}>
                        <Text style={getColor(item.transaction_type)}>{item.amount}</Text>
                      </View>

                      <View style={styles.transactionBankBox}>
                        <Text style={styles.transactionDescription}>{getTitle(item)}</Text>
                      </View>

                      <View style={styles.transactionTimestampBox}>
                        <Text style={styles.transactionTimestamp}>{ timestampConverter(item.timestamp) }</Text>
                      </View>
                    </View>
                  )}}/>
            </View>

            {/* <Text style={styles.debugContent}>
            { '{ ' + "\n" +
              'token : ' + token + ',' + "\n" +
              '}' }
          </Text> */}

          </ScrollView>

        </SafeAreaView>
      </ImageBackground>
    </View>
    
  );
};
export default LandingScreen;
