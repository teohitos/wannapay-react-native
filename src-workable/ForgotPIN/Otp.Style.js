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
  
  pincodeinput_container: {
    // backgroundColor: 'yellow',
    width: '100%',
    marginTop: 10
  },

  pincodeinput_cell: {
    borderColor: '#000000', 
    borderWidth: 1,
    backgroundColor: '#ffffff'
  }
  
});
