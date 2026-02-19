import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { COLORS } from '../styles/theme';
import { ICONS } from '../assets/icons';

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

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.surface,
    elevation: 0,
  },
  iconButton: {
    padding: 8,
    justifyContent: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.text,
  },
  title: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 18,
  },
  avatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
