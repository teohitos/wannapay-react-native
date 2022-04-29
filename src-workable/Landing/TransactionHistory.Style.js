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

  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignSelf: 'center',
    // alignItems: 'center',
    // backgroundColor: 'cyan',
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

  transaction_container: {
    // flex: 1,
    paddingTop:10,
    // backgroundColor: 'yellow',
  },

  flatlist:{
    marginTop:20,
    marginTop: 0,
    // marginLeft: 20,
    // marginRight: 20,
    // backgroundColor: 'red'
  },
  
  transactionCard: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius:10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 70,
  },
  image:{
    width:45,
    height:45,
  },

  transactionTypeBlue:{
    fontSize:12,
    fontFamily: fontFamily.bold,
    color: "blue",
  },

  transactionTypeRed:{
    fontSize:12,
    fontFamily: fontFamily.bold,
    color: "red",
  },

  transactionAmount:{
    fontSize:12,
    fontFamily: fontFamily.bold,
    color: "#cccccc",
  },

  transactionDescription:{
    fontSize:12,
    color: "#000000",
  },

  transactionTimestamp: {
    fontSize:12,
    color: "#000000",
  },

  alert: {
    backgroundColor: '#cccccc', 
    color: '#ffffff', 
    alignSelf: 'flex-start',
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5
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
  
  alertBox:{
    // backgroundColor: "cyan",
    width:'100%',
    height:40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: -15,
    marginBottom: -5
  },

  transactionBox:{
    // backgroundColor: "cyan",
    width:'50%',
    height:40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: -15
  },

  transactionAmountBox:{
    // backgroundColor: "cyan",
    width:'50%',
    height:40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: -15
  },

  transactionBankBox: {
    // backgroundColor: "red",
    width:'50%',
    height:30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: -15
  },

  transactionTimestampBox: {
    // backgroundColor: "red",
    width:'50%',
    height:40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: -18
  },

  date_container: {
    margin: 50,
    // backgroundColor: 'red'
  },

  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  modal: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 50,
    height: '50%',
    margin: 20,
    // alignItems: "center",
    justifyContent: "center"
  },

  modal_container: {
    flex: 1,
    backgroundColor: "white",   
    // backgroundColor: 'red' 
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
  
  scrollView: {
    // backgroundColor: 'red',
    marginHorizontal: 0,
  },

  androidcard:{
    alignSelf: 'center',
    borderWidth: 1,
    // width: 314,
    // borderColor: "yellow",
    // borderBottomLeftRadius: 10,
    height: 50,
    width: '94%',
    backgroundColor: "#ffffff",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },

  ioscard:{
    alignSelf: 'center',
    borderWidth: 1,
    // width: 314,
    // borderColor: "yellow",
    // borderBottomLeftRadius: 10,
    height: 50,
    width: '94%',
    // backgroundColor: "rgba(214,210,210,1)",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },

  closeButton: {
    alignSelf: 'flex-end',
    fontSize: 30,
    paddingRight: 10
  },

  closeButtonWrapper: {
    // backgroundColor: 'yellow'
  },

  textHeader: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    marginTop: 20,
    marginLeft: 15,
    marginBottom: -5
    // alignSelf: 'center',
  },

  textAmount: {
    fontFamily: fontFamily.regular,
    color: colors.primary,
    fontSize: 30,
    // marginTop: 10,
    marginLeft: 15,
    marginBottom: -5
    // alignSelf: 'center',
  },

  inputDisabled: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000000'
  },

  textDetail: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.small,
    marginTop: 5,
    marginLeft: 15,
    marginBottom: -5
    // alignSelf: 'center',
  },

});
