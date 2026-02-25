import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

export const startScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
  },
  greeting: {
    fontSize: 26,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginBottom: 32,
  },
  input: {
    backgroundColor: COLORS.surface,
    marginBottom: 16,
    borderRadius: 12,
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    marginTop: 16,
  },
  buttonLabel: {
    color: COLORS.background,
    fontFamily: FONTS.semiBold,
  },
});
