import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const Fruit = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <ImageBackground source={require("../../../assets/images/fruit.jpg")}
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
                                    }}>How to choose healthy snacks?</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Healthy snack options
                                can help you satisfy your hunger
                                but still helps maintain body health
                                and good weight.</Text>
                            <View style={{
                                height: 45,
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
                                    }}>Almond</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Hats contain healthy fats and protein
                                and fiber help enhance nutrition
                                and make a healthy snack choice.
                                You can choose nuts such as
                                almonds, walnuts, cashews, etc., them
                                Delicious and easy to carry.</Text>
                            <View style={{
                                height: 60,
                                width: 325,
                                flexDirection: 'row',
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
                                    }}>Yogurt</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: -20,
                                }}>Yogurt is a healthy snack option
                                Strong, rich in protein and calcium. You can
                                choose low-fat or fat-free yogurt,
                                but still delicious and convenient to carry
                                according to.</Text>
                            <View style={{
                                height: 60,
                                width: 325,
                                flexDirection: 'row',
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
                                    }}>Vegetables</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: -20,
                                }}>Vegetables contain many vitamins and minerals
                                and lentils, which are healthy snack options.
                                You can choose vegetables like eggplant
                                Carrots, celery and cucumbers can be eaten raw
                                or with low-fat sauce.</Text>
                            <View style={{
                                height: 60,
                                width: 325,
                                flexDirection: 'row',
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
                                    }}>Grilled french fries</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: -20,
                                }}>Grilled French fries are a healthy choice
                                Stronger than other types of potatoes
                                n traditional because they don't
                                Contains trans fats and artificial colors.
                                You can choose grilled fries
                                Like a small dish, but need to pay attention
                                to eating baked-in french fries
                                Appropriate salary and tonnage.</Text>
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
export default Fruit;