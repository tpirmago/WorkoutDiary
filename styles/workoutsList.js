import { StyleSheet } from 'react-native';
import { FONTS } from './common';
import { COLORS } from './theme';

export const workoutsListStyles = StyleSheet.create({
  list: {
    maxHeight: 320,
  },
  empty: {
    color: COLORS.text,
    fontFamily: FONTS.regular,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
