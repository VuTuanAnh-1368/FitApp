import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="What is blood pressure?";
    const text1="Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps blood throughout your body. It is an important measure of your overall health and can be affected by a variety of factors, incLuding age, genetics, lifestyle habits, and underlying medical conditions.";
    const content2="What do blood pressure numbers mean?";
    const text2="Blood pressure is measured in millimeters of mercury (mmHg) and is represented by two numbers, the systolic pressure and the diastolic pressure. The systolic pressure is the top number and represents the pressure in your arteries when your heart beats, or contracts. The diastolic pressure is the bottom number and represents the pressure in your arteries when your heart is arteries, or between beats.";
    const content3="What are normaL blood pressure numbers?";
    const text3="The normal blood pressure range is typically considered to be below 120/80 mmHg. That means the systolic pressure should be less than 120 mmHg while the diastolic pressure less than 80 mmHg. However, if the blood pressure numbers are less than 90/60 mmHg, it is considered as low blood pressure, to which you need to pay attention."
    const content4="What is high blood pressure (hypertension)?";
    const text4="High blood pressure, also known as hypertension, is a condition where the force of blood against the walls of your arteries is consistently too high. This can cause damage to your arteries, as well as increase your risk for heart disease, stroke, and other health problems. \n\n\Hypertension is typically defined as having a blood pressure reading consistently at or above 140/90 mmHg. \n\n\Here is a breakdown of blood pressure categories:\n\n  * Normal blood pressure: less than 120/80 mmHg \n\n\  * Elevated blood pressure: systolic pressure between 120-129 mmHg and diastolic pressure less than 80 mmHg \n\n  * Stage 1 hypertension: systolic pressure between 130-139 mmHg or diastolic pressure between 80-89 mmHg \n\n\  * Stage 2 hypertension: systolic pressure of 140 mmHg or higher or diastolic pressure of 90 mmHg or higher \n\n\  * Hypertensive crisis: systolic pressure over 180 mmHg and/or diastolic pressure over 120 mmHg.\n\n\ "
    const image = require("../../../assets/images/post1BloodPressure.jpg");
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
            {/**Content3 */}<View style={styles.formatContent}>
                                <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content3}</Text>
                            </View>
                            <Text style={styles.text}>{text3}</Text>
            {/**Content4 */}<View style={styles.formatContent}>
                                <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content4}</Text>
                            </View>
                            <Text style={styles.text}>{text4}</Text>
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