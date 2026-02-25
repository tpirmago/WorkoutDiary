import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { ICONS } from '../assets/icons';
import { headerStyles as styles } from '../styles/header';

export default function Header({ onMenuPress }) {
  return (
    <Appbar.Header style={styles.header} mode="center-aligned">
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
        <Image source={ICONS.hambMenu} style={styles.headerIcon} resizeMode="contain" />
      </TouchableOpacity>
      <Appbar.Content title="Workout Diary" titleStyle={styles.title} />
      <View style={styles.avatarWrap}>
        <Image source={ICONS.user} style={styles.avatar} resizeMode="contain" />
      </View>
    </Appbar.Header>
  );
}
