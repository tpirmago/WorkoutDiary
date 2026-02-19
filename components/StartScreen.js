import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ACCENT_COLOR } from '../styles/common';
import { COLORS } from '../styles/theme';
import { FONTS } from '../styles/common';

export default function StartScreen({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name.trim()) onSubmit({ name: name.trim(), email: email.trim() });
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
        disabled={!name.trim()}
      >
        Get Started
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: COLORS.background,
  },
  greeting: {
    fontSize: 26,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginBottom: 32,
  },
  input: {
    backgroundColor: COLORS.surface,
    marginBottom: 16,
    borderRadius: 12,
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    marginTop: 16,
  },
  buttonLabel: {
    color: COLORS.background,
    fontFamily: FONTS.semiBold,
  },
});
