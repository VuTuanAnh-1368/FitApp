import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Liinechart from '../../components/Liinechart'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"
import moment from 'moment';
import api from '../../api';


//Data mo phong cai heart
// đo trong 4 tiếng trước
// const dataHeart = {
//     labels: ["10:30", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "3", "3"],
//     datasets: [
//         {
//             data: [90, 88, 73, 110, 49, 92, 88, 88, 88]
//         }
//     ]
// };

// Lay kich thuoc cua cai man hinh thoi
const Heart = () => {
    const navigation = useNavigation();
    // const currentTime = moment();
    // const startTime = moment(currentTime).startOf('hour').subtract(4, 'hours');
    // const timeArray = Array.from({ length: 8 }, (_, index) =>
    //     moment(startTime).add(index * 30, 'minutes').unix() * 1000
    // );

    // console.log(timeArray);  
    const [dataHeart, setDataHeart] = useState(null)
    const [dataSpo2, setDataSpo2] = useState(null)
    const [hasDataHeartRate, setHasDataHeartRate] = useState(null)
    const [hasDataHeartSpo2, setHasDataSpo2] = useState(null)

    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    const { t } = useTranslation();
    const stylesLightDark = useSelector((state) => state.settings.styles);

    useEffect(() => {
        const loadData = async () => {
            let ud = await utils.AsyncStorage.getItem('user_id');
            await api.UserAPI.handleGetStateDataFollowDay({
                'objectId': ud
            })
                .then(response => {
                    // console.log(response.data.todayInfo.heartRate.avgHeartRate)
                    if (response.data.todayInfo) {
                        if (response.data.todayInfo.heartRate) {
                            if (response.data.todayInfo.heartRate.avgHeartRate) {
                                avgArr = response.data.todayInfo.heartRate.avgHeartRate

                                const maxElements = 8;
                                const last8Elements = avgArr.slice(-maxElements);

                                // console.log(last8Elements);
                                if (last8Elements.length > 0) {

                                    setHasDataHeartRate(true);

                                    const labels = last8Elements.map(item => {
                                        const timeLabel = moment(parseInt(item.timestamp)).format('HH:mm');

                                        return timeLabel
                                    });
                                    const datasets = avgArr.map(item => {

                                        return item.value
                                    });
                                    setDataHeart({
                                        labels: labels,
                                        datasets: [
                                            {
                                                data: datasets
                                            }]
                                    })
                                }


                            }
                            if (response.data.todayInfo.heartRate.avgSpo2) {
                                avgArr = response.data.todayInfo.heartRate.avgSpo2

                                const maxElements = 8;
                                const last8Elements = avgArr.slice(-maxElements);

                                // console.log(last8Elements);
                                if (last8Elements.length > 0) {
                                    setHasDataSpo2(true);

                                    const labels = last8Elements.map(item => {
                                        const timeLabel = moment(parseInt(item.timestamp)).format('HH:mm');

                                        return timeLabel
                                    });
                                    const datasets = avgArr.map(item => {

                                        return item.value
                                    });
                                    setDataSpo2({
                                        labels: labels,
                                        datasets: [
                                            {
                                                data: datasets
                                            }]
                                    })
                                }


                            }
                        }
                    }

                })
                .catch(err =>
                    console.log(err))
        }
        loadData()
    }, [])
    console.log(dataHeart)
    return (
        <SafeAreaView>
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
                        height: hei / 14,
                        width: wi,
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
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
                            marginLeft: 5,
                        }}>{t('heart')}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 325,
                        height: 50,
                        backgroundColor: '#3BDD41',
                        borderRadius: 15,
                    }}>
                    <Image
                        source={require('../../assets/icons/heart2.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginLeft: 10,
                        }}>
                    </Image>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginLeft: 20,
                        }}>{t('heartHealth')}</Text>

                </View>
                <View
                    style={{
                        height: 280,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'rgba(20,20,47, 0.5)',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}>Heart rate-bpm</Text>
                    {hasDataHeartRate == null || dataHeart == null
                        ? <></>
                        :
                        <Liinechart height={250} width={350} data={dataHeart} backgroundGradient='#14142F' fillShadowGradientFrom='#14142F' fillShadowGradientTo='#14142F' colorLine={`rgb(93,246,108)`} Opacity={0}></Liinechart>
                        // <></>
                    }
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 325,
                        height: 50,
                        backgroundColor: '#3BDD41',
                        borderRadius: 15,
                        marginTop: 15,
                    }}>
                    <Image
                        source={require('../../assets/icons/o2.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginLeft: 10,
                        }}>

                    </Image>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginLeft: 15,
                        }}>{t('oxygenInBlood')}</Text>
                </View>
                <View
                    style={{
                        height: 280,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'rgba(20,20,47, 0.5)',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}>SpO2-%</Text>
                    {
                        hasDataHeartSpo2 == null || dataSpo2 == null
                            ?
                            <></>
                            :
                            // <></>
                            <Liinechart height={250} width={350} data={dataSpo2} backgroundGradient='#14142F' fillShadowGradientFrom='#14142F' fillShadowGradientTo='#14142F' colorLine={`rgb(93,246,108)`} Opacity={0}></Liinechart>


                    }
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Heart
