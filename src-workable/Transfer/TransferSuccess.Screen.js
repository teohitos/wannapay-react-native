import React, {useRef, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View, ImageBackground, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert, Picker, Image} from 'react-native';
import styles from './TransferSuccess.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';

const TransferSuccessScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const amount = route.params.amount;

  const handleSubmit = () => {
    navigation.navigate('LoginScreen', {});
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
          <Text style={styles.titleToolbar}>Success</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View>
      <ImageBackground source={require('../../assets/images/bg3x.png')} 
        resizeMode="cover" 
        style={styles.backgroundimage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.card}>
            <Card style={styles.card_container}>
              <Card.Content style={styles.logo}>
                <Image source={require('../../assets/images/success.png')}  
                  style={styles.logo}
                />

                <Text style={styles.textContent}>
                    {amount} POINTS
                </Text>

                <Text style={styles.titleText}>
                  Transfer Successful
                </Text>

                <Text style={styles.textContent}>
                    Your POINTS have been transferred
                </Text>

                <TouchableOpacity style={styles.button} 
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>
                    Go to Home
                  </Text>
                </TouchableOpacity>
                
              </Card.Content>
            </Card>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
    
  );
};
export default TransferSuccessScreen;
