import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const WeightLoss = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <ImageBackground source={require("../../../assets/images/vegestarian.jpg")}
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
                                height: 68,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 55,
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
                                    }}>What is irregular weight loss?</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Intermittent fasting is an eating pattern
                                Drink in rotation between periods of rest
                                eating and drinking. It does not specify any
                                any kind of food to eat, but instead
                                It's time to eat them.</Text>
                            <View style={{
                                height: 50,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 35,
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
                                    }}>How to do a half-day diet?</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>There are many ways to follow a restricted diet
                                Fasting degrees, but universal methods
                                Most popular include: {'\n'}
                                {'\u2022'} 16/8 Method: Involves fasting within 16 hours a day and eat within 8 o'clock time frame.{'\n'}
                                {'\u2022'} Diet 5:2: Includes regular meals Usually within 5 days a week and limited
                                Limit calories for 2 non-consecutive days
                                continued, about 500-600 calories per day.{'\n'}
                                {'\u2022'} Sequential fasting: Includes fasting
                                every subsequent day, or otherwise
                                What to eat or limit calories to 500
                                calories per day.{'\n'}
                                {'\u2022'} Eat more fruits and vegetables.{'\n'}
                                {'\u2022'} Fasting-stop- eating: Includes fasting
                                within 24 hours once or twice each
                                week.{'\n'}</Text>
                            <View style={{
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: 55,
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
                                    }}>Benefits of the half-day diet</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: -10,
                                }}>{'\u2022'} Weight loss: Phosphorus diet is not possible
                                Helps you lose weight by reducing
                                Calorie absorption and overindulgence
                                metabolic process. {'\n'}
                                {'\u2022'} Improve insulin sensitivity: Eat
                                Abstinence may not improve your health
                                insulin sensitivity, thereby reducing the risk
                                risk of type 2 diabetes.{'\n'}
                                {'\u2022'} Increase longevity: Fasting can help
                                Proven to prolong life.{'\n'}</Text>
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
export default WeightLoss;