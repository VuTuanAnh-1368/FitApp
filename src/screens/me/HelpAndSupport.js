import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import data from '../../components/accordion/data';
import Accordion from '../../components/accordion/Accordion';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import api from '../../api';
import utils from '../../utils';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"


const HelpAndSupport = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const stylesLightDark = useSelector((state) => state.settings.styles);
    const [inputValue, setInputValue] = useState('');
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const loadData = async () => {
        let userId = await utils.AsyncStorage.getItem('user_id');
        await api.UserAPI.handleGetUserInformation({
            "user_id": userId
        })
            .then(
                (response) => {
                    if (response.data.success === true) {
                        if (response?.data?.userInfo?.name) {
                            setUserName(response?.data?.userInfo?.name)
                        }
                        if (response?.data?.userInfo?.email) {
                            setEmail(response?.data?.userInfo?.email)
                        }
                    }
                }
            )
            .catch(error => {
                console.log(error)
            })

    }
    const handleClick = async () => {
        if (inputValue.trim() === '') {
            // Hiển thị cảnh báo khi người dùng không nhập gì
            alert('Please enter something before submitting.');
        } else {
            await api.UserAPI.userSendResponse({
                'userName': userName,
                'email': email,
                'message': inputValue

            }).then(response => {
                setInputValue('');
                alert('Your question has been recorded');
            })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <SafeAreaView style={{ ...stylesLightDark.background, flex: 1 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SETTINGS_SCREEN)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -80,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View><Text style={[styles.headerText,]}>{t("help&Support")}</Text></View>

            </View>
            <View style={styles.boxUnit}>
                <Text style={[styles.headerText, { fontWeight: 'bold' }, {...stylesLightDark.text}]}>FAQs</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((value, index) => {
                    return <Accordion value={value} key={index} type={value.type} />;
                })}

                <View style={styles.boxUnit}>
                    <Text style={[styles.headerText, { fontWeight: 'bold' },{...stylesLightDark.text}]}>{t("sendQuestion")}</Text>
                </View>
                <View style={styles.boxTextInput}>
                    <TextInput
                        placeholder={t("aQuestion")}
                        value={inputValue}
                        style={{ paddingLeft: 15, }}
                        onChangeText={(text) => setInputValue(text)}></TextInput>
                </View>
                <TouchableOpacity
                    onPress={handleClick}>
                    <View style={styles.next}>
                        <Text style={{ fontSize: 20, color: 'white' }}>{t("send")}</Text>
                        <Image source={require("../../assets/icons/paperlane.png")}
                            style={{
                                height: 40,
                                width: 40,
                            }}></Image>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d',
        backgroundColor: 'white'
    },
    headerText: {
        color: 'black',
        fontSize: 24,
    },
    boxUnit: {
        height: 45,
        //    backgroundColor: 'red',
        marginTop: 10,
        marginLeft: 10,
    },
    boxTextInput: {
        height: 55,
        borderWidth: 1,
        borderColor: '#81acff',
        marginHorizontal: 10,
        borderRadius: 15,
    },
    next: {
        backgroundColor: '#81ACFF',
        borderRadius: 35,
        height: 55,
        width: 300,
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
});