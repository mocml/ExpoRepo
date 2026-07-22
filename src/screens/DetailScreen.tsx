import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen (No Footer)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  title: { fontSize: 24 }
});
