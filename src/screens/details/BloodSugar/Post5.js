import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post5 = () => {
    const content1="What Is Prediabetes?";
    const text1="Prediabetes is a serious condition where blood sugar levels are above normal, but not high enough to be classified as type 2 diabetes. Shockingly, over 96 million American adults - more than a third of the population - have prediabetes, with over 80% unaware of their condition. Prediabetes increases the risk of developing type 2 diabetes, heart disease, and stroke."
    const content2="Causes of Prediabetes";
    const text2="Insulin is a hormone produced by the pancreas that unlocks cells, allowing blood sugar to enter and be used as energy. However, if you have prediabetes, your body's cells don't respond properly to insulin. This causes your pancreas to produce more insulin in an attempt to compensate. Over time, your pancreas becomes overwhelmed and can't keep up, causing blood sugar levels to rise and setting the stage for prediabetes and eventually type 2 diabetes."
    const content3="Risk Factors of Prediabetes";
    const text3="You may be at risk for prediabetes if you:\n\n\ Are overweight.\n\n\* Are over 45 years old.\n\n\* Have a family history of type 2 diabetes.\n\n\* Are physically active less than 3 times a week. \n\n\* Have a history of gestational diabetes (diabetes during pregnancy) or have given birth to a baby who weighed over 9 pounds. \n\n\Proven lifestyle changes can help prevent or reverse prediabetes. These changes include losing weight if you're overweight, eating a healthy diet, and engaging in regular physical activity.\n\n\ "
    const image = require("../../../assets/images/post5BloodSugar.jpg");
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