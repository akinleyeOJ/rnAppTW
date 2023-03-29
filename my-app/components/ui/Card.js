import React from 'react'
import { StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

function Card ({children}) {
  return <View style={styles.card}>
          {children}
  </View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
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
})