import {StyleSheet} from "react-native";
import {colors} from "./colors";
import {fontFamily, tSizes} from "./general";

export const footerStyles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 5,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },

  text: {
    color: colors.secondary,
    fontSize: tSizes.t8,
    fontFamily: fontFamily.primary,
  },
});