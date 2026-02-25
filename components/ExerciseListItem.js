import React from 'react';
import { View, Text, Image } from 'react-native';
import { SPORT_OPTIONS } from './WorkoutForm';
import { formatExerciseDate, commonStyles } from '../styles/common';
import { getSportIconSource } from '../assets/icons';
import { exerciseListItemStyles as styles } from '../styles/exerciseListItem';

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
