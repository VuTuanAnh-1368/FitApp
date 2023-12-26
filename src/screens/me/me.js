import React, { useState, useEffect } from "react";
import { View, Text, Safe, AreaView, TextInput, ImageBackground, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, ROUTES } from "../../../constants";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchButton from "../../components/Switch";
import api from "../../api";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SwitchLightDark from "../../../redux/reducer/switchLightDark";
import utils from "../../utils";

export default function Me({ route }) {
    const navigation = useNavigation()
    const [userName, setUserName] = useState(null);
    const [gmail, setGmail] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [gender, setGender] = useState(null);
    const [displayImage, setDisplayImage] = useState('');
    const [hasTrainingSchedule, setHasTrainingSchedule] = useState(null)
    const [isReceiveNotification, setIsRecieveNotification] = useState(false);
    const [userId, setUserId] = useState(null);
    const { t } = useTranslation();
    const stylesLightDark = useSelector((state) => state.settings.styles);



    const loadData = async () => {
        let userId = await utils.AsyncStorage.getItem('user_id');
        setUserId(userId)

        api.UserAPI.handleGetUserInformation({
            "user_id": userId
        })
            .then(
                (response) => {
                    if (response.data.success === true) {
                        setUserName(response?.data?.userInfo?.name);
                        setHeight(String(response?.data?.userInfo?.height));
                        setWeight(String(response?.data?.userInfo?.weight));
                        setGmail(response?.data?.userInfo?.email);
                        setGender(response?.data?.userInfo?.gender)
                        setHasTrainingSchedule(response?.data?.userInfo?.hasTrainingSchedule)
                        setIsRecieveNotification(response?.data?.userInfo?.isReceiveNotification)
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

    if (route?.params?.options == 'RECALL') {
        loadData()
    }
    useEffect(() => {
        loadData()
    }, []);


    const handleEditButton = () => {
        navigation.navigate(ROUTES.EDIT_INFORMATION, {
            'options': 'me'
        });
    }
    const handleOnPress = (en) => {
        setIsRecieveNotification(en)
        api.UserAPI.handleUpdateReceiveNotification({
            "user_id": userId,
            "isReceiveNotification": !isReceiveNotification
        })
    }
    const handleLogoutBtn = () => {
        api.UserAPI.handleLogout({
            user_id: userId,
            fcmtoken: ''
        }).then((response) => {
            utils.AsyncStorage.removeItem('user_id');
            navigation.navigate(ROUTES.LOGIN)
        })
    }
    return (
        <View style={{ ...stylesLightDark.background, flex: 1 }}>
            {/*Name and email...*/}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    source={
                        displayImage === ''
                            ?
                            require('../../assets/images/avatar.png')
                            :
                            // require(selectedImage)
                            { uri: displayImage }
                    }
                    style={{ marginHorizontal: 20, height: 58, width: 58, borderRadius: 60 }} />
                <View style={{ marginVertical: 6, flex: 1 }}>
                    <Text style={{ color: 'rgb(218,165,32)', fontSize: 20, fontWeight: 'bold' }}>{userName}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: '600' }} >{gmail}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleEditButton}
                    style={{
                        width: 90, height: 40,
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        backgroundColor: 'rgba(185, 175, 245, 1)',
                        borderRadius: 30, marginRight: 30

                    }}>
                    <Text style={{ color: COLORS.bgWhite(1), fontWeight: 600, fontSize: 16 }}>{t('edit')}</Text>
                </TouchableOpacity>
            </View>

            {/*Height, weight, gender*/}

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingHorizontal: 10 }}>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{height} cm</Text>
                        <Text style={{ color: COLORS.grey }}>{t('height')}</Text>
                    </View>
                </View>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{weight} kg</Text>
                        <Text style={{ color: COLORS.grey }}>{t('weight')}</Text>
                    </View>
                </View>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{gender}</Text>
                        <Text style={{ color: COLORS.grey }}>{t('gender')}</Text>
                    </View>
                </View>
            </View>

            {/*list */}

            <View style={{ paddingTop: 30 }}>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/goal.png')} />
                    <Text style={styles.TextRow}>{t('goals')}</Text>

                    <TouchableOpacity
                        onPress={() => (hasTrainingSchedule ? navigation.navigate(ROUTES.TRAINING_SCHEDULE) : navigation.navigate(ROUTES.CHANGE_GOALS_SCREEN))}
                    >
                        <MaterialCommunityIcon name="chevron-right"
                            style={styles.iconRight} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/notification.png')} />
                    <Text style={styles.TextRow}>{t('popUpNotification')}</Text>

                    <View>
                        <SwitchButton handleOnPress={handleOnPress} updateStateSwitch={isReceiveNotification} />
                    </View>
                </View>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/lightdark.png')} />
                    <Text style={styles.TextRow}>{t('lightDarkMode')}</Text>
                    <View style={{ marginTop: 10 }}><SwitchLightDark style={{ marginTop: 100 }} /></View>
                </View>

                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/setting.png')} />
                    <Text style={styles.TextRow}>{t('settings')}</Text>

                    <TouchableOpacity

                        onPress={() => {
                            navigation.navigate(ROUTES.SETTINGS_SCREEN)
                        }}>
                        <MaterialCommunityIcon name="chevron-right"
                            style={styles.iconRight} />
                    </TouchableOpacity>
                </View>

            </View>


            {/*Sign Out btn*/}

            <TouchableOpacity
                onPress={handleLogoutBtn}
            >
                <View
                    style={{
                        alignItems: 'center', backgroundColor: "#87CEFF", marginHorizontal: 30, borderRadius: 20,
                        height: 60, marginVertical: 20, justifyContent: 'center'
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{t('signOut')}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    rectangleViewContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 70,
        borderRadius: 20
    },
    rectanglePositionText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangleTextStyle: {
        color: 'rgba(193, 80, 246, 1)',
        paddingTop: 8,
        paddingBottom: 6,
        fontSize: 18,
        fontWeight: 'bold'
    },
    ViewRowContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 8,
        marginHorizontal: 12,
        weight: 343,
        height: 70,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    TextRow: {
        marginTop: 12,
        flex: 1,
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.bgBlack(1)
    },
    iconRight: {
        flex: 1,
        color: COLORS.bgBlack(1),
        fontSize: 30,
        marginTop: 10,

    }

})