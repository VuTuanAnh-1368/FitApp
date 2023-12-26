import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const BalancedDiet = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <ImageBackground source={require("../../../assets/images/balanced.jpg")}
                    style={{
                        height: Dimensions.get("window").height * 0.35,
                        width: Dimensions.get("window").width,
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            height: Dimensions.get("window").height,
                            width: 335,
                            backgroundColor: 'white',
                            marginTop: 180,
                            borderRadius: 20,
                            alignItems: 'center'
                            //   position: 'relative',
                        }}>
                        <ScrollView
                            style={{ flex: 1 }}>
                            <View style={{
                                height: 50,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 40,
                                    width: 5,
                                    marginLeft: 10,
                                    marginTop: 10,
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                }}></View>
                                <Text
                                    style={{
                                        fontSize: 26,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginTop: 6,
                                    }}>What is a balanced diet?</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>A balanced diet is a meal plan that includes all the necessary nutrients and in the right amounts to promote good health and condition. It should contain a variety of foods from all food groups, including fruits, vegetables, grains, whole grains, protein, low-fat and healthy fats.</Text>
                            <View style={{
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 60,
                                    width: 5,
                                    marginLeft: 10,
                                    marginTop: 10,
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                }}></View>
                                <Text
                                    style={{
                                        fontSize: 26,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginTop: 6,
                                    }}>How to follow a balanced diet?</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>To have a balanced diet, you should: {'\n'}
                                {'\u2022'} Eat a variety of foods from all food groups.{'\n'}
                                {'\u2022'} Choose fresh, whole foods instead of processed foods.{'\n'}
                                {'\u2022'} Limit the amount of sugar, saturated fat and salt in your diet.{'\n'}
                                {'\u2022'} Eat more fruits and vegetables.{'\n'}
                                {'\u2022'} The diet includes pure protein sources such as fish, chicken, beans and nuts.{'\n'}
                                {'\u2022'} Choose healthy fats like olive oil, nuts and avocados.{'\n'}</Text>
                            <View style={{
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: 35,
                                    width: 5,
                                    marginLeft: 10,
                                    backgroundColor: 'green',
                                    alignItems: 'center',
                                }}></View>
                                <Text
                                    style={{
                                        fontSize: 26,
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        marginTop: -6,
                                    }}>Benefits of a balanced diet</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: -20,
                                }}>A balanced diet offers many benefits, including: {'\n'}
                                {'\u2022'} Keep a healthy weight.{'\n'}
                                {'\u2022'} Reduces the risk of chronic cardiovascular diseases, diabetes and cancer.{'\n'}
                                {'\u2022'} Improves digestive function and intestinal health.{'\n'}
                                {'\u2022'} Improves brain function, helps keep skin, hair and nails healthy.{'\n'}</Text>
                            <View
                                // Đ có cái view này là scrollView cứ bị đ cuộn đc hết.
                                style={{
                                    height: 250,
                                    width: 50,
                                }}></View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default BalancedDiet;