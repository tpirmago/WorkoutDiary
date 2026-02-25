import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

export const successDialogStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 16,
    padding: 28,
    margin: 24,
    alignItems: 'center',
    minWidth: 280,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  wellDoneIcon: {
    width: 40,
    height: 40,
  },
  title: {
    color: COLORS.background,
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    marginBottom: 8,
  },
  message: {
    color: COLORS.surface,
    fontSize: 14,
    fontFamily: FONTS.regular,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: COLORS.background,
  },
  closeLabel: {
    color: COLORS.text,
    fontFamily: FONTS.medium,
  },
});
