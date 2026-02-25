import React from 'react';
import { View, Modal, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { ICONS } from '../assets/icons';
import { successDialogStyles as styles } from '../styles/successDialog';

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
