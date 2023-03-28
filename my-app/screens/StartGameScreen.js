import { useState } from 'react';
import React from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native';


import PrimaryButton from '../components/ui/PrimaryButton';

import Colors from '../constants/colors';

function StartGameScreen({onPickedNumber}) {

  const [enteredNumber, setEnteredNumber ] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }


  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert if its not a number or less than 0 or greater than 99
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay' , style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
              <View  style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
        </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary3,
    borderRadius: 6,
    elevation:  4,
    shadowColor: 'yellow',
    shadowOffeset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15
  }, 
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent1,
    borderBottomWidth: 2,
    color: Colors.accent1,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: '1',
  }
})