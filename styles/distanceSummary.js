import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

export const distanceSummaryStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
  value: {
    color: ACCENT_COLOR,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
});
