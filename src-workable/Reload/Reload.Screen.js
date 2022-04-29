////https://www.npmjs.com/package/react-native-qrcode-scanner

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, Image, TextInput, TouchableHighlight, PermissionsAndroid, Alert} from 'react-native';
import styles from './Reload.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const ReloadScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const getState = useSelector(state => state);

  const checkPhone = useSelector(state => state.getCheckTransactionPhone);
  const [press10, setPress10] = useState(false);
  const [press20, setPress20] = useState(false);
  const [press50, setPress50] = useState(false);
  const [press100, setPress100] = useState(false);
  const [press200, setPress200] = useState(false);
  const [press500, setPress500] = useState(false);
  const [allownext,setAllownext] = useState(false);
  // const [amount, onChangeAmount] = React.useState("");
  const [credit, setCredit] = React.useState(0);

  useEffect(() => {
  }, [])

  const onPress10 = () => {
    setPress10(true)
    setPress20(false)
    setPress50(false)
    setPress100(false)
    setPress200(false)
    setPress500(false)
    setCredit(10)
  }
  
  const onPress20 = () => {
    setPress10(false)
    setPress20(true)
    setPress50(false)
    setPress100(false)
    setPress200(false)
    setPress500(false)
    setCredit(20)
  }
  
  const onPress50 = () => {
    setPress10(false)
    setPress20(false)
    setPress50(true)
    setPress100(false)
    setPress200(false)
    setPress500(false)
    setCredit(50)
  }
  
  const onPress100 = () => {
    setPress10(false)
    setPress20(false)
    setPress50(false)
    setPress100(true)
    setPress200(false)
    setPress500(false)
    setCredit(100)
  }
  
  const onPress200 = () => {
    setPress10(false)
    setPress20(false)
    setPress50(false)
    setPress100(false)
    setPress200(true)
    setPress500(false)
    setCredit(200)
  }
  
  const onPress500 = () => {
    setPress10(false)
    setPress20(false)
    setPress50(false)
    setPress100(false)
    setPress200(false)
    setPress500(true)
    setCredit(500)
  }
  
  const handleSubmit = () => {
    setAllownext(true);
    navigation.navigate('ReloadDetailScreen', {amount: credit});
  };

  const onChangeAmount = e => {
    console.log('--- onChangeAmount',e)
    setCredit(e)
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
          <Text style={styles.titleToolbar}>Reload</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

      <SafeAreaView style={{flex: 1}}>

        {/* grid 1 */}
        <View style={styles.title_grid_container}>
        <View style={styles.titleGridBox}>
            <Text style={styles.leftTextStyle}>Amount (CREDIT) *</Text>
          </View>

          <View style={styles.titleGridBox}>
            <Text style={styles.rightTextStyle}>Min reload amount is 1</Text>
          </View>

          <View style={styles.creditTitleGridBox}>
            <Text style={styles.titleTextStyle}>CREDIT</Text>
          </View>

          <View style={styles.creditGridBox}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeAmount}
              value={credit.toString()}
              placeholder="Enter Amount"
              // keyboardType="numeric"
            />
          </View>

        </View>

        {/* grid 2 */}
        <View style={styles.grid_container}>
          
          <TouchableOpacity onPress={onPress10} style={press10 ? styles.gridBoxSelected : styles.gridBox}>
            <Text style={press10 ? styles.infoSelected : styles.info}>10</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress20} style={press20 ? styles.gridBoxSelected : styles.gridBox}>
          <Text style={press20 ? styles.infoSelected : styles.info}>20</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress50} style={press50 ? styles.gridBoxSelected : styles.gridBox}>
          <Text style={press50 ? styles.infoSelected : styles.info}>50</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress100} style={press100 ? styles.gridBoxSelected : styles.gridBox}>
          <Text style={press100 ? styles.infoSelected : styles.info}>100</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress200} style={press200 ? styles.gridBoxSelected : styles.gridBox}>
          <Text style={press200 ? styles.infoSelected : styles.info}>200</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress500} style={press500 ? styles.gridBoxSelected : styles.gridBox}>
          <Text style={press500 ? styles.infoSelected : styles.info}>500</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity 
          style={credit ? styles.button : styles.buttonDisabled}
          onPress={handleSubmit}
        >
          <Text 
            style={credit ? styles.buttonText : styles.buttonTextDisabled}
          >
            Reload eWallet
          </Text>
        </TouchableOpacity>

        
      </SafeAreaView>
    </View>
    
  );
};
export default ReloadScreen;
