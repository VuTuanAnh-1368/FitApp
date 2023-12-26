import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post4 = () => {
    const content1="Types of Diabetes";
    const text1="Gestational diabetes develops in pregnant women who have never had diabetes. If you have gestational diabetes, your baby could be at higher risk for health problems. \n\n\Gestational diabetes usually goes away after your baby is born. However, it increases your risk for type 2 diabetes later in life. Your baby is more likely to have obesity as a child or teen and develop type 2 diabetes later in life."
    const content2="Tests of Diabetes";
    const text2="You'll need to get your blood sugar tested to find out for sure if you have prediabetes or type 1, type 2, or gestational diabetes. \n\n\* A1C Test. The A1C test measures your average blood sugar level over the past 2 or 3 months. An A1C below 5.7% is normal, between 5.7 and 6.4% indicates you have pre diabetes, and 6.5% or higher indicates you have diabetes. \n\n\* Fasting Blood Sugar Test. This measures your blood sugar after an overnight fast (not eating). A fasting blood sugar level of 99 mg/dL or lower is normal, 100 to 125 mg/dL indicates you have prediabetes, and 126 mg/dL or higher indicates you have diabetes. \n\n\* Glucose Tolerance Test. This measures your blood sugar before and after you drink a liquid that contains glucose. You'll fast (not eat) overnight before the test and have your blood drawn to determine your fasting blood sugar level. Then you'll drink the liquid and have your blood sugar level checked 1 hour, 2 hours, and possibly 3 hours afterward. At 2 hours, a blood sugar level of 140 mg/dL or lower is considered normal, 140 to 199 mg/dL indicates you have prediabetes, and 200 mg/dL or higher indicates you have diabetes.\n\n\* Glucose Screening Test. This measures your blood sugar at the time you're tested. You'll drink a liquid that contains glucose, and then 1 hour later your blood will be drawn to check your blood sugar level. A normal result is 140 mg/dL or lower. If your level is higher than 140 mg/dL, you'll need to take a glucose tolerance test.\n\n\ "
    const image = require("../../../assets/images/post4BloodSugar.jpg");
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
export default Post4

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