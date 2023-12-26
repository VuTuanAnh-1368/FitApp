import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from "../../../../constants";
import Post1 from "./Post1";
import { useSelector } from "react-redux"
const BloodPressure = () => {
    const navigation = useNavigation();
    const stylesLightDark = useSelector((state) => state.settings.styles);
    const text1 = "Blood pressure introduction";
    const text2 = "Details of blood pressure numbers range";
    const text3 = "The risks of high blood pressure";
    const text4 = "Some surprising facts about high blood";
    const text5 = "The importance of sleep for heart health";
    const image1 = require("../../../assets/images/post1BloodPressure.jpg");
    const image2 = require("../../../assets/images/post2BloodPressure.jpg");
    const image3 = require("../../../assets/images/post3BloodPressure.jpg");
    const image4 = require("../../../assets/images/post4BloodPressure.jpg");
    const image5 = require("../../../assets/images/post5BloodPressure.jpg");
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../../assets/images/Layer1.png")} style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width,...stylesLightDark.background }}>
                <View style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodPressurePost1)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text1}</Text>
                        <Image source={image1} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodPressurePost2)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text2}</Text>
                        <Image source={image2} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodPressurePost3)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text3}</Text>
                        <Image source={image3} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodPressurePost4)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text4}</Text>
                        <Image source={image4} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodPressurePost5)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text5}</Text>
                        <Image source={image5} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default BloodPressure

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: 100,
        width: 370,
        backgroundColor: '#E4E4E4',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        display: 'flex',
    },
    text: {
        flex: 2,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 25,
        //  whiteSpace: 'normal',
        //wordWrap: 'break-word'
    },
    image: {
        flex: 1,
        height: 75,
        width: 120,
        borderRadius: 10,
        marginRight: 10
    },
})