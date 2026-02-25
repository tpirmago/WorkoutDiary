import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

export const exerciseListModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: COLORS.text,
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
  summarySection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  summaryTitle: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    marginBottom: 8,
  },
  tableHeader: {
    color: COLORS.text,
    fontSize: 14,
  },
  tableCell: {
    color: COLORS.text,
  },
  tableCellAccent: {
    color: ACCENT_COLOR,
    fontFamily: FONTS.medium,
  },
  scroll: {
    flex: 1,
  },
  empty: {
    color: COLORS.text,
    padding: 24,
    textAlign: 'center',
  },
});
