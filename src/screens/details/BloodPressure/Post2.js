import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post2 = () => {
    const content1="Hypotension";
    const text1="Hypotension is a medical condition characterized by abnormally low blood pressure. It is typically defined as a systolic blood pressure less than 90 mmHg or a diastolic blood pressure less than 60 mmHg. \n\n\Hypotension can cause symptoms such as dizziness, lightheadedness, fainting, blurred vision, nausea, and fatigue. It can be caused by a variety of factors, including dehydration, blood loss, heart problems, endocrine disorders, nervous system disorders, and certain medications. \n\n It's important to consult with a healthcare provider if you are experiencing symptoms of hypotension.";
    const content2="Elevated blood pressure";
    const text2="Elevated blood pressure is a term used to describe blood pressure readings that are higher than normal but not yet in the high blood pressure range. Specifically, elevated blood pressure is defined as a systolic pressure reading between 120-129 mmHg and a diastolic pressure reading below 80 mmHg. \n\n\Elevated blood pressure is a warning sign that your blood pressure is consistently trending higher than it should be, and it increases your risk of developing hypertension in the future. It is important to take steps to lower your blood pressure if it is consistently elevated, such as maintaining a healthy weight, exercising regularly, reducing your salt intake, and limiting your alcohol consumption.";
    const content3="Hypertension Crisis";
    const text3="Hypertension Crisis is systolic pressure over 180 mmHg and/or diastolic pressure over 120 mmHg.\n\n\ "
    const image = require("../../../assets/images/post2BloodPressure.jpg");
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