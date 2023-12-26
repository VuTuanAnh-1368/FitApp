import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post5 = () => {
    const content1="Sleep helps regulate blood pressure";
    const text1="During sleep, the body's blood pressure naturally lowers, giving the heart a break from its usual workload. \n\n\Chronic lack of sleep or poor quality sleep can disrupt this process and lead to high blood pressure, which is a major risk factor for heart disease.";
    const content2="Sleep helps reduce inflammation";
    const text2="Inflammation is a key contributor to heart disease, and getting enough sleep can help reduce inflammation in the body. \n\n\Sleep deprivation or poor quality sleep can increase inflammation, which can damage the blood vessels and increase the risk of heart disease.";
    const content3="How to get a better sleep?";
    const text3="* Stick to a regular sleep schedule: Try to go to bed and wake up at the same time every day, even on weekends. \n\n\* Create a sleep-conducive environment: Make sure your bedroom is quiet, dark, and cool. Use comfortable pillows and a supportive mattress. \n\n\* Avoid stimulating activities before bedtime: Avoid using electronic devices such as smartphones, tablets, or computers before bed. The blue light emitted by these devices can interfere with your sleep. \n\n\* Limit caffeine and alcohol intake: Avoid consuming caffeine or alcohol before bedtime, as they can interfere with your sleep. \n\n\* Exercise regularly: Regular exercise can help improve the quality of your sleep, but avoid exercising too close to bedtime. \n\n\* Manage stress: Stress can interfere with your sleep, so try to manage your stress levels through techniques such as mindfulness, yoga, or talking to a therapist. \n\n\ "
    const image = require("../../../assets/images/post5BloodPressure.jpg");
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
export default Post5

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