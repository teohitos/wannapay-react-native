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
    // marginBottom: 10,
    alignSelf: 'center',
  },

  textPhoneContent: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    // marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
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
    marginTop :10,
    marginBottom: 10
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
    marginTop: 10,
    marginLeft: 15,
    marginBottom: -5
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
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:5,
  },

  top: {
    // backgroundColor: 'green',
    height: 300
  },

  footer:{
    flex: .2,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:5,
  },

  phone:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#000000",
    fontFamily: fontFamily.regular
  },
  name:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#000000",
    fontFamily: fontFamily.regular,
    marginTop: -10
  },

  avatar: {
    backgroundColor: '#cccccc',
    color: '#ffffff',
  },

  modal: {
    flex: 1,
    // backgroundColor: 'red',
    // paddingTop: 50,
    // height: '50%',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    marginBottom: 100,
    // alignItems: "center",
    justifyContent: "center"
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

  closeButton: {
    alignSelf: 'flex-end',
    fontSize: 30,
    paddingRight: 10
  },

  closeButtonWrapper: {
    backgroundColor: colors.bgRoot,   
  },

  scrollView: {
    // backgroundColor: 'red',
    marginHorizontal: 0,
  },

  modalView: {
    backgroundColor: "cyan",
    height: '100%'
  },

  alert: {
    // backgroundColor: 'red', 
    color: 'red', 
    alignSelf: 'center',
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  },

  avatar_container: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    paddingTop: 30,
    // paddingBottom: 30
  },

});
