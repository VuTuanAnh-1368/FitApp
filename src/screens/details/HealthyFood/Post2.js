import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="What is intermittent fasting?";
    const text1="Intermittent fasting is an eating pattern. Drink in rotation between periods of rest eating and drinking. It does not specify any any kind of food to eat, but instead it's time to eat them.";
    const content2="How to do a half-day diet?";
    const text2="There are many ways to follow a restricted diet fasting degrees, but universal methods. Most popular include: \n\n\ * 16/8 Method: Involves fasting within 16 hours a day and eat within 8 o'clock time frame.\n\n\ * Diet 5:2: Includes regular meals usually within 5 days a week and limited. Limit calories for 2 non-consecutive days continued, about 500-600 calories per day.\n\n\ * Sequential fasting: Includes fasting every subsequent day, or otherwise. What to eat or limit calories to 500 calories per day.\n\n\ * Eat more fruits and vegetables.\n\n\ * Fasting-stop- eating: Includes fasting within 24 hours once or twice each week.\n\n\ "
    const image = require("../../../assets/images/post2HealthyFood.jpg");
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../../assets/images/Layer1.png")} style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width,}}>
                <ImageBackground source={image} style={{height: Dimensions.get("window").height * 0.35, width: Dimensions.get("window").width, alignItems: 'center', }}>
                    <View style={styles.container}>
                        <ScrollView>
            {/**Content1 */}<View style={styles.formatContent}>
                                <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content1}</Text>
                            </View>
                            <Text style={styles.text}>{text1}</Text>
            {/**Content2 */}<View style={styles.formatContent}>
                                <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content2}</Text>
                            </View>
                            <Text style={styles.text}>{text2}</Text>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Post1

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height - 180,
        width: 335,
        backgroundColor: 'white',
        marginTop: 180,
        borderRadius: 20,
    },
    formatContent: {
        width: 325,
        flexDirection: 'row',
    },
    content: {
        fontSize: 26,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 6,
    },
    headerContent: {
        width: 5,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20,
        marginTop: 10,
    }
})