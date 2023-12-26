import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, Alert, ScrollView, TouchableWithoutFeedback, Dimensions } from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";
import TickCheckbox from "../../components/Checkbox";
import LinearGradient from "react-native-linear-gradient";
import SwitchButton from "../../components/Switch";
import api from "../../api";
import Modal from 'react-native-modal';
import utils from "../../utils";
import Toast from 'react-native-toast-message'
import { useTranslation } from "react-i18next";

import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)


export default function ChangeGoalsScreen() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [currentScreen, setCurrentScreen] = useState(1);
    const [scollViewHeight, setScrollViewHeight] = useState(0);
    const [selectedStep, setSelectedStep] = useState(null);
    const buttonText = currentScreen === 3 ? "Done" : "Next";
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    let stepsArray = [];
    const [isReminder, setIsRemider] = useState(false);
    const [reminderTime, setReminderTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isTextInputHourFocused, setIsTextInputHourFocused] = useState(false);
    const [isTextInputMinutesFocused, setIsTextInputMinutesFocused] = useState(false);
    const [hour, setHour] = useState('');
    const [Minutes, setMinutes] = useState('');
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    for (let i = 1000; i <= 30000; i += 100) {
        stepsArray.push(i)
    }

    ; let timeArray = [];
    for (let i = 0; i <= 480; i += 1) {
        timeArray.push(i);
    }
    const handleClick = async () => {
        console.log(currentScreen)
        if (currentScreen === 1 && selectedStep === null) {
            utils.Toast.showToast('info', 'Step', 'Choose one target step')
        }
        else if (currentScreen === 2 && selectedDate.length == 0) {
            utils.Toast.showToast('info', 'Day', 'Choose one day')
        } else if (currentScreen === 3 && selectedStartTime === null) {
            utils.Toast.showToast('info', 'Start Time', 'Choose start time')
        }
        else {
            if (currentScreen < 3) {
                setCurrentScreen(currentScreen + 1);
            } else if (currentScreen === 3) {
                const user_id = await utils.AsyncStorage.getItem('user_id')
                let temp_reminder_time = hour + ":" + Minutes;
                console.log(temp_reminder_time)
                api.UserAPI.handleUpdateTarget({
                    'user_id': user_id,
                    'targetStep': selectedStep,
                    'reminderDay': selectedDate,
                    'dailyStartTime': selectedStartTime,
                    'isReminder': isReminder,
                    'reminderTime': temp_reminder_time

                }).then((result) => {
                    if (result?.data?.success === true) {
                        alert('Cập nhật thông tin thành công');
                        navigation.navigate(ROUTES.ME_TAB, {
                            'options': 'RECALL'
                        });
                    }
                })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }


        //    console.log(screens[currentScreen - 1])
    };
    const backHandleClick = () => {
        if (currentScreen !== 1) {
            setCurrentScreen(currentScreen - 1);
        } else {
            navigation.navigate(ROUTES.ME_TAB)
        }

    }
    const handleStepPress = (step) => {
        setSelectedStep(step);
    }

    const titleScreen = [
        t('goals'),
        t('period'),
        t('Start time')
      ];
    const handleClickRatio = (day) => {
        setSelectedDate(prevDates => [...prevDates, day]);
    }
    const removeDateFromSelected = (dateToRemove) => {
        setSelectedDate(prevDates => prevDates.filter(date => date !== dateToRemove));

    }
    const handleOnPress = (enable) => {
        setIsRemider(enable);
    }
    const handleSetRemiderTime = (time) => {
        setReminderTime("8");
    }
    const screens = [
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 16
                }]}>{t("setGoals")}</Text>
            </View>

            <ScrollView
                onLayout={(event) => {
                    var { height } = event.nativeEvent.layout;
                    setScrollViewHeight(height)
                }}
                style={{
                    marginTop: 12,
                    backgroundColor: '#ccc',
                }}>
                {stepsArray.map((step, index) => {
                    const isSelected = selectedStep === step;
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handleStepPress(step)}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 60,
                                    fontWeight: isSelected ? 'bold' : 400,
                                    backgroundColor: isSelected ? '#81ACFF' : '#ccc',
                                }}>
                                <Text>{step}</Text>
                                {isSelected && <Text> {t("steps")}</Text>}
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }

                )}

            </ScrollView>

        </>,
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40,
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 18,
                    fontWeight: 'bold'
                }]}>{t("selectTraining")}</Text>
            </View>
            <Text style={[styles.textCenter, { fontSize: 16, }]}>{t("tranning")}</Text>
            <View style={[styles.centerPosition]}>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Mon</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Tue</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Wed</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Thu</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Fri</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Sat</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Sun</Text>
            </View>
            <View style={[styles.centerPosition]}>
                <TickCheckbox day='Mon' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Tue' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Wed' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Thu' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Fri' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Sat' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
                <TickCheckbox day='Sun' handleClickRatio={handleClickRatio} handleUncheckRatio={removeDateFromSelected} selectedDate={selectedDate} />
            </View>
            <Image source={require("../../assets/images/changegoal2.png")}
                style={{
                    height: 250,
                    width: 250,
                    position: 'absolute',
                    top: 360,
                    left: 60,
                }}></Image>
        </>,
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40,
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 18,
                    fontWeight: 'bold'
                }]}>{t("DailyTraining")}</Text>
            </View>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(255,255,255, 0.5)', '#DCDCDC', 'rgba(255,255,255, 0.5)']}
                style={{
                    height: 150,
                    width: 300,
                    alignSelf: 'center'
                }}>
                <ScrollView
                    onLayout={(event) => {
                        var { height } = event.nativeEvent.layout;
                        setScrollViewHeight(height)
                    }}
                    style={{
                        marginTop: 12,
                    }}>
                    {timeArray.map((time, index) => {
                        const isSelected = selectedStartTime === time;
                        const displayValue = time % 24; // Sử dụng modulo 24 để lặp lại giá trị từ 0 đến 23
                        return (

                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => setSelectedStartTime(time)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                        backgroundColor: isSelected ? '#81ACFF' : 'transparent',
                                        borderColor: isSelected ? 'blue' : 'transparent',  // Màu viền
                                    }}>
                                    <Text style={{ fontWeight: isSelected ? "bold" : "400" }}>{displayValue}:00</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    )}
                </ScrollView>
            </LinearGradient>
            <Modal isVisible={isModalVisible} style={styles.modalBox}>
                <View style={styles.settime}>
                    <Text style={styles.textModal}>{t("reminderTime")}</Text>
                    <Image source={require("../../assets/icons/clock1.png")}
                        style={{ height: 100, width: 100, margin: 10, }}></Image>
                    <View
                        style={{
                            marginTop: 10,
                            paddingHorizontal: 32,
                            paddingEnd: 32,
                            width: 270,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: isTextInputHourFocused ? "#81ACFF" : "yellow",
                                borderBottomWidth: 2,
                                marginBottom: 25,
                            }}>
                            <TextInput
                                placeholder={t("exHour")}
                                onFocus={() => setIsTextInputHourFocused(true)}
                                onBlur={() => setIsTextInputHourFocused(false)}
                                onChangeText={hour => {
                                    // Kiểm tra xem giá trị nhập vào có nằm trong khoảng từ 0 đến 24 không
                                    const isValidHour = /^(0?[0-9]|1[0-9]|2[0-3])$/.test(hour) && parseInt(hour, 10) >= 0 && parseInt(hour, 10) <= 23;

                                    // Nếu giá trị hợp lệ, cập nhật state hour, ngược lại, không làm gì cả
                                    if (isValidHour) {

                                        setHour(hour);
                                    }
                                    else {
                                        setHour('');
                                    }
                                }}
                                value={hour}
                                style={{
                                    flex: 1,
                                    paddingVertical: 0,
                                    color: 'black',
                                    paddingLeft: 5

                                }}
                                placeholderTextColor={"#C3C3C3"}
                                keyboardType="number-pad"
                            />
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end'
                            }}>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            paddingHorizontal: 32,
                            paddingEnd: 32,
                            width: 270,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderBottomColor: isTextInputMinutesFocused ? "#81ACFF" : "yellow",
                                borderBottomWidth: 2,
                                marginBottom: 25,
                            }}>
                            <TextInput
                                placeholder={t("exMin")}
                                onFocus={() => setIsTextInputMinutesFocused(true)}
                                onBlur={() => setIsTextInputMinutesFocused(false)}
                                onChangeText={minutes => {
                                    const isValidMinutes = /^[0-5]?[0-9]$/.test(minutes) && parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59;

                                    if (isValidMinutes) {
                                        setMinutes(minutes);
                                    } else {
                                        // Nếu giá trị không hợp lệ, reset giá trị của minutes về rỗng
                                        setMinutes('');
                                    }
                                }}
                                value={Minutes}
                                style={{
                                    flex: 1,
                                    paddingVertical: 0,
                                    color: 'black',
                                    paddingLeft: 5

                                }}
                                placeholderTextColor={"#C3C3C3"}
                                keyboardType="number-pad"
                            //   editable={!isClickCaptcha}
                            />
                            <View style={{
                                flex: 0.3,
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end'
                            }}>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        <Text style={styles.textModal}>{t("confirm")}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Image source={require("../../assets/images/changegoal3.png")}
                style={{
                    margin: 20,
                    height: 100,
                    width: 120,
                    alignSelf: 'center'
                }}>
            </Image>
            <View style={[styles.bottomSetting,]}>
                <View style={{ width: 300, }}>
                    <Text style={[styles.textBottom]}>{t("Trainingremainder")}</Text>
                </View>
                <SwitchButton handleOnPress={handleOnPress} />
            </View>
            <View style={[styles.bottomSetting,]}>
                <View style={{ width: 300, }}>
                    <Text style={[styles.textBottom]}>{t("reminderTime")}</Text>
                </View>
                {
                    (hour && Minutes) ? (
                        <Text style={{ fontSize: 16, marginLeft: 25, }}>{hour}:{Minutes}</Text>
                    ) : (
                        <Text style={{ fontSize: 16, marginLeft: 25, }}>{t("time")}</Text>
                    )
                }
                <TouchableOpacity onPress={toggleModal}>
                    <MaterialCommunityIcon name="chevron-right" size={32}></MaterialCommunityIcon>
                </TouchableOpacity>
            </View>
        </>,
    ];
    return (
        <View style={styles.container}>
            <Toast config={utils.Toast.toastConfig} />
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={backHandleClick}
                >
                    <MaterialCommunityIcon name="chevron-left" style={styles.iconHeader} />
                </TouchableOpacity>

                <View style={[styles.centerRowView, { borderRadius: 25, backgroundColor: "#81ACFF", zIndex: -100 }]}>
                    <Text style={styles.textHeader}>
                        {
                            titleScreen[currentScreen - 1]
                        }
                    </Text>
                </View>
            </View>

            {
                screens[currentScreen - 1]
            }

            <View style={{ height: 300 }}>
            </View>
            <TouchableOpacity
                onPress={handleClick}
                style={styles.next}
            >
                <Text style={{ color: 'black', fontSize: 18, }}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 4,
    },
    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    centerRowView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 50,
    }
    ,
    textHeader: {
        fontSize: 25,
        color: 'black',
        fontWeight: '400',
        zIndex: -100
    }
    ,
    iconHeader: {
        fontSize: 50,
        color: 'black',
    },
    textCenter: {
        flex: 1,
        textAlign: 'center',
        zIndex: -100
    },
    next: {
        backgroundColor: '#81ACFF',
        borderRadius: 20,
        height: 35,
        width: 300,
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    centerPosition: {
        flex: 0.25,
        position: "relative",
        bottom: Dimensions.get("screen").height * 120 / 800,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottomSetting: {
        height: 45,
        borderBottomWidth: 2,
        borderColor: 'rgba(129,172,255, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBottom: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 120,
        fontWeight: '600'
    },
    settime: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    modalBox: {
        flex: 0.7,
        //    marginTop: 400,
        //    margin: 0,
    },
    textModal: {
        fontSize: 16,
        fontWeight: '800',
        margin: 15,
    },

})