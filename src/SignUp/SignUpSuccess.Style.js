import {StyleSheet} from 'react-native';
import ApplicationStyle from '../Themes/Application.Style';
import {fontFamily, fontSize} from '../const';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  textContent: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
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

  titleText: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  buttonWrapper: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#ffc107",
    marginLeft :50,
    marginRight:50,
    marginTop :20,
    marginBottom: 20
  },

  picker: {
    height: 50, 
    width: '100%'
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
    marginBottom: 20,
    // backgroundColor: 'red',
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
  
});
