import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import Home_Screen from './src/components/Home_Screen/';

export default function App() {
  return (

    <View>
      <Home_Screen/>
    </View>

  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f5f5',
    paddingTop: 80,
  },
});
 */