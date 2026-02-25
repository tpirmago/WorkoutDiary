import React, { useRef } from 'react';
import { View, Text, Image, Pressable, PanResponder } from 'react-native';
import { Drawer } from 'react-native-paper';
import { ICONS } from '../assets/icons';
import { drawerMenuStyles as styles } from '../styles/drawerMenu';

const MENU_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'workouts', label: 'Workouts' },
  { key: 'add', label: 'Add Workout' },
  { key: 'settings', label: 'Settings' },
  { key: 'faq', label: 'FAQ' },
  { key: 'bug', label: 'Report Bug' },
];

const SWIPE_CLOSE_THRESHOLD = 50;

export default function DrawerMenu({ visible, onClose, onItemPress, onWorkoutsPress, userName }) {
  const name = userName?.trim() || ' ';

  const panResponderClose = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 15;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -SWIPE_CLOSE_THRESHOLD) onClose?.();
      },
    })
  ).current;

  const handleItemPress = (key) => {
    if (key === 'workouts') onWorkoutsPress?.();
    onItemPress?.(key);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.drawer} {...panResponderClose.panHandlers}>
        <View style={styles.header}>
          <View style={styles.avatarWrap}>
            <Image source={ICONS.user} style={styles.avatar} resizeMode="contain" />
          </View>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
        </View>
        <Drawer.Section>
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => handleItemPress(item.key)}
              style={styles.item}
            >
              {({ pressed }) => (
                <View style={styles.itemContent}>
                  <Text
                    style={[styles.label, pressed && styles.labelPressed]}
                    numberOfLines={1}
                  >
                    {item.label}
                  </Text>
                </View>
              )}
            </Pressable>
          ))}
        </Drawer.Section>
      </View>
      <View style={styles.backdrop} onTouchEnd={onClose} />
    </View>
  );
}
