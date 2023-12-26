import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const FoodandHeart = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <ImageBackground source={require("../../../assets/images/fastFood.jpg")}
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
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 57,
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
                                    }}>Cardiovascular relationship to diet</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>A Heart Healthy Lifestyle begins
                                from choosing healthy foods.
                                Eat a varied and rich variety of foods
                                nutrients such as potassium, calcium, magnesium,
                                Fiber and protein can help prevent it
                                prevent heart disease and stroke, but also
                                You need to intentionally limit certain foods
                                May cause heart fibrillation and increase risk
                                pathological.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                //    backgroundColor: 'yellow'
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Use food rich Sodium</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Foods rich in sodium
                                Consuming high amounts of sodium may increase
                                blood pressure, which contributes to the heartbeat
                                fast. This happens because of blood pressure
                                high, the heart has to work harder to fill it
                                blood passes through the body.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Rich food
                                    carbohydrates</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Foods with carbohydrate content
                                High levels can cause sudden increases in blood levels
                                blood sugar, leading to increased heart rate
                                heart and rapid heartbeat. This happens
                                Caused by the body releasing insulin to help regulate
                                Regulating blood sugar levels, photo
                                affects the heart.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Spicy food</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Spicy foods can cause heart palpitations
                                How to increase body temperature and heart rate.
                                This is due to capsaicin, the causative agent
                                The spiciness in spicy food can be stimulating
                                nervous system and speed up the beat
                                heart.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Fried food</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Fried food can cause heart flutters
                                by increasing cholesterol levels, leading
                                to the accumulation of plaque in the cave
                                circuit. This might work
                                The heart's pumping of blood becomes difficult
                                and leads to vibes. Also, real
                                Fried rice noodles are often rich in sodium and cashews
                                This can also contribute to vibration
                                heart attack.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Caffeine</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Caffeine is a type of stimulant
                                can speed up the heart and cause it to beat
                                of the heart is irregular. It works by
                                How to block the hormone adenosine, yes
                                ability to regulate heart beat. Bird
                                This can lead to irregular heart rate
                                and the heart beats fast.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Alcohol</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Alcohol can cause heart fibrillation because it does
                                increased heart rate and blood pressure. It also has
                                can cause dryness in the living environment, photo
                                affects the heart's ability to pump blood.</Text>
                            <View style={{
                                height: 45,
                                width: 325,
                                flexDirection: 'row',
                                marginTop: 10,
                            }}>
                                <View style={{
                                    height: 30,
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
                                    }}>Cigarette</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>Smoking can cause heart fibrillation
                                How to increase speed and blood pressure. Besides,
                                it also reduces the amount of oxygen reaching the heart,
                                causes a feeling of vibration.</Text>
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
export default FoodandHeart;