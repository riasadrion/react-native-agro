import { green } from 'color-name';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
