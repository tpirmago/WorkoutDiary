import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import { FONTS } from '../styles/common';
import { COLORS } from '../styles/theme';
import { ICONS } from '../assets/icons';

const MENU_ITEMS = [
  { key: 'home', icon: 'home', label: 'Home' },
  { key: 'workouts', icon: 'format-list-bulleted', label: 'Workouts' },
  { key: 'add', icon: 'plus', label: 'Add Workout' },
  { key: 'settings', icon: 'cog', label: 'Settings' },
  { key: 'faq', icon: 'help-circle', label: 'FAQ' },
  { key: 'bug', icon: 'bug', label: 'Report Bug' },
];

export default function DrawerMenu({ visible, onClose, onItemPress, onWorkoutsPress, userName }) {
  if (!visible) return null;
  const name = userName?.trim() || 'Reima';

  const handleItemPress = (key) => {
    if (key === 'workouts') onWorkoutsPress?.();
    onItemPress?.(key);
    onClose?.();
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.drawer}>
        <View style={styles.header}>
          <View style={styles.avatarWrap}>
            <Image source={ICONS.user} style={styles.avatar} resizeMode="contain" />
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Drawer.Section>
          {MENU_ITEMS.map((item) => (
            <Drawer.Item
              key={item.key}
              icon={item.icon}
              label={item.label}
              onPress={() => handleItemPress(item.key)}
              labelStyle={styles.label}
              style={styles.item}
            />
          ))}
        </Drawer.Section>
      </View>
      <View style={styles.backdrop} onTouchEnd={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    zIndex: 1000,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  drawer: {
    width: 280,
    backgroundColor: COLORS.surface,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.surface,
  },
  avatarWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
  },
  avatar: {
    width: 48,
    height: 48,
  },
  name: {
    fontSize: 18,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginLeft: 12,
  },
  label: {
    color: COLORS.text,
  },
  item: {
    backgroundColor: 'transparent',
  },
});
