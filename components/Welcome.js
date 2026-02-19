import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ACCENT_COLOR, FONTS } from '../styles/common';
import { COLORS } from '../styles/theme';

export default function Welcome({ userName }) {
  const name = userName?.trim() || 'Reima';
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Welcome back, <Text style={styles.name}>{name}</Text>
      </Text>
      <Text style={styles.tagline}>Every workout matters — add yours now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
  },
  greeting: {
    fontSize: 22,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
  },
  name: {
    color: ACCENT_COLOR,
  },
  tagline: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.text,
    marginTop: 4,
  },
});
