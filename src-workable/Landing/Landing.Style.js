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

  backgroundimage:{
    height: '100%',
    width: '100%',
    // position: 'relative', 
    // top: 0,
    // left: 0
  },
  
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    justifyContent: "center",
  },

  logo_container: {
    // backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    height: 70
  },

  credit_container: {
    // backgroundColor: "yellow",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    height: 50
  },

  square: {
    backgroundColor: "#7cb48f",
    width: '30%',
    height: 100,
    margin: 4,
  },

  logo_col: {
    // backgroundColor: "blue",
    width: '50%',
    // height: 100,
    // margin: 4,
  },

  credit_col: {
    // backgroundColor: "#7cb48f",
    width: '50%',
    // height: 100,
    margin: 4,
    paddingLeft: 40,
    alignSelf: 'flex-start'
  },

  credit_reload_col: {
    // backgroundColor: "#7cb48f",
    width: '50%',
    // height: 100,
    margin: 4,
    marginRight: 0
    // paddingRight: 40,
  },
  
  menu_col: {
    // backgroundColor: "green",
    width: '50%',
    paddingRight: 30
  },

  logo_square: {
    backgroundColor: "red",
    width: '50%',
    height: 100,
    margin: 4,
  },

  scrollView: {
    // backgroundColor: 'yellow',
    marginHorizontal: 0,
  },

  logo: {
    // flex: 1,
    width: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  menu: {
    // flex: 1,
    // width: '100%',
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // resizeMode: 'contain',
    alignSelf: 'flex-end',
    // paddingRight: 10
    // justifyContent: 'center',
  },

  balanceText: {
    // fontWeight: 'bold',
    color: '#ffffff',
    // paddingLeft: 80,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlignVertical: 'center',
    // alignContent: 'center',
  },

  pointText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: fontSize.large
    // paddingLeft: 80,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlignVertical: 'center',
    // alignContent: 'center',
  },

  button: {
    height: 40,
    width: '70%',
    borderRadius:10,
    backgroundColor : "#ffc107",
    // marginLeft :50,
    marginRight:30,
    marginTop : 25,
    marginBottom: 20,
    alignSelf: 'flex-end'

  },

  transferButton: {
    // height: 40,
    width: '45%',
    // borderRadius:10,
    backgroundColor : "red",
    // // marginLeft :50,
    // marginRight:30,
    // marginTop : 25,
    // marginBottom: 20,
    // alignSelf: 'flex-end'

  },

  buttonText: {
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

  transfer_container:{
    // backgroundColor: 'yellow',
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  grid_container:{
    // backgroundColor: 'yellow',
    // paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  transfer_menuBox:{
    backgroundColor: "#ffffff",
    width: '42%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7
  },
  
  menuBox:{
    backgroundColor: "#ffffff",
    width:'27%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7
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

  icon: {
    width: 50,
    height: 50,
  },
  
  info:{
    fontSize: 12,
    color: "#696969",
    paddingTop: 0
  },

  grid_icon: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  grid_icon_gray: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
    tintColor: 'gray' 
  },

  transaction_container: {
    flex: 1,
    // backgroundColor: '#EBEBEB',
  },

  transfer_header_container:{
    // backgroundColor: 'cyan',
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    height: 60,
  },

  transaction_history_box: {
    // backgroundColor: "yellow",
    width: '50%',
    // height:40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 0
  },

  transaction_history_txt:{
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: "#696969",
    paddingLeft: 30,
    color: '#ffffff'
  },

  viewmore_txt:{
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: "#696969",
    paddingRight: 30,
    color: '#ffffff'
  },

  viewmore_box:{
    // backgroundColor: "cyan",
    width: '50%',
    // height:40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 0
  },

  listheader: {
    backgroundColor: "#ffffff",
    width: '42%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7
  },

  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius:30,
  },
  saveButtonText: {
    color: 'white',
  },
  flatlist:{
    marginTop:20,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20
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
    height: 70
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

  backgroundimage:{
    height: '100%',
    width: '100%',
    // position: 'relative', 
    // top: 0,
    // left: 0
  },
  
});
