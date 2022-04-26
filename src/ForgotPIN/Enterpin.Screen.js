import React from 'react';
import {StatusBar, Text, TouchableOpacity, View, SafeAreaView, MyAppText, MyAppHeaderText, TextInput, TouchableHighlight, Button, Alert} from 'react-native';
import styles from './Enterpin.Style';
import colors from '../Themes/Colors';
import {barStyle} from '../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const EnterpinScreen = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("+60");

  const goLoginScreen = () => {
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
          <Text style={styles.titleToolbar}>Enter new 6-digit PIN</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderToolbar()}

        <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>
          </Text>
          <Text style={styles.textContent}>
            The 6-digit PIN will be asked when you transact
          </Text>
          
          <View>
            <Text style={styles.innerText}>
              Your PIN
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={''}
            />
            
            <Text style={styles.innerText}>
              Confirm your PIN
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={''}
            />

            <TouchableHighlight 
              style={styles.buttonWrapper}
            >
              <Button 
                title="Next"
                color="#ffc107"
                onPress={goLoginScreen}
              /> 
            </TouchableHighlight> 

          </View>

        </SafeAreaView>

    </View>
    
  );
};
export default EnterpinScreen;
