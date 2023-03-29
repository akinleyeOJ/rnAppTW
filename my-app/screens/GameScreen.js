import {React, useState, useEffect} from 'react'
import {Text, View, StyleSheet, Alert,SafeAreaView, FlatList } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';

import { Ionicons } from '@expo/vector-icons'

import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
      if (
         (direction === 'lower' && currentGuess < userNumber ) ||
      (direction === 'greater' && currentGuess > userNumber)
      ) {
        Alert.alert("Dont lie", 'you know the answer is wrong...', [{text: 'Sorry!', style: 'cancel'},
      ]);
      return;
      }


      if (direction === 'lower') {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumber);
      setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds, ])
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>  
     <Title> Opponents Guess</Title>
     <NumberContainer>{currentGuess}</NumberContainer>
      
      <Card>
        <Text style={styles.instructionText}>Higher or Lower?</Text>

       <View style={styles.buttonsContainer}>  
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            {/* - */} <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            {/* + */}<Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
       </View>
      </Card>

      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        {/* using flat list to map instead */}
              <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                ketExtractor={(item) => item} />
      </View>
    </View>
    
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText:{
    color: 'yellow',
    fontSize: 24
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})
