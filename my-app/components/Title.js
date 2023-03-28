import React  from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>
}


export default Title;

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.accent1,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: Colors.accent1,
      padding: 12
  
    }
  })