import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post4 = () => {
    const content1="The silent killer";
    const text1="High blood pressure is often referred to as \"\the silent killer\"\ because it usually has no symptoms, but it can lead to serious health problems like heart attack, stroke, and kidney failure.";
    const content2="High blood pressure can affect anyone";
    const text2="While certain factors like age, family history, and lifestyle choices can increase the risk of high blood pressure, it can affect anyone regardless of these factors. It's important to monitor blood pressure regularly and take steps to prevent and manage high blood pressure.";
    const content3="It is not just about salt";
    const text3="While reducing salt intake can help lower blood pressure, there are other dietary factors that can also have an impact, such as increasing potassium, magnesium, and fiber intake."
    const content4="Blood pressure medications have side effects";
    const text4="While medications can be effective in controlling high blood pressure, they can also have side effects like dizziness, fatigue, and sexual dysfunction. It's important to work with a healthcare provider to find the right medication and dosage for individual needs."
    const content5="High blood pressure can be managed";
    const text5="Regular monitoring and early intervention, as well as lifestyle changes such as a healthy diet, regular exercise, and stress reduction techniques, can help prevent and manage high blood pressure."
    const content6="Blood pressure fluctuates throughout the day";
    const text6="Blood pressure can vary throughout the day depending on factors such as stress, exercise, and medications. This is why it's important to monitor your blood pressure regularly.\n\n\ "
    const image = require("../../../assets/images/post4BloodPressure.jpg");
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
            {/**Content5 */}<View style={styles.formatContent}>
                                <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content5}</Text>
                            </View>
                            <Text style={styles.text}>{text5}</Text>
            {/**Content6 */}<View style={styles.formatContent}>
                            <View style={styles.headerContent}></View>
                                <Text style={styles.content}>{content6}</Text>
                            </View>
                            <Text style={styles.text}>{text6}</Text>
                            
                        </ScrollView>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Post4

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