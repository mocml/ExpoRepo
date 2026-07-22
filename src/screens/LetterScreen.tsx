import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function LetterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Letter Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 }
});
