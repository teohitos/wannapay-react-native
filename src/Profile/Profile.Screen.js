//https://callstack.github.io/react-native-paper/avatar-text.html

import React, { useState, useEffect, useRef } from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, Dimensions, TouchableHighlight, TextInput, Alert, ScrollView, FlatList} from 'react-native';
import styles from './Profile.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import SmoothPinCodeInput from "react-native-smooth-pincode-input"
import {useDispatch, useSelector} from 'react-redux';
import { Avatar } from 'react-native-paper';
import Modal from "react-native-modal";
import {getProfileRequest} from './Profile.Action';
import {getLogoutRequest} from '../Login/Login.Action';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
 
  const getState = useSelector(state => state);
  console.log('--- getState', getState)

  const login = useSelector(state => state.getLogin);
  const profile = useSelector(state => state.getProfile);
  
  const [token, setToken] = useState(login.data && login.data.data.token);
  const [error, setError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [idtype, setIdtype] = useState("");
  const [idno, setIdno] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    dispatch(getProfileRequest(token))
  }, [])

  useEffect(() => {
    console.log('--- profile', profile)

    if(profile && profile.data) {
      setFirstname(profile.data.data.first_name)
      setLastname(profile.data.data.last_name)
      setCountry(profile.data.data.country)
      setIdtype(profile.data.data.identity_type)
      setIdno(profile.data.data.identity_no)
      setEmail(profile.data.data.email)
      setPhone(profile.data.data.phone)
    }
  }, [profile])

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
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Profile</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  const logout = () => {
    dispatch(getLogoutRequest())

    navigation.navigate('LoginScreen', {})
  }

  const handleSubmit = () => {
    Alert.alert(
      "Profile",
      "Are you sure to log out?",
      [
        {
          text: "OK",
          onPress: () => logout(),
          style: "default",
        },
      ],
      // {
      //   cancelable: true,
      //     onDismiss: () => ()
      // }
    );
  }

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.avatar_container}>
              <Avatar.Text size={80} label={ firstname && firstname[0].toUpperCase() + lastname && lastname[0].toUpperCase() } color="#ffffff" style={styles.avatar} />
            </View>

            <Text style={styles.textContent}>
                {firstname} {lastname}
            </Text>

            <Text style={styles.textPhoneContent}>
                {phone}
            </Text>

            <Text style={styles.textHint}>
                First Name
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={firstname}
            />
            
            <Text style={styles.textHint}>
                Last Name
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={lastname}
            />
            
            <Text style={styles.textHint}>
                Country
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={country}
            />
            
            <Text style={styles.textHint}>
                Identity Type
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={idtype}
            />
            
            <Text style={styles.textHint}>
                Identity Number
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={idno}
            />
            
            <Text style={styles.textHint}>
                Email
            </Text>

            <TextInput
              style={styles.input}
              // onChangeText={}
              value={email}
            />
            
            <TouchableOpacity 
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text 
                style={styles.buttonText}
              >
                Logout
              </Text>
            </TouchableOpacity>

          </ScrollView>

        </SafeAreaView>


    </View>
    
  );
};
export default ProfileScreen;
