import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { ICONS } from '../assets/icons';

export default function BottomNav({ onFabPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navButton}>
        <Image source={ICONS.home} style={styles.navIcon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.fab} onPress={onFabPress} activeOpacity={0.8}>
        <Image source={ICONS.fab} style={styles.fabIcon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Image source={ICONS.workouts} style={styles.navIcon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    padding: 8,
  },
  navIcon: {
    width: 26,
    height: 26,
    tintColor: COLORS.text,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: ACCENT_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabIcon: {
    width: 28,
    height: 28,
  },
});
