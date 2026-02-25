import { StyleSheet, Dimensions } from 'react-native';
import { ACCENT_COLOR, FONTS } from './common';
import { COLORS } from './theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN_H = 32;
const CARD_PADDING_H = 40;
export const MENU_WIDTH = SCREEN_WIDTH - CARD_MARGIN_H - CARD_PADDING_H;

export const workoutFormStyles = StyleSheet.create({
  card: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardTitle: {
    color: COLORS.background,
    fontFamily: FONTS.semiBold,
    marginBottom: 12,
  },
  activityPressable: {},
  datePressable: {},
  selectInput: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  selectRightIcon: {
    width: 24,
    height: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
  },
  inputHalf: {
    flex: 1,
  },
  addButton: {
    backgroundColor: COLORS.background,
    marginTop: 8,
    borderRadius: 12,
  },
  addButtonLabel: {
    color: COLORS.text,
  },
  menuContent: {
    backgroundColor: COLORS.surface,
    height: 'auto',
    width: MENU_WIDTH,
  },
  menuItemTitle: {
    color: COLORS.text,
    marginLeft: 20,
  },
  menuSportIcon: {
    width: 54,
    height: 54,
  },
});
