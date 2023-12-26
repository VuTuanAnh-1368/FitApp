import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SwitchButton from "../../components/Switch";
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from "../../../constants";
import api from "../../api";
import utils from "../../utils";
const ViewSetting = () => {
    const navigation = useNavigation();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [startTime, setStartTime] = useState(0);
    const [reminderDay, setReminderDay] = useState([]);
    const [isReminder, setIsReminder] = useState(null);
    const [reminderTime, setReminderTime] = useState(null);
    const [userId, setUserId] = useState(null);

    useState(() => {

        const loadData = async () => {
            let user_id = await utils.AsyncStorage.getItem('user_id');
            setUserId(user_id);

            api.UserAPI.handleGetUserInformation({
                'user_id': user_id
            })
                .then(response => {
                    if (response?.data?.userInfo) {
                        setReminderDay(response?.data?.userInfo?.reminderDay)
                        setStartTime(response?.data?.userInfo?.dailyStartTime)
                        setIsReminder(response?.data?.userInfo?.isReminder)
                        setReminderTime(response?.data?.userInfo?.reminderTime)
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        }
        loadData();

    }, [])

    const handlePressDeleteBtn = () => {
        api.UserAPI.handleDeleteTarget({
            'user_id': userId
        })
            .then(response => {
                if (response?.data?.success === true) {
                    alert('Xóa mục tiêu thành công~')
                    navigation.navigate(ROUTES.ME_TAB, {
                        options: 'RECALL'
                    });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate(ROUTES.TRAINING_SCHEDULE) }}>
                    <MaterialCommunityIcons name="chevron-left" size={32}></MaterialCommunityIcons>
                </TouchableOpacity>
                <View style={{ flex: 0.9 }}>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </View>
            <View style={styles.ViewStartTime}>
                <View style={{ flexDirection: 'row', flex: 1 / 12 }}>
                    <View style={{ marginLeft: 10, width: 10, height: 25, backgroundColor: '#9d9d9d' }}></View>
                    <Text style={styles.tittle}>Start time</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/clock1.png")} style={{
                        height: 45,
                        width: 45,
                    }}></Image>
                    <Text style={{ fontSize: 20, marginLeft: 10, }}>Start practice at : {startTime}</Text>
                </View>
            </View>
            <View style={styles.ViewShedule}>
                <View style={{ flexDirection: 'row', flex: 1 / 10 }}>
                    <View style={{ marginLeft: 10, width: 10, height: 25, backgroundColor: '#9d9d9d' }}></View>
                    <Text style={styles.tittle}>Schedule</Text>
                </View>
                <View style={{ flexDirection: "row", height: 100 }}>


                    {
                        daysOfWeek.map((day, index) => {
                            const isReminderDay = reminderDay.includes(day);
                            return (
                                <View style={styles.day} key={index}>
                                    <Text style={styles.textday}>{day}</Text>
                                    <View style={styles.centerposition}>
                                        <View style={[styles.circleday, { backgroundColor: isReminderDay ? '#9d9d9d' : 'transparent' }]}></View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={[styles.bottomSetting,]}>
                    <View style={{ width: 300, }}>
                        <Text style={[styles.textBottom]}>Training remainder</Text>
                    </View>
                    <SwitchButton updateStateSwitch={isReminder} />
                </View>
                <View style={[styles.bottomSetting,]}>
                    <View style={{ width: 300, }}>
                        <Text style={[styles.textBottom]}>Reminder time</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 25, }}></Text>

                    <View style={{ marginLeft: 20 }}>
                        <Text>
                            {reminderTime}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.delete}
                >
                    <Text style={{ color: 'black', fontSize: 18, }} onPress={handlePressDeleteBtn}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ViewSetting

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        flex: 1 / 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#81acff',
        fontSize: 24,
        alignSelf: 'center',
    },
    ViewStartTime: {
        flex: 0.4,
        //    backgroundColor: 'yellow',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d'
    },
    ViewShedule: {
        flex: 0.6,
        //    backgroundColor: 'green',
        marginTop: 10,
    },
    tittle: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
    },
    day: {
        flex: 1 / 7,
        alignItems: 'center',
        marginTop: 20,
        //    backgroundColor: 'red',

    },
    textday: {
        fontSize: 18,
        color: "#9d9d9d",
        alignSelf: 'center',
    },
    centerposition: {
        justifyContent: 'center',
        flex: 0.9,
        //    backgroundColor: 'blue',
    },
    circleday: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#9d9d9d",
        alignSelf: 'center'
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
    delete: {
        backgroundColor: '#81ACFF',
        borderRadius: 20,
        height: 40,
        width: 300,
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})