import React from 'react';
import { View, Text } from 'react-native';
import { welcomeStyles as styles } from '../styles/welcome';

export default function Welcome({ userName }) {
  const name = userName?.trim() || '';
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Welcome back, <Text style={styles.name}>{name}</Text>
      </Text>
      <Text style={styles.tagline}>Every workout matters — add yours now</Text>
    </View>
  );
}
