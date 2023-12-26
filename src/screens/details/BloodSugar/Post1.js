import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="What is blood sugar";
    const text1="Blood sugar refers to the concentration of glucose in the bloodstream, which is a crucial substance for the body to maintain normal physiological functions. Glucose is the primary source of energy for the body, derived from the food we eat and transported through the blood to various organs and tissues."
    const content2="Blood Sugar and Health";
    const text2="The level of blood sugar directly affects the body's metabolism and energy supply, so it is very important to health. \n\n\Under normal circumstances, the blood sugar level of the human body fluctuates within a certain range, which is affected by many factors, such as diet, exercise, drugs, hormones, etc. If blood sugar levels are too high or too low, it can have adverse effects on the body. \n\n\When blood sugar is too high, it will lead to hyperglycemia, which may cause complications such as diabetes, cardiovascular disease, and kidney disease. When blood sugar is too low, it will lead to hypoglycemia, which may cause dizziness, fatigue, sweating, heart palpitations and other symptoms, and even life-threatening in severe cases. \n\n\ "
    const image = require("../../../assets/images/post1BloodSugar.jpg");
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