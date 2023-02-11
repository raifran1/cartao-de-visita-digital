import {StatusBar, StyleSheet} from "react-native";
import {windowHeight, windowWidth} from "../../../src/configs/utils";
import {colors} from "./colors";

export const fontFamily = {
  MonseRegular: 'Montserrat_400Regular',
  MonseMedium: 'Montserrat_500Medium',
  MonseSemiBold: 'Montserrat_600SemiBold',
  MonseBold: 'Montserrat_700Bold',
};

export const tSizes = {
  t1: (windowWidth / 35) + (windowHeight / 35), //36 -> % padrão (depende do tamanho da tela)
  t2: (windowWidth / 45) + (windowHeight / 45), //28 -> % padrão (depende do tamanho da tela)
  t3: (windowWidth / 55) + (windowHeight / 55), //23 -> % padrão (depende do tamanho da tela)
  t4: (windowWidth / 65) + (windowHeight / 65), //19 -> % padrão (depende do tamanho da tela)
  t5: (windowWidth / 75) + (windowHeight / 75), //17 -> % padrão (depende do tamanho da tela)
  t6: (windowWidth / 85) + (windowHeight / 85), //15 -> % padrão (depende do tamanho da tela)
  t7: (windowWidth / 95) + (windowHeight / 95), //13 ~ 14 -> % padrão (depende do tamanho da tela)
  t8: (windowWidth / 100) + (windowHeight / 100), //12 ~ 13 -> % padrão (depende do tamanho da tela)
};

export const buttonLabel = {
  size: tSizes.t6,
  font: fontFamily.primary,
  fontPrimary: fontFamily.MonseRegular,
  fontSecondary: fontFamily.MonseBold
};

export const generalStyles = StyleSheet.create({
  image__background: {
    flex: 1,
    width: '100%',
    height: '101%'
  },

  container_widh_top: {
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  container: {
    marginLeft: 25,
    marginRight: 25,
  },

  flex1: {
    flex: 1,
  },

  shimmerPlaceholderText: {
    marginTop: 5,
    borderRadius: 15,
    alignSelf: 'center'
  },

  shimmerPlaceholderImageProfile: {
    borderRadius: 100,
    borderColor: colors.tertiaryColor,
    borderWidth: 2,
    width: (windowWidth / 25) + (windowHeight / 15),
    height: (windowWidth / 20) + (windowHeight / 16),
  },

  containerBase: {
    backgroundColor: '#fff',
    flex: 1
  },
});