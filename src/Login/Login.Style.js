//ref: https://github.com/garganurag893/react-native-phone-number-input

import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../const';
import ApplicationStyle from '../Themes/Application.Style';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  titleHeader: {
    fontFamily: fontFamily.demiBold,
    color: colors.charcoalGrey,
    fontSize: fontSize.large,
    marginLeft: 50,
  },
  
  btnGetData: {
    // backgroundColor: colors.charcoalGrey,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },

  textGetData: {
    fontFamily: fontFamily.regular,
    color: colors.white,
    fontSize: fontSize.medium,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  viewLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  textData: {
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    marginTop: 5,
  },
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '90%',
  },

  phoneContainer: {
    width: '92%',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 20
    // height: 50,
  },

  phoneinput_textInput: {
    paddingVertical: 0,
  },

  baseText: {
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#ffffff'
  },

  centerText: {
    fontWeight: 'bold',
    color: '#ffffff',
    // paddingLeft: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },

  innerText: {
    color: 'red'
  },

  buttonWrapper: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#ffc107",
    marginLeft :50,
    marginRight:50,
    marginTop :50,
    marginBottom: 20
  },

  button: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#ffc107",
    marginLeft :50,
    marginRight:50,
    marginTop :50,
    marginBottom: 20
  },

  buttonDisabled: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#cccccc",
    marginLeft :50,
    marginRight:50,
    marginTop :50,
    marginBottom: 20
  },

  buttonText: {
    // fontWeight: 'bold',
    color: '#000000',
    // paddingLeft: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    paddingTop: 10
  },

  buttonTextDisabled: {
    // fontWeight: 'bold',
    color: '#ffffff',
    // paddingLeft: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    paddingTop: 10
  },

  backgroundimage:{
    height: '100%',
    width: '100%',
    // position: 'relative', 
    // top: 0,
    // left: 0
  },

  logo: {
    // flex: 1,
    width: '70%',
    // height: null,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 50,
    // backgroundColor: 'red',
  },

  pincodeinput_container: {
    // backgroundColor: 'yellow',
    width: '100%',
    marginTop: 10
  },

  pincodeinput_cell: {
    borderColor: '#000000', 
    borderWidth: 1,
    backgroundColor: '#ffffff'
  },

  debugContent: {
    fontFamily: fontFamily.demiBold,
    color: colors.red,
    fontSize: fontSize.small,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30
  }
  
});
