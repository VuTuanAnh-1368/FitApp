import React, { useState, useEffect } from "react"
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Linking, ScrollView } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Donutchart from "../../components/Donutchart"
import LinearGradient from "react-native-linear-gradient"
import Baarchart from "../../components/Baarchart"
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import axios from "axios"
import Listvideo from "./Listvideo"
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from "../../../constants"
import { useTranslation } from "react-i18next";
import api from "../../api"
import { useSelector } from "react-redux"
import utils from "../../utils"
import { use } from "i18next"


const dataHeart = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],    // Label của trục x trong cái Barchat, nhưng ko có label nên để rỗng
    datasets: [
        {
            data: [87, 89, 90, 92, 60, 77, 70, 43, 50, 70, 88, 90]   // dữ liệu demo.
        }
    ]
};

//Chay video tren youtube
const video1Url = "https://www.youtube.com/watch?v=_kGESn8ArrU";
const video2Url = "https://www.youtube.com/watch?v=_FbwddBgCL4";
const openYouTube = async (videoUrl) => {
    try {
        const response = await axios.get(videoUrl);
        if (response.status === 200) {
            const url = response.request.responseURL;
            if (url) {
                return Linking.openURL(url);
            }
        }
    } catch (error) {
        console.error(error);
    }
};


const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const fetchWeatherAndCO2 = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchWeatherAndCO2();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [isVisible]);


    const navigation = useNavigation();
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthsOfYear = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const currentTime = new Date();
    currentTime.setUTCHours(currentTime.getUTCHours());
    const year = currentTime.getFullYear();     // năm
    const month = currentTime.getMonth();      // tháng
    const dayOfmonth = currentTime.getDate();  // ngày trong tháng
    const day = currentTime.getDay();          // Thứ trong tuần, nhưng tra ve cac gia tri 0-6
    const dayName = daysOfWeek[day];           // Chuyen tu du lieu số sang thứ trong tuần
    const monthName = monthsOfYear[month];
    const [weather, setWeather] = useState({})

    const [displayImage, setDisplayImage] = useState('');
    const [targetStep, setTargetStep] = useState(0);
    const [targetKcal, setTargetKcal] = useState(0);
    const [currentScreenTopRight, setCurrentScreenTopRight] = useState(0)
    const stylesLightDark = useSelector((state) => state.settings.styles);

    const [currentStep, setCurrentStep] = useState(null);
    const [currentTimesSleep, setCurrentTimeSleep] = useState(null)
    const [currentHeartRate, setCurrentHeartRate] = useState(null)
    const [currentKCals, setCurrentKcals] = useState(null)
    const [userId, setUserId] = useState(null);

    const [co2, setCo2] = useState(null);
    const [currentTimeDisplay, setCurrentTimeDisplay] = useState(null);
    const co2temp = 3000;




    const { t } = useTranslation();

    useEffect(() => {
        api.WeatherAPI.fetchWeatherForecast({ cityName: 'Hanoi', days: '7' }).then(data => {
            setWeather(data)
        })
        const loadData = async () => {
            let userId = await utils.AsyncStorage.getItem('user_id');
            setUserId(userId);

            await api.UserAPI.handleGetUserInformation({
                "user_id": userId
            })
                .then(
                    (response) => {
                        if (response.data.success === true) {
                            if (response?.data?.userInfo?.avatar != '') {
                                setDisplayImage(`http://10.0.2.2:3001/${response?.data?.userInfo?.avatar}`)
                                setTargetStep(response?.data?.userInfo?.targetStep);
                                setTargetKcal(response?.data?.userInfo?.targetKcal);
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
                            setCurrentHeartRate(response?.data?.todayInfo?.heartRate?.currentHeartRate);
                            setCo2(response?.data?.todayInfo?.airQuality?.co2);



                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getStateData();
        const timeIntervalGetStateData = setInterval(() => {

            const currentDate = new Date();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();

            // Format the time as "hh:mmh"
            const formattedTime = `${hours}:${minutes}h`;

            setCurrentTimeDisplay(formattedTime)
            loadData()
            getStateData()
        }, 1000);
        // getStateData();
        loadData();
        return () => {
            clearInterval(timeIntervalGetStateData);

        };


    }, []);
    if (weather) {
        var { current, location, forecast } = weather;
    }
    const screensTopRight = [
        <>
            <Image
                //tuy tinh hinh thoi tiet ma lay anh thich hop
                source={{ uri: `https:${current?.condition.icon}` }} style={{
                    margin: 18,
                    height: 50,
                    // backgroundColor: 'red',
                    width: 50,
                    marginLeft: 0
                }}>
            </Image>
            <Text style={{ marginTop: 30, marginLeft: -30, fontSize: 18, color: "#716968", fontWeight: 'bold', ...stylesLightDark.text }}>
                {current?.temp_c}{'\u2103'}
            </Text>
        </>
    ]
    // console.log(userId)
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#FDEEEE', ...stylesLightDark.background }}>
            <ImageBackground
                source={require("../../assets/images/Layer1.png")}>
                <View
                    // cai tren cung
                    style={{
                        height: 80,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={
                            displayImage == ''
                                ?
                                require('../../assets/images/avatar.png')
                                :
                                { uri: displayImage }
                        }
                        style={{
                            borderRadius: 30,
                            width: 60,
                            height: 60,
                            marginStart: 10
                        }}
                    ></Image>
                    <View
                        //Lấy thành công dữ liệu ngày tháng current
                        style={{
                            flexDirection: 'column',
                            marginStart: 10,
                            marginEnd: 10,
                            width: 210,
                        }}>
                        <Text style={{ color: '#7F7F7F', fontSize: 14, ...stylesLightDark.text }}>{t('hello')}</Text>
                        <Text style={{ color: '#000000', fontSize: 18, ...stylesLightDark.text }}>{t(dayName)}, {t(dayOfmonth)} {t(monthName)}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => {
                            navigation.navigate(ROUTES.WEATHER)
                        }}
                        activeOpacity={0.7}>
                        {isVisible !== false ? (
                            <>
                                {
                                    screensTopRight[currentScreenTopRight]
                                }
                            </>
                        ) : (
                            <>
                                <Image source={require("../../assets/icons/co2.png")} style={{
                                    height: 32,
                                    width: 32,
                                    marginLeft: -19,
                                }}></Image>
                                <Text style={{ marginTop: 10, marginLeft: 3, fontSize: 16, fontWeight: 'bold', ...stylesLightDark.text }}>{co2 != null ? co2.toFixed(1) : 0} ppm</Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
                <View
                    //cai duoi xep theo hang, 1 cai ben trai 1 cai ben phai, trong moi cai lai co 2 cai chia theo cot
                    style={{
                        flexDirection: 'row',
                        //flex:0.66,
                        height: 405,
                        marginLeft: 5,
                        // backgroundColor:'yellow'
                    }}>
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.STEP)
                            }}
                            activeOpacity={0.7}    // do trong cua cai nut, neu = 1 thi an nut ko bi mo
                            //Goc tren ben trai
                            style={{
                                width: 180,
                                height: 230,
                                backgroundColor: '#DCC8C8',
                                borderRadius: 20,
                                margin: 5,
                            }}>
                            <View
                                style={{
                                    width: 180,
                                    height: 75,
                                    flexDirection: 'row'
                                }}>
                                <Text style={styles.title}>{t('steps')}</Text>
                                <View style={styles.smallcircle}>
                                    <Image source={require('../../assets/icons/jogging.png')} style={styles.icon}></Image>
                                </View>
                            </View>
                            <Donutchart radius={60} target={targetStep} spent={currentStep} text="Steps" colorTarget='#FB3535' colorAmount="#483867" strokeTarget="15" strokeAmount="15" colorText='#483867' fontText={12} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.HEART)
                            }}
                            activeOpacity={0.7}
                            // goc duoi ben trai
                            style={{
                                width: 180,
                                height: 155,
                                borderRadius: 15,
                                backgroundColor: '#F3BDBD',
                                margin: 5
                            }}>
                            <View style={{ width: 180, height: 70, flexDirection: 'row' }}>
                                <Text style={styles.title}>{t('heart')}</Text>
                                <View style={styles.smallcircle}>
                                    <Image source={require('../../assets/icons/heart-attack.png')} style={styles.icon}></Image>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 80,
                                    width: 180,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ color: 'black', fontSize: 40, }}>{currentHeartRate}</Text>
                                <View
                                    style={{
                                        height: 80,
                                        width: 50,
                                        justifyContent: 'center',
                                        marginLeft: 10
                                    }}>
                                    <Image source={require("../../assets/icons/heart2.png")} style={{ height: 30, width: 30, }}></Image>
                                    <Text style={{ fontSize: 24, color: 'black', }}>bpm</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View
                        // ben phai
                        style={{
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.SLEEPTRACKING)
                            }}
                            activeOpacity={0.7}
                        // ben phai goc tren
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3E3254', '#425DB2', '#3D78EA']}
                                style={{
                                    borderRadius: 15,
                                    width: 180,
                                    margin: 5,
                                    height: 180
                                }}
                            >

                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <Text style={{ ...styles.title, color: "white" }}>{t('sleep')}</Text>
                                    <View style={styles.smallcircle}>
                                        <Image source={require('../../assets/icons/moon.png')} style={styles.icon} ></Image>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        color: 'white',
                                        marginLeft: 10,
                                        marginTop: 35
                                    }}
                                >{currentTimeDisplay}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.STEP)
                            }}
                            activeOpacity={0.7}
                            // Ben phai goc duoi
                            style={{
                                width: 180,
                                margin: 5,
                                height: 210,
                                borderRadius: 15,
                                backgroundColor: '#AFFF9B'
                            }}>
                            <View style={{ width: 180, height: 75, flexDirection: 'row' }}>
                                <Text style={styles.title} >Kcals</Text>
                                <View style={styles.smallcircle} >
                                    <Image source={require('../../assets/icons/kcal.png')} style={styles.icon}></Image>
                                </View>
                            </View>
                            <Donutchart radius={50} target={targetKcal} spent={currentKCals} text="Cals" colorTarget='#D9D9D9' colorAmount="#63665A" strokeTarget="15" strokeAmount="15" colorText='#63665A' fontText={12} />
                        </TouchableOpacity>
                    </View>
                </View>


                {/* See All */}
                <View style={{ flexDirection: 'row', marginTop: 15, }} >
                    <Text style={{ flex: 1, fontSize: 14, marginStart: 12, fontWeight: "bold", ...stylesLightDark.text }}>Video</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(ROUTES.LIST_VIDEO)}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: 'red',
                                textAlign: 'right',
                                marginRight: 15,
                                fontWeight: 'bold'
                            }}>{t('seeAll')}</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#FFFFFF',
                        marginTop: 10,
                        marginStart: 10,
                        marginEnd: 10,
                        height: 65,
                        borderRadius: 15,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={require('../../assets/images/runVideo.png')}
                        style={{
                            margin: 5,
                            height: 55,
                            width: 55,
                            borderRadius: 15
                        }}>
                    </Image>
                    <View
                        style={{
                            width: 250,
                        }}>
                        <View style={{
                            height: 20,
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    borderRadius: 30,
                                    width: 65,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}>
                                <Image
                                    source={require('../../assets/icons/star.png')}
                                    style={{
                                        height: 12,
                                        width: 12,
                                        marginLeft: 15,
                                    }}></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 5,
                                        color: 'black',
                                    }}>4.8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    borderRadius: 30,
                                    width: 85,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}
                            >
                                <Image
                                    source={require('../../assets/icons/crown.png')}
                                    style={{
                                        height: 12,
                                        width: 12,
                                        marginLeft: 10,
                                    }}></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 5,
                                        color: 'black',
                                    }}>{t('premium')}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: 'black',
                                marginLeft: 25,
                                marginTop: 5,
                                fontWeight: 'bold',
                            }}>How to Run Correctly</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'black',
                                marginLeft: 25,
                            }}>Global Triathlon Network</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={async () => await openYouTube(video1Url)}
                        style={{
                            height: 50,
                            width: 50,
                        }}>
                        <FontAwesome6
                            name="circle-play"
                            size={32}
                            style={{
                                marginTop: 15,
                                marginLeft: 13,
                            }}></FontAwesome6>
                    </TouchableOpacity>
                </View>

                <View   // cai thu 2
                    style={{
                        backgroundColor: '#FFFFFF',
                        marginTop: 14,
                        marginStart: 10,
                        marginEnd: 10,
                        height: 65,
                        borderRadius: 15,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={require('../../assets/images/runVideo2.png')}
                        style={{
                            margin: 5,
                            height: 55,
                            width: 55,
                            borderRadius: 15
                        }}>
                    </Image>
                    <View
                        style={{
                            width: 250,
                        }}>
                        <View style={{
                            height: 20,
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    borderRadius: 30,
                                    width: 65,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}>
                                <Image
                                    source={require('../../assets/icons/star.png')}
                                    style={{
                                        height: 12,
                                        width: 12,
                                        marginLeft: 15,
                                    }}></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 5,
                                        color: 'black',
                                    }}>4.8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{
                                    borderRadius: 30,
                                    width: 85,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}
                            >
                                <Image
                                    source={require('../../assets/icons/crown.png')}
                                    style={{
                                        height: 12,
                                        width: 12,
                                        marginLeft: 10,
                                    }}></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 5,
                                        color: 'black',
                                    }}>{t('premium')}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: 'black',
                                marginLeft: 25,
                                marginTop: 5,
                                fontWeight: 'bold',
                            }}>Video Make You A Faster Runner!
                        </Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'black',
                                marginLeft: 25,
                            }}>Global Triathlon Network</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={async () => await openYouTube(video2Url)}
                        style={{
                            height: 50,
                            width: 50,
                        }}>
                        <FontAwesome6
                            name="circle-play"
                            size={32}
                            style={{
                                marginTop: 15,
                                marginLeft: 13,
                            }}></FontAwesome6>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default Home

const styles = StyleSheet.create({
    icon: {
        height: 35,
        width: 35,
        marginLeft: 10,
    },
    title: {
        flex: 5,
        fontSize: 24,
        color: 'black',
        marginTop: 20,
        marginStart: 15,
    },
    smallcircle: {
        flex: 3,
        backgroundColor: '#483867',

        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    music: {

    },
})