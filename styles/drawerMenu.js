import { StyleSheet } from 'react-native';
import { FONTS } from './common';
import { COLORS } from './theme';

export const drawerMenuStyles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    zIndex: 1000,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  drawer: {
    width: 270,
    backgroundColor: COLORS.surface,
    paddingTop: 54,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  avatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginLeft: 12,
    paddingLeft: 6,
  },
  item: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 28,
  },
  itemContent: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
  labelPressed: {
    color: '#DDFF7D',
  },
});
