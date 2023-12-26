import React, { useState, useEffect, useRef } from 'react'
import { View, Image, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

const RunningOutDoor = () => {
    const navigation = useNavigation();
    const distance = 0.00;
    const [currentScreen, setCurrentScreen] = useState(1);
    const [islock, setIsLock] = useState(false);
    const [duration, setDuration] = useState(0); // Thời gian ban đầu là 0 
    const [isPaused, setIsPaused] = useState(false);
    const heartRate = null;           //demo heart rate
    const averagepace = null;         // demo
    let interval;
    const pauSe = () => {
        setIsPaused(true);
    }
    const contiNue = () => {
        setIsPaused(false);
    }
    const handleLock = () => {
        setIsLock(prevLock => !prevLock);
    }

    const handleClick = async () => {
        if (currentScreen === 1) {
            setCurrentScreen(2);
        }
        else {
            setCurrentScreen(1);
        }
    }
    let intervalRef = useRef(null); // Thêm useRef từ React
    // ...
    const startTimer = () => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setDuration(prevDuration => prevDuration + 1);
            }, 1000);
        }
    };
    useEffect(() => {
        let intervalCleanup;
        if (!isPaused) {
            intervalCleanup = startTimer();
        } else {
            clearInterval(intervalRef.current); // Xóa interval nếu đã pause
        }
        return () => {
            if (intervalCleanup) clearInterval(intervalCleanup);
            clearInterval(intervalRef.current); // Xóa interval khi component bị unmount
        };
    }, [isPaused]);
    // ...

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    const screens = [
        <>
            <View style={styles.convenientButton}>
                <View style={styles.detailButton}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={islock}
                        onPress={() => { navigation.navigate(ROUTES.SPORT_TAB) }}>
                        <View style={styles.miniButton}>
                            <Image source={require("../../assets/icons/map.png")} style={{ height: 50, width: 50, borderRadius: 25, }}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={islock}
                        onPress={() => { handleClick(); pauSe(); }}>
                        <View style={styles.pauseButton}>
                            <Entypo name='controller-paus' color={"white"} size={32}></Entypo>
                            <Text style={[styles.textInfor2, { color: 'white' }]}>Pause</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={handleLock}>
                        <View style={styles.miniButton}>
                            <Ionicons name={islock ? 'lock-open' : 'lock-closed'} color={'black'} size={30}></Ionicons>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>,
        <>
            <View style={styles.convenientButton}>
                <View style={styles.detailButton}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={islock}
                        onPress={() => { navigation.navigate(ROUTES.SPORT_TAB) }}>
                        <View style={styles.miniButton} >
                            <Image source={require("../../assets/icons/map.png")} style={{ height: 50, width: 50, borderRadius: 25, }}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={islock}
                        onPress={() => { handleClick(); contiNue(); }}>
                        <View style={[styles.pauseButton, { height: 80, width: 80, borderRadius: 40, marginRight: 0, }]}>
                            <Entypo name='controller-play' color={"white"} size={32}></Entypo>
                            <Text style={[styles.textInfor2, { color: 'white', fontSize: 14, }]}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={islock}>
                        <View style={[styles.pauseButton, { height: 80, width: 80, borderRadius: 40, backgroundColor: '#EB2A2A' }]}>
                            <Entypo name='controller-stop' color={"white"} size={32}></Entypo>
                            <Text style={[styles.textInfor2, { color: 'white' }]}>Stop</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={handleLock}>
                        <View style={styles.miniButton}>
                            <Ionicons name={islock ? 'lock-open' : 'lock-closed'} color={'black'} size={30}></Ionicons>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    ];
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.headerText}>Running out doors</Text>
            </View>
            <View style={styles.mainView}>
                <View style={styles.mainInfor}>
                    <Text style={{ fontSize: 68, color: 'white' }}>{distance}</Text>
                    <Text style={{ fontSize: 20, color: 'rgba(251,251,251, 0.5)' }}>Kilometer</Text>
                </View>
                <View style={styles.rowInfor}>
                    <View style={styles.detailInfor}>
                        <Text style={styles.textInfor1}>{formatTime(duration)}</Text>
                        <Text style={styles.textInfor2}>Duration</Text>
                    </View>
                    <View style={styles.detailInfor}>
                        <Text style={styles.textInfor1}>{heartRate !== null ? heartRate : '- -'}</Text>
                        <Text style={styles.textInfor2}>Heart rate</Text>
                    </View>
                    <View style={styles.detailInfor}>
                        <Text style={styles.textInfor1}>{heartRate !== null ? averagepace : '- -'}</Text>
                        <Text style={styles.textInfor2}>Average pace</Text>
                    </View>

                </View>
            </View>
            {
                screens[currentScreen - 1]
            }
        </View >
    )
}
export default RunningOutDoor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171941'
    },
    Header: {
        flexDirection: 'row',
        flex: 1 / 14,
        marginHorizontal: 10,
        //    backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
    },
    mainView: {
        flex: 0.5,
        //    backgroundColor: 'green',
        marginVertical: 5,
    },
    rowInfor: {
        flex: 0.3,
        //    backgroundColor: 'pink',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mainInfor: {
        flex: 0.7,
        //    backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInfor1: {
        fontSize: 24,
        color: 'white',
    },
    textInfor2: {
        fontSize: 18,
        color: 'rgba(251,251,251, 0.5)',
    },
    detailInfor: {
        flex: 0.32,
        //    backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center',
    },
    convenientButton: {
        flex: 0.3,
        //    backgroundColor: 'yellow',
        justifyContent: 'flex-end',
    },
    detailButton: {
        flex: 0.6,
        //    backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pauseButton: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#81acff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    },
    miniButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
})