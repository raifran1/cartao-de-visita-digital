// import * as FileSystem from 'expo-file-system';
import {Alert, BackHandler, Dimensions} from "react-native";


export function setNavigation(loginData){
  if (loginData){
    return 'Dashboard' ;
  } else {
    return 'LoginPage';
  }
};

export const backPressed = () => {
  Alert.alert(
    'Fechar o aplicativo',
    'Você deseja sair?',
    [
      {text: 'Não', onPress: () => {}, style: 'cancel'},
      {text: 'Sim', onPress: () => BackHandler.exitApp()},
    ],
    { cancelable: true });
  return true;
};

export const windowWidth = Dimensions.get('window').width;

export const windowHeight = Dimensions.get('window').height;
