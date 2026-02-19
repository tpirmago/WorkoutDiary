import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { FONTS } from '../styles/common';

export default function DistanceSummary({ totalDistance }) {
  const value = totalDistance != null ? totalDistance.toFixed(1) : '0';
  return (
    <View style={styles.bar}>
      <Text style={styles.label}>Total distance: </Text>
      <Text style={styles.value}>{value} km</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  label: {
    color: COLORS.text,
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
  value: {
    color: ACCENT_COLOR,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
});
