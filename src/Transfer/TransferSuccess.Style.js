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
  },

  logo: {
    alignSelf: 'center',  
  },

  titleText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000000'
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '90%',
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

  textHeader: {
    fontFamily: fontFamily.bold,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    marginTop: 20,
    marginLeft: 15,
    marginBottom: -5
    // alignSelf: 'center',
  },

  enterDigitsToConfirm: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: -5
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

  allYourTransactionSecure: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: 12,
    marginTop: -10,
    marginLeft: 15,
    marginBottom: 10
  },

  allYourTransactionSecure_container: {
    // backgroundColor: 'red',
    width: '80%',
    marginTop: 20
  },

  avatar_container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },

  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    width: '90%',
    // shadowColor: '#00000021',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    // backgroundColor:"cyan",
    padding: 10,
    flexDirection:'row',
    borderRadius:5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  card_container: {
    // backgroundColor: 'red',
    width: '100%'
  },
  
  scrollView: {
    // backgroundColor: 'red',
    marginHorizontal: 0,
  },

  backgroundimage:{
    height: '100%',
    width: '100%',
    // position: 'relative', 
    // top: 0,
    // left: 0
  },

  // card: {
  //   flex: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'green'
  // }
});
