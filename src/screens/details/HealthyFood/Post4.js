import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="Choose healthy cooking oils";
    const text1="Choosing healthy cooking oil is important includes consideration of elements such as points combustion, nutrient content and ingredients fatty acid fraction. The important thing is thinking with a medical professional to determine these. Best oils for health needs and your personal goals.";
    const content2="Check nutritional ingredients nourishment.";
    const text2="Different oils have different contents different nutrition, so important in is to choose an oil rich in fat and healthy nutrition. For example, umbrella oil. Olives are high in unsaturated fats, may help reduce inflammation and improve health cardiovascular health. However, coconut oil does high saturated fat content, possibly increases cholesterol levels. Therefore, mandarin in is to consider nutritional content of each type of oil before choosing one type suitable for your cooking needs friend.";
    const content3="Consider the flash point of oil.";
    const text3="The tipping point of the oil is the temperature at which the oil begins to smoke and decompose. When heating oil past its flash point, oil can produce toxic compounds can be harmful to your health. There, choosing an oil has its points high tip for cooking methods. High temperatures such as frying and stir-frying are very important in. Some examples of oils there are high peaks include bd oil, peanut oil and refined coconut oil. \n\n\ ";
    const image = require("../../../assets/images/post4HealthyFood.jpg");
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