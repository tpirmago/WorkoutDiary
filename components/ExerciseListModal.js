import React from 'react';
import { View, Modal, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import ExerciseListItem from './ExerciseListItem';
import { SPORT_OPTIONS } from './WorkoutForm';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { FONTS } from '../styles/common';

function sumBySport(exercises) {
  const bySport = {};
  SPORT_OPTIONS.forEach((opt) => {
    bySport[opt.label] = 0;
  });
  exercises.forEach((ex) => {
    bySport[ex.sportType] = (bySport[ex.sportType] || 0) + (ex.distance || 0);
  });
  return bySport;
}

export default function ExerciseListModal({ visible, onClose, exercises }) {
  const bySport = sumBySport(exercises);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Workouts</Text>
            <Button mode="text" textColor={ACCENT_COLOR} onPress={onClose}>
              Close
            </Button>
          </View>

          {exercises.length > 0 && (
            <View style={styles.summarySection}>
              <Text style={styles.summaryTitle}>Distance by sport</Text>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title textStyle={styles.tableHeader}>Sport</DataTable.Title>
                  <DataTable.Title numeric textStyle={styles.tableHeader}>Distance (km)</DataTable.Title>
                </DataTable.Header>
                {SPORT_OPTIONS.map((opt) => (
                  <DataTable.Row key={opt.key}>
                    <DataTable.Cell textStyle={styles.tableCell}>{opt.label}</DataTable.Cell>
                    <DataTable.Cell numeric textStyle={styles.tableCellAccent}>{bySport[opt.label]?.toFixed(1) ?? '0'}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          )}

          <ScrollView style={styles.scroll}>
            {exercises.length === 0 ? (
              <Text style={styles.empty}>No workouts yet.</Text>
            ) : (
              exercises.map((ex) => <ExerciseListItem key={ex.id} exercise={ex} />)
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: FONTS.regular,
    marginBottom: 8,
  },
  tableHeader: {
    color: COLORS.text,
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
