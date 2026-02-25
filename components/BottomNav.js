import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ICONS } from '../assets/icons';
import { bottomNavStyles as styles } from '../styles/bottomNav';

export default function BottomNav({ workoutsListVisible, onFabPress }) {
  const showHomeIcon = !!workoutsListVisible;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={onFabPress} activeOpacity={0.8}>
        <Image
          source={showHomeIcon ? ICONS.home : ICONS.workouts}
          style={styles.fabIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
