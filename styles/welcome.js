import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

export const welcomeStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 4,
  },
  greeting: {
    fontSize: 22,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
  name: {
    color: ACCENT_COLOR,
  },
  tagline: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginTop: 4,
  },
});
