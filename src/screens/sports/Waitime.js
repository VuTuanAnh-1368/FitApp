import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation } from '@react-navigation/native';
import RunningOutDoor from "./RunningOutDoors";
import { ROUTES } from "../../../constants";
const Waitime = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        const time = new Date()
        const timestamp = time.get
        navigation.navigate(ROUTES.Walking);
    }, 5500);
    return (
        <View style={styles.container}>
            <CountdownCircleTimer
                isPlaying
                duration={5}
                colors={['#00A3FF', '#28F9EC', '#28F9AE', '#28F949', '#33FF00']}
                colorsTime={[4, 3, 2, 1, 0]}
            >
                {({ remainingTime }) => <Text style={styles.text}>{remainingTime}</Text>}
            </CountdownCircleTimer>
            <Text style={styles.textbanner}>Let's get ready to practice</Text>
        </View>
    )
}
export default Waitime;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171941',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 44,
        color: '#81acff'
    },
    textbanner: {
        fontSize: 20,
        color: 'white',
        marginVertical: 10,
    }
})