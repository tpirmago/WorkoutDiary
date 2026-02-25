import { StyleSheet } from 'react-native';
import { COLORS } from './theme';
import { FONTS } from './common';

export const calendarModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    margin: 24,
    minWidth: 320,
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    fontFamily: FONTS.medium,
    marginBottom: 16,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginTop: 16,
  },
});
