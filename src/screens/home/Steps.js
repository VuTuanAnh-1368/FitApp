import React from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo'
import Donutchart from '../../components/Donutchart';
import Rectanchart from './Rectanchart';
import BaarChart2 from '../../components/Baarchart2';

const currentTime = new Date();
const day = currentTime.getDay();          // Thứ trong tuần, nhung tra ve cac gia tri 0-6
const isHighlightMon = day === 1;
const isHighlightTue = day === 2;
const isHighlightWed = day === 3;
const isHighlightThur = day === 4;
const isHighlightFri = day === 5;
const isHighlightSat = day === 6;
const isHighlightSun = day === 0;
const Steps = () => {

    const data = [3000, 4000, 600, 2000, 1000, 920, 1200]; // Dữ liệu của biểu đồ

    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    return (
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/images/Layer1.png')}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                    alignItems: 'center'
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: hei / 12,
                        width: wi,
                        alignItems: 'center'
                    }}
                >
                    <Entypo
                        name='chevron-left'
                        size={34}></Entypo>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            marginLeft: 5,
                        }}>Steps</Text>
                </View>
                <View
                    style={{
                        height: 405,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'white',
                        alignItems: 'center'
                    }}
                >
                    <View style={{
                        height: 20,
                        width: 80,
                        borderRadius: 20,
                        backgroundColor: '#3263ff',
                        marginTop: 20,
                        alignItems: 'center',
                    }}>
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'white',
                                fontFamily: 'Montserrat-Regular',
                            }}>Goal:5000</Text>
                        <View style={styles.arrow} />
                    </View>
                    <View
                        style={{
                            height: 220,
                            width: 300,
                            marginTop: 20,
                            //    backgroundColor: 'green',
                        }}>
                        <Donutchart radius={81.6} target={5000} spent={4204} text="Steps" colorTarget='#d2dee4' colorAmount="#3263ff" strokeTarget="17" strokeAmount="17" colorText='black' fontText={12}>
                        </Donutchart>
                        <Image
                            source={require('../../assets/icons/run.png')}
                            style={{
                                position: 'relative',
                                height: 32,
                                width: 32,
                                bottom: 140,
                                left: 132,
                            }}>
                        </Image>
                        <View
                            style={{
                                height: 20,
                                width: 50,
                                borderRadius: 15,
                                backgroundColor: '#67ff21',
                                position: 'relative',
                                bottom: 150,
                                left: 162,
                                flexDirection: 'row',
                            }}>
                            <View style={{
                                position: 'absolute',
                                top: '100%',
                                left: '100%',
                                marginLeft: -45,
                                marginTop: -15, // Điều chỉnh vị trí mũi tên
                                width: 0,
                                height: 0,
                                borderLeftWidth: 8,
                                borderRightWidth: 8,
                                borderBottomWidth: 8,
                                borderStyle: 'solid',
                                backgroundColor: 'transparent',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderBottomColor: '#FFFFFF',
                            }}>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        marginLeft: 12,
                                        marginTop: -4,
                                        color: '#FFFFFF',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        fontFamily: 'MavenPro-SemiBold',
                                        backgroundColor: '#FFB1AC',
                                    }}>14%</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: 325,
                            height: 120,
                            //   backgroundColor: 'blue',
                            flexDirection: 'row',
                            position: 'relative',
                            bottom: 50,
                        }}>
                        <Rectanchart top={0} left={10} colorTarget="#cfdee4" colorAmount="#ff2777"></Rectanchart>
                        <Rectanchart top={30} left={46} colorTarget="#cfdee4" colorAmount="#68ffcb"></Rectanchart>
                        <Rectanchart top={0} left={46} colorTarget="#cfdee4" colorAmount="#9340FC"></Rectanchart>
                        <Image
                            source={require("../../assets/icons/Asset5.png")}
                            style={{
                                position: 'absolute',
                                left: 36,
                                top: 24,
                            }}></Image>
                        <Image
                            source={require("../../assets/icons/Asset3.png")}
                            style={{
                                position: 'absolute',
                                left: 153,
                                top: 54,
                            }}></Image>
                        <Image
                            source={require("../../assets/icons/Asset4.png")}
                            style={{
                                position: 'absolute',
                                height: 18,
                                width: 18,
                                left: 270,
                                top: 24,
                            }}></Image>
                        <Text
                            style={{
                                backgroundColor: '#FFB1AC',
                                position: 'absolute',
                                fontSize: 11,
                                top: 80,
                                left: 24,
                            }}>100 kcal</Text>
                        <Text
                            style={{
                                backgroundColor: '#FFB1AC',
                                position: 'absolute',
                                fontSize: 11,
                                top: 110,
                                left: 145,
                            }}>1.2km</Text>
                        <Text
                            style={{
                                backgroundColor: '#FFB1AC',
                                position: 'absolute',
                                fontSize: 11,
                                top: 80,
                                left: 266,
                            }}>1.3h</Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 260,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                    <View
                        style={{
                            height: 50,
                            width: 325,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 30,
                            marginTop: 10,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                backgroundColor: '#FFB1AC'
                            }}>Current progress</Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                backgroundColor: "#D9D9D9",
                                height: 40,
                                width: 108,
                                borderRadius: 10,
                                marginLeft: 50,
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5,
                            }}>
                            <Image
                                source={require("../../assets/icons/Asset6.png")}
                                style={{
                                    height: 26,
                                    width: 26,
                                    marginLeft: 5,
                                    marginTop: 2,
                                }}>
                            </Image>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    marginLeft: 5,
                                }}>Weekly</Text>
                            <Image
                                source={require("../../assets/icons/Asset7.png")}
                                style={{
                                    marginLeft: 5,
                                    marginTop: 2,
                                }}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    <BaarChart2 data={data}></BaarChart2>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 20,
                            width: 325,
                        }}>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightMon ? 'blue' : '#C1C1C1',
                                marginLeft: 42,
                            }}>Mon</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightTue ? 'blue' : '#C1C1C1',
                                marginLeft: 21,
                            }}>Tue</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightWed ? 'blue' : '#C1C1C1',
                                marginLeft: 20,
                            }}>Wed</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightThur ? 'blue' : '#C1C1C1',
                                marginLeft: 20,
                            }}>Thu</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightFri ? 'blue' : '#C1C1C1',
                                marginLeft: 22,
                            }}>Fri</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightSat ? 'blue' : '#C1C1C1',
                                marginLeft: 22,
                            }}>Sat</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: isHighlightSun ? 'blue' : '#C1C1C1',
                                marginLeft: 24,
                            }}>Sun</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
}

export default Steps;

const styles = StyleSheet.create({
    speechBubble: {
        backgroundColor: '#3263ff',
        borderWidth: 2,
        borderColor: '#3263ff',
        borderRadius: 10,
        padding: 10,
        position: 'relative',
        width: 80, // Điều chỉnh kích thước theo ý muốn,
        height: 20,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow: {
        position: 'absolute',
        top: '100%',
        left: '100%',
        marginLeft: -50,
        marginTop: 0, // Điều chỉnh vị trí mũi tên
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#3263ff',
    },
});