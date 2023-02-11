import {StyleSheet} from "react-native";
import {fontFamily, tSizes} from "../../../assets/css/main/general";


export const homePageStyle = StyleSheet.create({
  foreground: {zIndex: -1},
  content: {zIndex:10},

  linearGradient: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)'
  },

  viewImage: {
    width: 183,
    height: 187,
    marginTop: '20%',
    alignSelf: 'center',
    borderRadius: 360,
    borderColor: '#ddd',
    borderWidth: 1.5,
    shadowOpacity: 1,
    shadowOffset: {  width: 180,  height: 180,  },
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 8,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 360,
    borderColor: '#ddd',
    borderWidth: 0.2,
  },

  infoCargo: {
    alignSelf: 'center',
    fontFamily: fontFamily.MonseSemiBold,
    fontSize: tSizes.t6
  },

  infoName: {
    alignSelf: 'center',
    fontFamily: fontFamily.MonseSemiBold,
    fontSize: tSizes.t2
  },

  viewInfo: {
    alignSelf: 'center'
  },

  viewButtons: {
    marginTop: 15,
    paddingTop: 15
  },

  viewButtonsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  buttons: {
    borderColor: '#ddd',
    borderBottomWidth: 2.8,
    borderLeftWidth: 1.8,
    borderRightWidth: 1.8,
  },

  viewQrCode: {
    marginTop: '15%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: 220,
    height: 220,
    alignSelf: 'center',
    elevation: 10,
  },

  viewTextQrCode: {
    flexDirection: 'row',
  },

  textQrCode: {
    alignSelf: 'center',
    fontFamily: fontFamily.MonseSemiBold,
    fontSize: tSizes.t6
  },


});