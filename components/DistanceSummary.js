import React from 'react';
import { View, Text } from 'react-native';
import { distanceSummaryStyles as styles } from '../styles/distanceSummary';

export default function DistanceSummary({ totalDistance }) {
  const value = totalDistance != null ? totalDistance.toFixed(1) : '0';
  return (
    <View style={styles.bar}>
      <Text style={styles.label}>Total distance: </Text>
      <Text style={styles.value}>{value} km</Text>
    </View>
  );
}
