import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post2 = () => {
    const content1="Introduction of obesity";
    const text1="Obesity refers to a state where there is an excessive amount of body fat, beyond the normal healthy level. Typically, obesity is defined based on the body mass index (BMI). BMI is a number calculated based o a person's height and weight, used to assess whether a person's weight is in a healthy range.\n\n\According to the World Health Organization's standards, a BMI of 30 or above is considered obese. Obesity is a chronic disease that is associated with a range of health issues including heart disease, diabetes, high blood pressure, and more. \n\n\ ";
    const content2="Categories of obesity";
    const text2="Obesity is frequently subdivided into categories:\n\n\ + Class I: BMI of 30 to < 35, also called as mild obesity \n\n + Class Il: BMI of 35 to < 40, also called as moderate obesity \n\n\ + Class lll: BMI of 40 or higher, also called as severe obesity \n\n\ ";
    const image = require("../../../assets/images/post2BodyWeight.jpg");
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
export default Post2

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