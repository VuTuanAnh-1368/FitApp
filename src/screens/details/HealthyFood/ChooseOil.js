import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const ChooseOil = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <ImageBackground source={require("../../../assets/images/oil.jpg")}
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
                                    }}>Choose healthy cooking oils</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Choosing healthy cooking oil is important
                                includes consideration of elements such as points
                                combustion, nutrient content and ingredients
                                fatty acid fraction. The important thing is thinking
                                with a medical professional to determine these
                                Best oils for health needs
                                and your personal goals.</Text>
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
                                    }}>Check nutritional ingredients
                                    nourishment.</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                }}>Different oils have different contents
                                different nutrition, so important
                                In is to choose an oil rich in fat
                                and healthy nutrition. For example, umbrella oil
                                Olives are high in unsaturated fats,
                                May help reduce inflammation and improve health
                                cardiovascular health. However, coconut oil does
                                high saturated fat content, possibly
                                increases cholesterol levels. Therefore, mandarin
                                In is to consider nutritional content
                                of each type of oil before choosing one
                                Type suitable for your cooking needs
                                Friend</Text>
                            <View style={{
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: 60,
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
                                    }}>Consider the flash point
                                    of oil.</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>The tipping point of the oil is the temperature at which
                                The oil begins to smoke and decompose. When
                                heating oil past its flash point,
                                Oil can produce toxic compounds
                                can be harmful to your health. Due
                                There, choosing an oil has its points
                                high tip for cooking methods
                                High temperatures such as frying and stir-frying are very important
                                in. Some examples of oils there are
                                High peaks include bd oil, peanut oil
                                and refined coconut oil.</Text>
                            <View style={{
                                height: 70,
                                width: 325,
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    height: 60,
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
                                    }}>Look at the acidic composition
                                    fat.</Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'black',
                                    textAlign: 'justify',
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>The type of fatty acids contained in the oil is also possible
                                affects health benefits
                                its. For example, oils rich in fatty acids
                                omega-3 like flax oil and fish oil have
                                May help reduce inflammation and improve health
                                heart. On the contrary, oils are rich in acids
                                omega-6 fats like corn oil and olive oil
                                Soy can stimulate inflammation if possible
                                consume too much. Therefore, choosing
                                an oil containing fatty acids
                                Balance is important to promote strength
                                health and general well-being.</Text>
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
export default ChooseOil;