import { StyleSheet } from 'react-native';
import { ACCENT_COLOR } from './common';
import { COLORS } from './theme';

export const bottomNavStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.surface,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  navButton: {
    padding: 8,
  },
  navIcon: {
    width: 26,
    height: 26,
    tintColor: COLORS.text,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: ACCENT_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
  },
  fabIcon: {
    width: 28,
    height: 28,
  },
});
