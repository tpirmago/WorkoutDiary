import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SPORT_OPTIONS } from './WorkoutForm';
import { formatExerciseDate } from '../styles/common';
import { commonStyles, FONTS } from '../styles/common';
import { COLORS } from '../styles/theme';
import { getSportIconSource } from '../assets/icons';

export default function ExerciseListItem({ exercise }) {
  const option = SPORT_OPTIONS.find((s) => s.label === exercise.sportType) || SPORT_OPTIONS.find((s) => s.key === exercise.sportKey);
  const sportKey = option?.key || 'cross_country_skiing';
  const iconSource = getSportIconSource(sportKey);

  return (
    <View style={commonStyles.workoutItemCard}>
      <View style={commonStyles.iconCircle}>
        <Image source={iconSource} style={styles.sportIcon} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.sportName}>{exercise.sportType}</Text>
        <Text style={styles.details}>
          {exercise.distance} km | {exercise.duration} min
        </Text>
      </View>
      <Text style={styles.date}>{formatExerciseDate(exercise.date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sportIcon: {
    width: 28,
    height: 28,
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
    fontSize: 13,
    fontFamily: FONTS.regular,
  },
});
