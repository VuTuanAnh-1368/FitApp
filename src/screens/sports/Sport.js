import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import MapView, { Marker, Overlay, Polyline } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const LATITUDE_DELTA = 0.009
const LONGITUDE_DELTA = 0.009
const Sport = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [weather, setWeather] = useState({})
    const stylesLightDark = useSelector((state) => state.settings.styles);
    // Text theo thoi tiet nma t ko biet lay theo thoi tiet nen luc nao no cung la excellent
    const [weatherText, setWeatherText] = useState("");
    const lastKm = 0;
    // Neu ket noi duoc thi la cai dong ho, neu khong la cai dong text Bluetooth is disconnect...
    const [isBluetoothConnect, setIsBluetoothConnect] = useState(false);
    useEffect(() => {
        api.WeatherAPI.fetchWeatherForecast({ cityName: 'Hanoi', days: '7' }).then(data => {
            setWeather(data)
        })
        const loadData = async () => {
            let userId = await utils.AsyncStorage.getItem('user_id');

            api.UserAPI.handleGetUserInformation({
                "user_id": userId
            })
                .then(
                    (response) => {
                        if (response.data.success === true) {
                            if (response?.data?.userInfo?.avatar != '') {
                                setDisplayImage(`http://10.0.2.2:3001/${response?.data?.userInfo?.avatar}`)
                            }
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })

        }

        loadData();

    }, []);
    if (weather) {
        var { current, location, forecast } = weather;
    }
    const screensTopRight = [
        <>
            <Image
                //tuy tinh hinh thoi tiet ma lay anh thich hop
                source={{ uri: `https:${current?.condition.icon}` }} style={{
                    margin: 0,
                    marginRight: 16,
                    marginTop: 6,
                    height: 50,
                    width: 50,
                    marginLeft: 0
                }}>
            </Image>
            <Text style={{ marginTop: 2, marginLeft: -30, fontSize: 20, fontWeight: 'bold', ...stylesLightDark.text }}>
                {current?.temp_c}{'\u2103'}
            </Text>
        </>
    ]
    return (
        <ImageBackground
            source={require("../../assets/images/map.png")}
            style={{
                flex: 1,
            }}>
            <View style={{
                height: Dimensions.get('screen').height,
                width: Dimensions.get('screen').width,
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'box-none',
            }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{t("sport")}</Text>
                </View>
                <View style={styles.halfView}>
                    <View style={{
                        flex: 0.2, justifyContent: 'flex-start', flexDirection: "row",
                        alignItems: 'center'
                    }}>

                        <View style={styles.weatherButton}>

                            {
                                screensTopRight[0]
                            }
                            <Text style={[styles.textSmall, { marginLeft: 5, }]}>{weatherText}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.History)
                            }}>
                            <View style={styles.lastKmView}>
                                <Text style={styles.textSmall}>Last km : {lastKm.toFixed(2)}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.halfView, { pointerEvents: 'box-none' }]}>
                    <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}>
                        {
                            isBluetoothConnect // neu ket noi duoc vs dth
                                ?
                                <>
                                    <View style={[styles.weatherButton, { width: 80, marginLeft: -5, }]}>
                                        <Image source={require("../../assets/icons/product.png")}
                                            style={{
                                                height: 30,
                                                width: 30,
                                            }}></Image>
                                    </View>
                                </>
                                :
                                <>
                                    {/* <View style={[styles.weatherButton, { width: 200, marginLeft: -5, }]}>
                                        <Text style={styles.textSmall}>Bluetooth is disconnected !</Text>
                                    </View> */}
                                </>
                        }
                    </View>
                    <View style={{
                        flex: 0.4, flexDirection: "row",
                        justifyContent: 'space-around', alignItems: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.Waittime)
                            }}>
                            <View style={styles.goButton}>
                                <Text style={{ fontSize: 55, color: "white" }}>{t("go")}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ImageBackground>
    )
};


export default Sport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    mapView: {
        flex: 1,
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        color: "#6200ee"
    },
    icon: {
        marginHorizontal: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: "#ccc"
    },
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerText: {
        color: '#81acff',
        fontSize: 24,
    },
    halfView: {
        height: (Dimensions.get('screen').height - 100) / 2,
    },
    weatherButton: {
        height: 45,
        width: 170,
        borderRadius: 25,
        backgroundColor: 'white',
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textSmall: {
        color: '#A4A2A2',
        fontSize: 14,

    },
    lastKmView: {
        height: 45,
        width: 110,
        borderRadius: 25,
        backgroundColor: 'white',
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goButton: {
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81acff'
    },
    smallButton: {
        height: 45,
        width: 45,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white'
    }
})