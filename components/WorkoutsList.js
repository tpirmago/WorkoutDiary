import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ExerciseListItem from './ExerciseListItem';
import { commonStyles, FONTS } from '../styles/common';
import { COLORS } from '../styles/theme';

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

const styles = StyleSheet.create({
  list: {
    maxHeight: 320,
  },
  empty: {
    color: COLORS.text,
    fontFamily: FONTS.regular,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
