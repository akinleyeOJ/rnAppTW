import {Text, View, Image, StyleSheet} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title> Game is Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>

            <Text>Your phone needed xX rounds to guess the number Y.</Text>
        </View>
        
        
    )
}

export default GameOverScreen;

const styles =  StyleSheet.create({
    rootContainer: {
        flex: 1, 
        padding: 24,
        justifyContent: 'center',
        aligItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary3,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
})