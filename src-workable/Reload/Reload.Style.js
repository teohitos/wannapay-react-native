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
    // backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
  },

  title_grid_container: {
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  
  grid_container:{
    // backgroundColor: 'yellow',
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  titleGridBox:{
    // backgroundColor: "#ffffff",
    width:'45%',
    // height:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7,
  },

  creditGridBox:{
    // backgroundColor: "yellow",
    width:'70%',
    // height:30,
    // alignItems: 'center',
    justifyContent: 'center',
    margin:7,
  },

  creditTitleGridBox:{
    // backgroundColor: "red",
    width:'20%',
    // height:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin:7,
  },
  
  titleCredit: {
    // backgroundColor: "green",
    width:'100%',
    height:30,
    margin:7,
    paddingLeft: 15
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
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },

  gridBox:{
    backgroundColor: "#ffffff",
    width:'27%',
    height:50,
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
    height:50,
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
    paddingTop: 0
  },

  infoSelected:{
    fontSize: 12,
    color: "#ffffff",
    paddingTop: 0
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
