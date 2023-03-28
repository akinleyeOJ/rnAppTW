import React from 'react'
import {Text, View, StyleSheet, SafeAreaView } from 'react-native';

import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>  
     <Title> Opponents Guess</Title>
      
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>
        <Text>Log Rounds</Text>
      </View> */}
    </View>
    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12

  }
})
