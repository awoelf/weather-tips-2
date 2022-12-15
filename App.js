import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Text>Hello!</Text>
    </NavigationContainer>
  );
}
