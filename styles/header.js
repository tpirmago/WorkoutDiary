import { StyleSheet } from 'react-native';
import { COLORS } from './theme';
import { ACCENT_COLOR, FONTS } from './common';

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.surface,
    elevation: 0,
  },
  iconButton: {
    padding: 10,
    justifyContent: 'center',
  },
  headerIcon: {
    width: 50,
    height: 50,
    marginTop: 8,
    marginLeft: -10,
    tintColor: ACCENT_COLOR,
  },
  title: {
    color: COLORS.text,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  avatarWrap: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
