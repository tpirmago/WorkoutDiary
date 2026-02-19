import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, COLORS } from './theme';

export const FONTS = {
  regular: 'InstrumentSans_400Regular',
  medium: 'InstrumentSans_500Medium',
  semiBold: 'InstrumentSans_600SemiBold',
};

const { text, surface, background } = COLORS;

export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: surface,
  },
  cardAccent: {
    backgroundColor: surface,
    borderLeftWidth: 4,
    borderBottomWidth: 2,
    borderColor: ACCENT_COLOR,
  },
  addWorkoutCard: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  totalDistanceBar: {
    backgroundColor: surface,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  workoutItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: surface,
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: ACCENT_COLOR,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: text,
  },
  seeAllLink: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: ACCENT_COLOR,
  },
  accentText: {
    color: ACCENT_COLOR,
    fontFamily: FONTS.semiBold,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: surface,
    borderRadius: 16,
    padding: 24,
    margin: 24,
    width: '100%',
    maxWidth: 400,
  },
});

export { ACCENT_COLOR };

/** Format for form display: DD/MM/YYYY */
export function formatDisplayDate(date) {
  if (!date) return '';
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/** Format for list: Today, Yesterday, or D.M.YYYY */
export function formatExerciseDate(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const other = new Date(d);
  other.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - other) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}
