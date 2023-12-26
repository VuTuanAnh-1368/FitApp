import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import { ROUTES } from "../../../../constants";
import { useSelector } from "react-redux"
const BloodSugar = () => {
    const navigation = useNavigation();
    const stylesLightDark = useSelector((state) => state.settings.styles);
    const text1 = "Do you know how blood sugar affects your health?";
    const text2 = "What is low blood sugar (Hyperglycemia)?";
    const text3 = "How to treat low blood sugar (Hyperglycemia)?";
    const text4 = "Do you know about diabetes knowledge?";
    const text5 = "What is prediabetes?";
    const image1 = require("../../../assets/images/post1BloodSugar.jpg");
    const image2 = require("../../../assets/images/post2BloodSugar.jpg");
    const image3 = require("../../../assets/images/post3BloodSugar.jpg");
    const image4 = require("../../../assets/images/post4BloodSugar.jpg");
    const image5 = require("../../../assets/images/post5BloodSugar.jpg");
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../../assets/images/Layer1.png")} style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width, ...stylesLightDark.background}}>
                <View style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodSugarPost1)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text1}</Text>
                        <Image source={image1} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodSugarPost2)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text2}</Text>
                        <Image source={image2} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodSugarPost3)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text3}</Text>
                        <Image source={image3} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodSugarPost4)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text4}</Text>
                        <Image source={image4} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(ROUTES.BloodSugarPost5)}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text5}</Text>
                        <Image source={image5} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default BloodSugar

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
        whiteSpace: 'normal',
        wordWrap: 'break-word'
    },
    image: {
        flex: 1,
        height: 75,
        width: 120,
        borderRadius: 10,
        marginRight: 10
    },
})