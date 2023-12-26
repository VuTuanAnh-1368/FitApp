import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="What is a balanced diet?";
    const text1="A balanced diet is a meal plan that includes all the necessary nutrients and in the right amounts to promote good health and condition. It should contain a variety of foods from all food groups, including fruits, vegetables, grains, whole grains, protein, low-fat and healthy fats.";
    const content2="How to follow a balanced diet?";
    const text2="To have a balanced diet, you should:\n\n\ * Eat a variety of foods from all food groups.\n\n\ * Choose fresh, whole foods instead of processed foods.\n\n\ * Limit the amount of sugar, saturated fat and salt in your diet.\n\n\ * Eat more fruits and vegetables.\n\n\ * The diet includes pure protein sources such as fish, chicken, beans and nuts.\n\n\ * Choose healthy fats like olive oil, nuts and avocados.\n\n\ "
    const content3="Benefits of a balanced diet";
    const text3="A balanced diet offers many benefits, including:\n\n\ * Keep a healthy weight.\n\n\ * Reduces the risk of chronic cardiovascular diseases, diabetes and cancer.\n\n\ * Improves digestive function and intestinal health.\n\n\ * Improves brain function, helps keep skin, hair and nails healthy.\n\n\ "
    const image = require("../../../assets/images/post1HealthyFood.jpg");
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