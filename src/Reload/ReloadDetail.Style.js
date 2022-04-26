import {StyleSheet} from 'react-native';
import ApplicationStyle from '../Themes/Application.Style';
import {fontFamily, fontSize} from '../const';
import colors from '../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  textContent: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    // backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
  },

  title_grid_container: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 20
  },
  
  grid_container:{
    // backgroundColor: 'yellow',
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 0
  },

  tc_grid_container: {
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 50
  },
  
  tc_container: {
    backgroundColor: "white",
    width:'100%',
    height:50,
    padding: 15,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
  },

  menuBox:{
    backgroundColor: "#ffffff",
    width:'27%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7
  },

  grid_icon: {
    width: '20%',
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

  titleCredit: {
    // backgroundColor: "red",
    width:'100%',
    height:20,
    margin:7,
    paddingLeft: 15
  },

  titleGridBox:{
    backgroundColor: "#ffffff",
    width:'45%',
    height:30,
    fontSize: 12,
    fontWeight: 'bold',
},

  credit_container: {
    backgroundColor: "white",
    width:'100%',
    height:80,
    padding: 15,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
    flex: 1,
    flexDirection: 'column',
  },

  tc_container: {
    backgroundColor: "white",
    width:'100%',
    height:80,
    padding: 15,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
    flex: 1,
    flexDirection: 'row',
  },

  leftTextStyle: {
    color: 'black',
    fontSize: 12,
    alignSelf: 'flex-start',
  },

  rightTextStyle: {
    color: 'black',
    fontSize: 12,
    alignSelf: 'flex-end',
  },

  titleTextStyle: {
    color: 'black',
    fontSize: 14,
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  tcTextStyle: {
    color: 'black',
    fontSize: 14,
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
    width: '80%',
    paddingTop: 5
  },

  creditTextStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  paymentTextStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  gridBox:{
    backgroundColor: "#ffffff",
    width:'27%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
  },

  gridBoxSelected:{
    backgroundColor: "#00468C",
    width:'27%',
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 5,
  },

  info:{
    fontSize: 12,
    color: "#696969",
    paddingTop: 10
  },
  
  infoSelected:{
    fontSize: 12,
    color: "#ffffff",
    paddingTop: 10
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

  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },

  titleText: {
    fontSize: 12,
    paddingLeft: 30
    // textAlign: 'center',
    // fontWeight: 'bold',
  },

  picker: {
    height: 50, 
    width: '100%',
    // backgroundColor: 'yellow'
  },

  androidcard:{
    alignSelf: 'center',
    borderWidth: 1,
    // width: 314,
    borderColor: "#000000",
    // borderBottomLeftRadius: 10,
    height: 50,
    width: '90%',
    backgroundColor: "white",
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
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
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

});
