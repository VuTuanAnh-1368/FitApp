import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
const TriangleView = () => {
    return (
        <View style={styles.container}>

            <View style={styles.triangleCorner}></View>
            <View style={styles.triangleCornerLayer}></View>
            <View style={styles.triangleCorner1}>
                <Text
                    style={{
                        position: 'relative',
                        bottom: 20,
                    }}>ALOOO</Text>
            </View>

        </View>
    );
}
export default TriangleView

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
    }, triangleCorner: {
        position: 'absolute',
        top: 105,
        left: 0,
        width: 300,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: 'gray'
    }, triangleCorner1: {
        position: 'absolute',
        top: 100,
        left: 0,
        width: 130,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 90,
        borderRightColor: 'transparent',
        borderTopColor: 'green'
    }, triangleCornerLayer: {
        position: 'absolute',
        top: 107,
        left: 0,
        width: 297,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 47,
        borderTopWidth: 75,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
    }
});