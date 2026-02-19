import React from 'react';
import { View, Modal, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { FONTS } from '../styles/common';
import { ICONS } from '../assets/icons';

export default function SuccessDialog({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Image source={ICONS.wellDone} style={styles.wellDoneIcon} resizeMode="contain" />
          </View>
          <Text style={styles.title}>Well done!</Text>
          <Text style={styles.message}>Your activity added to Workouts</Text>
          <Button
            mode="contained"
            onPress={onClose}
            style={styles.closeButton}
            labelStyle={styles.closeLabel}
          >
            Close
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 16,
    padding: 28,
    margin: 24,
    alignItems: 'center',
    minWidth: 280,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  wellDoneIcon: {
    width: 40,
    height: 40,
  },
  title: {
    color: COLORS.background,
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    marginBottom: 8,
  },
  message: {
    color: COLORS.surface,
    fontSize: 14,
    fontFamily: FONTS.regular,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: COLORS.background,
  },
  closeLabel: {
    color: COLORS.text,
    fontFamily: FONTS.medium,
  },
});
