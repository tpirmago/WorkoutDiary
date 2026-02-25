import React, { useState, useEffect } from 'react';
import { View, Modal, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { calendarModalStyles as styles } from '../styles/calendarModal';

export default function CalendarModal({ visible, initialDate, onSelect, onCancel }) {
  const [date, setDate] = useState(initialDate || new Date());

  useEffect(() => {
    if (visible) setDate(initialDate || new Date());
  }, [visible, initialDate]);

  const handleOk = () => {
    onSelect(date);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
          </Text>
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={(_, selectedDate) => {
              if (selectedDate) setDate(selectedDate);
            }}
            themeVariant="dark"
          />
          <View style={styles.actions}>
            <Button textColor={COLORS.text} onPress={onCancel}>
              Cancel
            </Button>
            <Button textColor={ACCENT_COLOR} onPress={handleOk}>
              OK
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
