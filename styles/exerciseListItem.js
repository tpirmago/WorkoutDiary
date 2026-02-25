import { StyleSheet } from 'react-native';
import { FONTS } from './common';
import { COLORS } from './theme';

export const exerciseListItemStyles = StyleSheet.create({
  sportIcon: {
    width: 80,
    height: 80,
  },
  content: {
    flex: 1,
  },
  sportName: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  details: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONTS.regular,
    marginTop: 2,
  },
  date: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
});
