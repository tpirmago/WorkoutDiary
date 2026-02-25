import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import ExerciseListItem from './ExerciseListItem';
import { commonStyles } from '../styles/common';
import { workoutsListStyles as styles } from '../styles/workoutsList';

export default function WorkoutsList({ exercises, onSeeAll }) {
  const preview = exercises.slice(0, 5);

  return (
    <View>
      <View style={commonStyles.sectionHeader}>
        <Text style={commonStyles.sectionTitle}>Workouts</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={commonStyles.seeAllLink}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list} nestedScrollEnabled>
        {preview.length === 0 ? (
          <Text style={styles.empty}>No workouts yet. Add one above!</Text>
        ) : (
          preview.map((ex) => <ExerciseListItem key={ex.id} exercise={ex} />)
        )}
      </ScrollView>
    </View>
  );
}
