import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="What is a healthy weight?";
    const text1="A healthy weight refers to a person's body mass index (BMI) between 18.5 and 24.9. BMI is a commonly used indicator to assess whether a person is overweight or obese, calculated based on a person's height and weight.";
    const content2="Why maintain a healthy weight?";
    const text2="Maintaining a healthy weight has many benefits, including reducing the risk of developing diabetes, high blood pressure, heart disease, and some cancers, improving sleep quality, increasing metabolism and immune function, among others.";
    const content3="How to determine if weight is healthy?";
    const text3="One can determine whether their weight is healthy by calculating their BMI. The BMI formula is weight (kg) divided by height (m) squared. For example, a person who is 1.7 meters tall and weighs 65 kilograms has a BMI of 22.5, which is within the healthy weight range. If you calculate BMI using pounds and inches, you can use the following formula: BMI equals the weight in pounds divided by the square of the height in inches, multiplied by a conversion factor of 703.\n\n\However, it is important to note that BMI is not a completely accurate assessment indicator because it cannot distinguish the effects of body composition (such as the proportion of muscle and fat) and distribution (such as the ratio of waist circumference to hip circumference).\n\n\ ";
    const image = require("../../../assets/images/post1BodyWeight.jpg");
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