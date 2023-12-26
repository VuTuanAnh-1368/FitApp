import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo'
import Donutchart from '../../components/Donutchart';
import Rectanchart from '../../components/Rectanchart';
import BaarChart2 from '../../components/Baarchart2';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
import moment from 'moment';
import api from '../../api';


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
    const navigation = useNavigation();
    // const daysInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    // const data = [3000, 4000, 600, 2000, 1000, 920, 1200]; // Dữ liệu của biểu đ0ồ
    // const timeStampForWeek = []
    const currentDate = moment();
    const monday = moment(currentDate).startOf('isoWeek');
    const timeStampForWeek = Array.from({ length: 7 }, (_, index) =>
        moment(monday).add(index, 'days').startOf('day').unix() * 1000
    );

    // console.log(timeStampForWeek);
    const [stepInWeek, setStepInWeek] = useState([])
    const [targetStep, setTargetStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(null);
    const [currentKCals, setCurrentKcals] = useState(null);
    const [currentDistance, setCurrentDistance] = useState(null);
    const [currentTimeRecord, setCurrentTimeRecord] = useState(null);
    const [timeIntervalGetStateData, setTimeIntervalGetStateData] = useState(null);
    const [userId, setUserId] = useState(null);
    const [distanceFootRate, setDistanceFootRate] = useState(null);


    useEffect(() => {
        const loadData = async () => {
            let ud = await utils.AsyncStorage.getItem('user_id');
            await api.UserAPI.userGetAllStateData({
                'objectId': ud
            })
                .then(response => {
                    // console.log(response.data.data.days)
                    if (response.data.data.days) {
                        const newStepInWeek = Array.from({ length: 7 }, (_, index) => {
                            const dayTimestamp = timeStampForWeek[index];
                            const matchingDataItem = response.data.data.days.find(item => parseInt(item.day, 10) === dayTimestamp);

                            return matchingDataItem ? matchingDataItem.step : 0;
                        });

                        setStepInWeek(newStepInWeek);
                    }

                })
                .catch(err =>
                    console.log(err))
        }
        loadData()
    }, [])

    useEffect(() => {

        const loadData = async () => {
            let userId = await utils.AsyncStorage.getItem('user_id');

            api.UserAPI.handleGetUserInformation({
                "user_id": userId
            })
                .then(
                    (response) => {
                        if (response.data.success === true) {
                            if (response?.data?.userInfo?.avatar != '') {
                                setTargetStep(response?.data?.userInfo?.targetStep);
                                setDistanceFootRate(response?.data?.userInfo?.distanceFootRate)
                            }
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })

        }


        const getStateData = async () => {
            let ud = null;
            if (userId == null) {
                ud = await utils.AsyncStorage.getItem('user_id');
                setUserId(ud);
            }
            await api.UserAPI.handleGetStateDataFollowDay({
                'objectId': userId == null ? ud : userId
            })
                .then(response => {
                    // console.log(response?.data);
                    if (response?.data) {
                        if (response?.data?.todayInfo != {}) {
                            setCurrentStep(response?.data?.todayInfo?.step);
                            setCurrentKcals(response?.data?.todayInfo?.kcal);
                            setCurrentDistance(response?.data?.todayInfo?.distance);
                            // setCurrentHeartRate(response?.data?.todayInfo?.heartRate?.currentHeartRate);

                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getStateData();
        loadData();
        const intervalId = setInterval(() => {
            getStateData()
        }, 1000);

        setTimeIntervalGetStateData(intervalId);

        return () => {
            if (timeIntervalGetStateData) {
                clearInterval(timeIntervalGetStateData);
            }
        };

    }, []);
    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    const stylesLightDark = useSelector((state) => state.settings.styles);
    const { t } = useTranslation();
    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/Layer1.png')}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                    alignItems: 'center', ...stylesLightDark.background
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: hei / 12,
                        width: wi,
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            if (timeIntervalGetStateData) {
                                clearInterval(timeIntervalGetStateData);
                            }
                            navigation.navigate(ROUTES.HOME_TAB)
                        }}
                    >
                        <Entypo
                            name='chevron-left'
                            size={34}></Entypo>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            marginLeft: 5, ...stylesLightDark.text
                        }}>{t('stepsKcals')}</Text>
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
                                fontSize: 12,
                                color: 'white',
                                fontFamily: 'Montserrat-Regular',
                            }}>Goal:{targetStep}</Text>
                        <View style={styles.arrow} />
                    </View>
                    <View
                        style={{
                            height: 220,
                            width: 300,
                            marginTop: 20,
                            //    backgroundColor: 'green',
                        }}>
                        <Donutchart radius={81.6} target={targetStep} spent={currentStep} text="Steps" colorTarget='#d2dee4' colorAmount="#3263ff" strokeTarget="17" strokeAmount="17" colorText='black' fontText={15}>
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
                            // backgroundColor: 'blue',
                            flexDirection: 'row',
                            position: 'relative',
                            bottom: 50,
                        }}>
                        <Rectanchart top={30} left={30} colorTarget="#cfdee4" colorAmount="#ff2777"></Rectanchart>
                        <Rectanchart top={30} left={120} colorTarget="#cfdee4" colorAmount="#68ffcb"></Rectanchart>
                        <Image
                            source={require("../../assets/icons/Asset5.png")}
                            style={{
                                position: 'absolute',
                                left: 55,
                                top: 55,
                            }}></Image>
                        <Image
                            source={require("../../assets/icons/Asset3.png")}
                            style={{
                                position: 'absolute',
                                left: 248,
                                top: 55,
                            }}></Image>

                        <Text
                            style={{
                                backgroundColor: '#FFB1AC',
                                position: 'absolute',
                                fontSize: 15,
                                top: 110,
                                left: 46,
                            }}>{currentKCals} cal</Text>
                        <Text
                            style={{
                                backgroundColor: '#FFB1AC',
                                position: 'absolute',
                                fontSize: 15,
                                top: 110,
                                left: 240,
                            }}>{currentDistance} m</Text>
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
                            }}>{t('currentProgress')}</Text>

                    </View>
                    <BaarChart2 data={stepInWeek}></BaarChart2>
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
        </View>
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