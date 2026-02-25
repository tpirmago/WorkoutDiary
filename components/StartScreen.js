import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { startScreenStyles as styles } from '../styles/startScreen';

const isValidEmail = (value) => {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export default function StartScreen({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const emailValid = isValidEmail(email);
  const canSubmit = name.trim() && emailValid;

  const handleSubmit = () => {
    if (canSubmit) onSubmit({ name: name.trim(), email: email.trim() });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.greeting}>Let's get started</Text>
      <Text style={styles.subtitle}>Enter your details to start tracking your workouts</Text>

      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
        outlineColor="transparent"
        activeOutlineColor={ACCENT_COLOR}
        textColor={COLORS.text}
        placeholderTextColor={COLORS.text}
        theme={{ roundness: 12 }}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        error={!emailValid && email.length > 0}
        style={styles.input}
        outlineColor="transparent"
        activeOutlineColor={ACCENT_COLOR}
        textColor={COLORS.text}
        placeholderTextColor={COLORS.text}
        theme={{ roundness: 12 }}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        disabled={!canSubmit}
      >
        Get Started
      </Button>
    </KeyboardAvoidingView>
  );
}
