import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post1 = () => {
    const content1="How to choose healthy snacks?";
    const text1="Healthy snack options can help you satisfy your hunger but still helps maintain body health and good weight."
    const content2="Almond";
    const text2="Hats contain healthy fats and protein and fiber help enhance nutrition and make a healthy snack choice. You can choose nuts such as almonds, walnuts, cashews, etc., them. Delicious and easy to carry."
    const content3="Yogurt";
    const text3="Yogurt is a healthy snack option. Strong, rich in protein and calcium. You can choose low-fat or fat-free yogurt, but still delicious and convenient to carry according to."
    const content4="Vegetables";
    const text4="Vegetables contain many vitamins and minerals and lentils, which are healthy snack options. You can choose vegetables like eggplant. Carrots, celery and cucumbers can be eaten raw or with low-fat sauce.\n\n\ "
    const image = require("../../../assets/images/post3HealthyFood.jpg");
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