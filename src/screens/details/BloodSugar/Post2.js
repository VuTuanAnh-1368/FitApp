import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post2 = () => {
    const content1="Causes of Low Blood Sugar";
    const text1="Overdosing on insulin.\n\n\* Inadequate carbohydrate intake in relation to insulin dosage.\n\n\*Timing of insulin administration.\n\n\* Amount and timing of physical activity.\n\n\* Alcohol consumption.\n\n\* The fat, protein, and fiber content of meals.\n\n\* Hot and humid weather conditions.\n\n\* Sudden changes in daily routine.\n\n\* Exposure to high altitudes.\n\n\* Puberty.\n\n\* Menstruation."
    const content2="Symptoms of Low Blood Sugar";
    const text2="Individual reactions to low blood sugar may vary. It is crucial to recognize your own symptoms. Some common symptoms may include:\n\n\* Rapid heartbeat.\n\n\* Trembling.\n\n\* Perspiration.\n\n\* Nervousness or anxiety.* Irritability or confusion.\n\n\* Dizziness.\n\n\* Hunger.\n\n\As your blood sugar drops further, you may experience more severe symptoms, such as:\n\n\* Weakness.\n\n\* Difficulty walking or blurred vision.\n\n\* Confusion or abnormal behavior.\n\n\* Seizures.\n\n "
    const image = require("../../../assets/images/post2BloodSugar.jpg");
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