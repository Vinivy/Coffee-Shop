import Screen from '@/components/Screen';
import LoginScreen from '@/components/Conect/Conect-ToScreen';
import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './Styles';
import Nav from '@/components/Nav/Nav';

export default function App() {
  const [Slogan, setSlogan] = useState(false);

  if (!Slogan) {
    return <Screen onFinish={() => setSlogan(true)} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <LoginScreen />
      
    </View>
  );
};