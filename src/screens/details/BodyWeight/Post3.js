import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions,StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Post3 = () => {
    const content1="Dietary habits";
    const text1="Overconsumption of high-calorie, high-fat, high-sugar, and high-salt foods, or long-term overeating can lead to energy surplus and ultimately result in obesity.";
    const content2="Lack of exercise";
    const text2="Lack of physical activity or a sedentary lifestyle can lead to a decrease in metabolic rate and energy consumption, resulting in obesity."
    const content3="Genetic inheritance";
    const text3="Obesity may be related to genetics, as some genes can affect the body's metabolic rate and energy consumption capacity, leading to obesity."
    const content4="Psychological factors"
    const text4="Stress, anxiety, depression, and other emotional problems can lead people to overeat or choose high-calorie foods, resulting in obesity."
    const content5="Lack of sleep"
    const text5="Lack of sleep can lead to a decrease in metabolic rate and energy consumption, as well as affect hormone secretion, leading to obesity."
    const content6="Side effects of medication"
    const text6="Some medications have side effects that can cause weight gain, such as antipsychotic drugs, hormone drugs, etc.\n\n\These are some common causes of obesity, but the specific reasons vary from person to person and require individual analysis based on personal circumstances.\n\n\ "
    const image = require("../../../assets/images/post3BodyWeight.jpg");
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