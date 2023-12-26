import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post5 = () => {
    const content1="Control your diet";
    const text1="Reducing calorie intake is the most effective way to lose weight. Eat more fruits, vegetables, lean protein, and whole grains."
    const content2="Increase physical activity";
    const text2="Exercise can help you burn calories and lose weight. Aim for at least 150 minutes of moderate-intensity exercise per week."
    const content3="Drink plenty of water";
    const text3="Drinking water can help you feel full and reduce your calorie intake. Aim for at least 8 glasses of water per day."
    const content4="Get enough sleep";
    const text4="Lack of sleep can affect your metabolism and increase your appetite. Aim for at least 7 hours of sleep per night."
    const content5="Manage stress";
    const text5="Stress can cause overeating and weight gain. Try relaxation techniques such as meditation or yoga to manage stress."
    const content6="Seek support";
    const text6="Losing weight can be difficult, so seek support from friends, family, or a support group to help you stay on track. \n\n\Remember, losing weight takes time and effort. It's important to make lifestyle changes that you can stick to in the long term to achieve and maintain a healthy weight. \n\n\ "
    const image = require("../../../assets/images/post5BodyWeight.jpg");
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