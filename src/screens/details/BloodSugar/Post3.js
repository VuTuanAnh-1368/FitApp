import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post3 = () => {
    const content1="The 15-15 Rule";
    const text1="If your blood sugar falls between 55-69 mg/dL, you can use the 15-15 rule to treat it. Consume 15 grams of carbohydrates and check your blood sugar again after 15 minutes. Repeat the process iff your blood sugar is still below your target range.The following items contain approximately 15 grams of carbohydrates: \n\n\* 1 tablespoon of honey or sugar.\n\n\* 4 ounces of regular soda or fruit juice.\n\n\* 1 tube of glucose gel.\n\n\* 3-4 glucose tablets."
    const content2="Severely Low Blood Sugar";
    const text2="Blood sugar levels below 55 mg/dL are considered severely low and cannot be treated using the 15-15 rule. In such cases, the most effective treatment is through the use of injectable glucagon, which can be obtained through a prescription for a glucagon kit. \n\n\After receiving a glucagon injection, it is important to seek emergency medical treatment from a doctor immediately. Additionally, it is crucial that those around you, such as friends, family, co-workers, teachers, and coaches, know how to test your blood sugar and treat severely low blood sugar before it occurs.\n\n\ "
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
export default Post3

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