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
    marginTop: 50,
    // marginLeft: 20,
    alignSelf: 'center',
    // backgroundColor: 'cyan'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
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
    marginTop :50,
    marginBottom: 20
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

  button: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#ffc107",
    marginLeft :50,
    marginRight:50,
    marginTop :30,
    marginBottom: 20
  },

  buttonDisabled: {
    height: 40,
    // width:160,
    borderRadius:10,
    backgroundColor : "#cccccc",
    marginLeft :50,
    marginRight:50,
    marginTop :30,
    marginBottom: 20
  },

  buttonAction: {
    height: 40,
    width:'45%',
    borderRadius:10,
    backgroundColor : "#00468C",
    marginLeft :5,
    marginRight:5,
    marginTop:20,
    marginBottom: 20,
  },

  buttonActionDisabled: {
    height: 40,
    width:'45%',
    borderRadius:10,
    backgroundColor : "#e2e6ea",
    marginLeft :10,
    marginRight:10,
    marginTop:20,
    marginBottom: 20,
  },

  buttonActionText: {
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

  buttonActionTextDisabled: {
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

  debugContent: {
    fontFamily: fontFamily.demiBold,
    color: colors.red,
    fontSize: fontSize.small,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },

  btnGroup: {
    // backgroundColor: 'yellow',
      flexDirection: 'row',
      // alignItems: "center",
      // borderBottomWidth: 1,
      // borderBottomColor: '#6B7280'
  },
  btn: {
      flex: 1,
      borderRightWidth: 0.25,
      borderLeftWidth: 0.25,
      borderColor: '#6B7280'
  },
  btnText: {
      textAlign: 'center',
      paddingVertical: 16,
      fontSize: 14
  },

  qrcode_container: {
    // backgroundColor:'yellow',
    alignItems: "center", 
    paddingTop: 50,
  },
  
  textHint: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: 13,
    marginTop: -10,
    marginLeft: 15,
    marginBottom: 10
    // alignSelf: 'center',
  },

    
});
