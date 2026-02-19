import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Text, Menu, Button, TextInput } from 'react-native-paper';
import { ACCENT_COLOR, FONTS } from '../styles/common';
import { COLORS } from '../styles/theme';
import { ICONS, getSportIconSource } from '../assets/icons';

const PLACEHOLDER_COLOR = '#A8A8A8';
const LABEL_COLOR = '#1C1C1C';
const inputTheme = { roundness: 12, colors: { onSurfaceVariant: LABEL_COLOR } };

export const SPORT_OPTIONS = [
  { key: 'cross_country_skiing', label: 'Cross Country Skiing', icon: 'ski-cross-country' },
  { key: 'cycling', label: 'Cycling', icon: 'bike' },
  { key: 'swimming', label: 'Swimming', icon: 'swim' },
];

export default function WorkoutForm({
  onAddExercise,
  onOpenCalendar,
  selectedDate,
  formatDateLabel,
}) {
  const [sportMenuVisible, setSportMenuVisible] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const activityInputRef = useRef(null);
  const dateInputRef = useRef(null);

  const handleDistanceChange = (text) => {
    if (text === '') {
      setDistance('');
      return;
    }
    const normalized = text.replace(',', '.');
    const parts = normalized.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 2) return;
    if (!/^\d*\.?\d*$/.test(normalized)) return;
    setDistance(text);
  };

  const handleAdd = () => {
    const sportOption = SPORT_OPTIONS.find((s) => s.key === selectedSport);
    if (!sportOption || !distance || !duration || !selectedDate) return;
    const distanceNum = parseFloat(distance.replace(',', '.')) || 0;
    onAddExercise({
      sportType: sportOption.label,
      sportKey: sportOption.key,
      distance: distanceNum,
      duration: parseInt(duration, 10) || 0,
      date: selectedDate.toISOString(),
    });
    setSelectedSport(null);
    setDistance('');
    setDuration('');
  };

  const sportLabel = selectedSport
    ? SPORT_OPTIONS.find((s) => s.key === selectedSport)?.label
    : '';

  const dateLabel = formatDateLabel && selectedDate ? formatDateLabel(selectedDate) : '';

  return (
    <View style={styles.card}>
      <Text variant="titleMedium" style={styles.cardTitle}>Add Workout</Text>

      <Menu
        visible={sportMenuVisible}
        onDismiss={() => setSportMenuVisible(false)}
        anchor={
          <Pressable onPress={() => { activityInputRef.current?.focus(); setSportMenuVisible(true); }}>
            <TextInput
              ref={activityInputRef}
              label="Select Activity"
              value={sportLabel}
              mode="outlined"
              editable={false}
              showSoftInputOnFocus={false}
              right={<TextInput.Icon icon={() => <Image source={ICONS.arrowDropDown} style={styles.selectRightIcon} resizeMode="contain" />} />}
              style={styles.selectInput}
              outlineColor="transparent"
              activeOutlineColor={COLORS.background}
              theme={inputTheme}
              placeholderTextColor={PLACEHOLDER_COLOR}
              textColor={LABEL_COLOR}
              pointerEvents="none"
            />
          </Pressable>
        }
        contentStyle={styles.menuContent}
      >
        {SPORT_OPTIONS.map((opt) => (
          <Menu.Item
            key={opt.key}
            leadingIcon={() => <Image source={getSportIconSource(opt.key)} style={styles.menuSportIcon} resizeMode="contain" />}
            onPress={() => {
              setSelectedSport(opt.key);
              setSportMenuVisible(false);
            }}
            title={opt.label}
            titleStyle={styles.menuItemTitle}
          />
        ))}
      </Menu>

      <Pressable onPress={() => { dateInputRef.current?.focus(); onOpenCalendar(); }}>
        <TextInput
          ref={dateInputRef}
          label="Select Date"
          value={dateLabel}
          placeholder="DD/MM/YYYY"
          mode="outlined"
          editable={false}
          showSoftInputOnFocus={false}
          right={<TextInput.Icon icon={() => <Image source={ICONS.calendar} style={styles.selectRightIcon} resizeMode="contain" />} />}
          style={styles.selectInput}
          outlineColor="transparent"
          activeOutlineColor={COLORS.background}
          theme={inputTheme}
          placeholderTextColor={PLACEHOLDER_COLOR}
          textColor={LABEL_COLOR}
          pointerEvents="none"
        />
      </Pressable>

      <View style={styles.row}>
        <TextInput
          label="Distance (km)"
          value={distance}
          onChangeText={handleDistanceChange}
          keyboardType="decimal-pad"
          mode="outlined"
          style={[styles.input, styles.inputHalf]}
          outlineColor="transparent"
          activeOutlineColor={COLORS.background}
          textColor={LABEL_COLOR}
          placeholderTextColor={PLACEHOLDER_COLOR}
          theme={inputTheme}
        />
        <TextInput
          label="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="number-pad"
          mode="outlined"
          style={[styles.input, styles.inputHalf]}
          outlineColor="transparent"
          activeOutlineColor={COLORS.background}
          textColor={LABEL_COLOR}
          placeholderTextColor={PLACEHOLDER_COLOR}
          theme={inputTheme}
        />
      </View>

      <Button
        mode="contained"
        onPress={handleAdd}
        style={styles.addButton}
        labelStyle={styles.addButtonLabel}
      >
        Add Workout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardTitle: {
    color: COLORS.background,
    fontFamily: FONTS.semiBold,
    marginBottom: 12,
  },
  selectInput: {
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  selectRightIcon: {
    width: 24,
    height: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
  },
  inputHalf: {
    flex: 1,
  },
  addButton: {
    backgroundColor: COLORS.background,
    marginTop: 8,
    borderRadius: 12,
  },
  addButtonLabel: {
    color: COLORS.text,
  },
  menuContent: {
    backgroundColor: COLORS.surface,
  },
  menuItemTitle: {
    color: COLORS.text,
  },
  menuSportIcon: {
    width: 24,
    height: 24,
  },
});
