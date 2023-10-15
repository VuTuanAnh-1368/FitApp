import { StyleSheet, Text, TouchableWithoutFeedback, FlatList, View, Image } from "react-native";
import React from "react";
import Animated, { SharedValue, AnimatedRef, useAnimatedStyle, interpolateColor } from "react-native-reanimated";
import { OnboardingData } from "./data";

type Props = {
    dataLength:number
    flatLisIndex: SharedValue<number>;
    flatlisRef: AnimatedRef<FlatList<OnboardingData>>
    x: SharedValue<number>
};
const CustomButton = ({dataLength, flatlisIndex, flatlisRef}:Props) => {
    return (
        <TouchableWithoutFeedback
        onPress={()=>{
            if(flatListIndex.value < dataLength - 1){
                flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
            }
        }}>       
            <Animated.View style={[
                styles.container]
            }>
                <Image source = {require('../../../assets/images/ArrowIcon.png')} />
            </Animated.View>
    </TouchableWithoutFeedback>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        padding:10,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        overflow :'hidden',
        width:60,
        height:60
    },
    arrow : {
        position: 'absolute',
        width:30,
        height:30
    },
});