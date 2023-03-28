import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


import { StyleSheet, ImageBackground, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

import GameScreen from './screens/GameScreen';
 
import Colors from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient colors={[Colors.primary3, Colors.accent1 ]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>  
      </ImageBackground>
      
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
