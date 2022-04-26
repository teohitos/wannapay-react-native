//https://snyk.io/advisor/npm-package/react-native-daterange-picker
//https://bestofreactjs.com/repo/dilipchandima-rnv-date-range-picker
//https://www.npmjs.com/package/react-native-modal

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, FlatList, TouchableHighlight, Button, Dimensions, Platform, Picker, ActionSheetIOS, TextInput, ScrollView, Pressable} from 'react-native';
import styles from './TransactionHistory.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import DateRangePicker from "rn-select-date-range";
import moment from "moment";
import Modal from "react-native-modal";

const TransactionHistoryScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);
  console.log('--- getState', getState)

  const checkTransaction = useSelector(state => state.getCheckTransaction);

  const [formattedvalue, setFormattedvalue] = useState("");
  const [transactiondata, setTransactiondata] = useState([]);
  const [selectedRange, setRange] = useState({});
  const [min,setMin] = useState('');
  const [max,setMax] = useState('');
  const [filteredby,setFilteredby] = useState('reload');
  const [hidedatepicker, setHidedatepicker] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isdetailmodalvisible, setIsdetailmodalvisible] = useState(false);
  const [selectedvalue, setSelectedvalue] = useState(0);
  const [androiditems, setAndroiditems] = useState([{value: 0, label: 'Cancel'}, {value: 1, label: 'Cancel'}]);
  const [androiditemstype, setAndroiditemstype] = useState([{value: 0, label: 'Please Select Type'}, {value: 1, label: 'Reload'}, {value: 2, label: 'Transfer'}]);
  const [iositems, setIositems] = useState(['Cancel','Reload','Transfer']);
  const [currentdate,setCurrentdate] = useState(Date.now() / 1000);
  const [transactiondetail,setTransactiondetail] = useState('');
  

  useEffect(() => {
  }, [])

  useEffect(() => {
    if(selectedRange) {
      const min_timestamp = dateConverterFirst(selectedRange.firstDate);
      const max_timestamp = dateConverterSecond(selectedRange.secondDate);

      if(min_timestamp) {
        // setMin(1650153600)
        setMin(min_timestamp);
      }

      if(max_timestamp) {
        // setMax(1650326400);
        setMax(max_timestamp);
      }

    }
  }, [selectedRange])

  useEffect(() => {
    setTransactiondata(checkTransaction.data.data);
  }, [checkTransaction])

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
          <Text style={styles.titleToolbar}>Transaction History</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

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

  //first date
  const dateConverterFirst = date => {

    if(date) {
      var myDate = date.split("-");
      var timestamp = new Date( myDate[0], myDate[1] - 1, myDate[2], '00', '00', '00');
  
      return timestamp.getTime() / 1000;  
    }

  }

  // second date
  const dateConverterSecond = date => {

    if(date) {
      var myDate = date.split("-");
      var timestamp = new Date( myDate[0], myDate[1] - 1, myDate[2], '23', '59', '59');
  
      return timestamp.getTime() / 1000;  
    }

  }

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleDetailModal = item => {
    console.log('----- toggleDetailModal item', item)
    setIsdetailmodalvisible(!isdetailmodalvisible);
    setTransactiondetail(item);
    console.log('--- transactiondetail',transactiondetail)

  };
  

  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight =
    Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get(
          "REAL_WINDOW_HEIGHT"
        );

    
  const handleSubmit = () => {
    setModalVisible(false)

    //refresh
    const result = filterData(checkTransaction && checkTransaction.data.data, filteredby);
    setTransactiondata(result);
  }

  const filterData = (data, type) => {
    console.log('--- filterData data',data)
    console.log('--- filterData type',type)
    console.log('--- filterData min',min)
    console.log('--- filterData max',max)
    console.log('--- filterData currentdate',currentdate)

    //filter
    // const filtered0 = data.filter(a => console.log('--- a',a))
    const filtered = data.filter(
      // a => a
      a => a.transaction_type.toLowerCase() == type 
      && a.timestamp >= 1650153600
      // && a.timestamp <= 1650326400
      // && a.timestamp >= (min ? min : 0) \\\
      // && a.timestamp <= (max ? max : currentdate)
    )

    return filtered;
  }
  
  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: iositems,
        // destructiveButtonIndex: 0,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light'
      },
      buttonIndex => {
        let result;
  
        setSelectedvalue(buttonIndex);
        
        //type
        switch (buttonIndex) {
          case 1:
            setFilteredby('RELOAD')

            //refresh
            result = filterData(checkTransaction && checkTransaction.data.data, 'reload');
            break;

          case 2:
            setFilteredby('TRANSFER')

            //refresh
            result = filterData(checkTransaction && checkTransaction.data.data, 'transfer');
            break;
            
          default:
            break;
            
        }

        setTransactiondata(result);

      }
  );

  const handleCloseButton = () => {
    console.log('---- handleCloseButton')
    setIsdetailmodalvisible(!isdetailmodalvisible);
  }
  
  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {/* <View> */}

              {/* android date picker */}
              {
                Platform.OS == 'android' &&
                  <TouchableOpacity 
                    style={styles.androidcard} 
                    onPress={toggleModal}
                  >
                    <Text 
                      style={styles.buttonText}
                    >
                      {selectedRange.firstDate && selectedRange.secondDate ? selectedRange.firstDate + ' - ' + selectedRange.secondDate : 'Please Select Date'}
                    </Text>
                  </TouchableOpacity>
              }          

              {/* android picker - type */}
              {
                Platform.OS == 'android' &&
                  <View style={styles.androidcard}>
                    <Picker
                      selectedValue={selectedvalue}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) => {
                        setSelectedvalue(itemIndex);

                          //type
                          switch (itemIndex) {
                            case 1:
                              setFilteredby('RELOAD')

                              //refresh
                              result = filterData(checkTransaction && checkTransaction.data.data, 'reload');
                              break;

                            case 2:
                              setFilteredby('TRANSFER')

                              //refresh
                              result = filterData(checkTransaction && checkTransaction.data.data, 'transfer');
                              break;
                              
                            default:
                              break;
                              
                          }

                          setTransactiondata(result);

                      }}
                    >
                      {
                        androiditemstype.map((item, key)=>
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
                    onPress={toggleModal}
                  >
                    <Text style={styles.textContent}>
                      {selectedRange.firstDate && selectedRange.secondDate ? selectedRange.firstDate + ' - ' + selectedRange.secondDate : 'Please Select Date'}                      
                    </Text>
                  </TouchableOpacity>
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
                          'Filter By' : 
                          iositems[selectedvalue]
                      }
                      
                    </Text>
                  </TouchableOpacity>
                </View>
              }      

              {/* date picker modal window */}
              <Modal propagateSwipe={true} style={styles.modal} 
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                deviceWidth={deviceWidth}
                deviceHeight={deviceHeight}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="left"
              >
                <View style={{ flex: 1 }}>
                  <View style={styles.date_container}>
                    <DateRangePicker
                      onSelectDateRange={(range) => {
                        setRange(range);
                      }}

                      blockSingleDateSelection={true}
                      responseFormat="YYYY-MM-DD"
                      maxDate={moment()}
                      // minDate={moment().subtract(100, "days")}
                      selectedDateContainerStyle={styles.selectedDateContainerStyle}
                      selectedDateStyle={styles.selectedDateStyle}
                    />
                </View>

                <TouchableOpacity 
                  style={styles.button} 
                  onPress={handleSubmit}
                >
                <Text 
                  style={styles.buttonText}
                >
                  Close
                </Text>
              </TouchableOpacity>

                  {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                </View>
              </Modal>

              {/* transaction details modal */}
              <Modal propagateSwipe={true} style={styles.modal} 
                isVisible={isdetailmodalvisible}
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
                
                <View style={styles.modal_container}>

                    {/* <SafeAreaView style={styles.container}> */}
                      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <Text style={styles.titleText}>
                          Transaction Detail
                        </Text>

                        <Text style={styles.textHeader}>
                          Total Points
                        </Text>
                        
                        <Text style={styles.textAmount}>
                          {transactiondetail.amount}
                        </Text>
                        
                        <Text style={styles.textHeader}>
                          Transaction Type
                        </Text>

                        <Text style={styles.textDetail}>
                          {transactiondetail.transaction_type}
                        </Text>

                        <Text style={styles.textHeader}>
                          Transaction Description
                        </Text>
                        
                        <Text style={styles.textDetail}>
                          {transactiondetail.description}
                        </Text>

                        <Text style={styles.textHeader}>
                          Payment Method
                        </Text>

                        <Text style={styles.textDetail}>
                          {transactiondetail.payment_method}
                        </Text>

                        <Text style={styles.textHeader}>
                          Date / Time
                        </Text>

                        <Text style={styles.textDetail}>
                          {timestampConverter(transactiondetail.timestamp)}
                        </Text>

                        <Text style={styles.textHeader}>
                          eWallet Ref No.
                        </Text>

                        <Text style={styles.textDetail}>
                          {transactiondetail.reference_no}
                        </Text>

                        <Text style={styles.textHeader}>
                          Status
                        </Text>

                        <Text style={styles.textDetail}>
                          {transactiondetail.status_name}
                        </Text>

                        <Text style={styles.textHeader}>
                          Transaction No.
                        </Text>

                        <Text style={styles.textDetail}>
                          {transactiondetail.transaction_no}
                        </Text>

                      </ScrollView>
                    {/* </SafeAreaView> */}

                </View> 
              </Modal>

              {
                !hidedatepicker &&
                  <View style={styles.date_container}>
                    <DateRangePicker
                      onSelectDateRange={(range) => {
                        setRange(range);
                      }}
                      blockSingleDateSelection={true}
                      responseFormat="YYYY-MM-DD"
                      // maxDate={moment()}
                      // minDate={moment().subtract(100, "days")}
                      selectedDateContainerStyle={styles.selectedDateContainerStyle}
                      selectedDateStyle={styles.selectedDateStyle}
                    />
                  </View>
              }

              {/* list */}
              <View style={styles.transaction_container}>
                <FlatList 
                  style={styles.flatlist} 
                  enableEmptySections={true}
                  data={transactiondata}
                  renderItem={({item}) => {
                    return (
                      <View >
                        <TouchableOpacity style={styles.transactionCard}
                          onPress={() => toggleDetailModal(item)}  
                        >
                        
                          {
                            item.status_name.toLowerCase() !== 'success' && 
                              <View style={styles.alertBox}> 
                                <Text style={styles.alert}>
                                    Unsuccessful
                                </Text>
                              </View>
                          }
                          
                          <View style={styles.transactionBox}> 
                            <Text style={getColor(item.transaction_type)}>{item.transaction_type} {item.timestamp} </Text>
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

                        </TouchableOpacity>
                      </View>
                    )}}/>

                {/* <Text style={styles.debugContent}>
                  { '{ ' + "\n" +
                    'selectedvalue : ' + selectedvalue + ',' + "\n" +
                    'filteredby : ' + filteredby + ',' + "\n" +
                    'transactiondata : ' + transactiondata.length + ',' + "\n" +
                    'min : ' + min + ',' + "\n" +
                    'max : ' + max + ',' + "\n" +
                    'currentdate : ' + currentdate + ',' + "\n" +
                    '}' }
                </Text> */}

              </View>

            {/* </View> */}

          </ScrollView>
          
        </SafeAreaView>

    </View>
    
  );
};
export default TransactionHistoryScreen;
