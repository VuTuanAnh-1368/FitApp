import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, Alert } from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, ROUTES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux'
import i18n from '../../../redux/languages/i18n';
import { changeLanguage } from '../../../redux/action/actions';
import { useTranslation } from "react-i18next";


export default function Setting() {
    const navigation = useNavigation();
    //Change Language
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.currentLanguage);
    const stylesLightDark = useSelector((state) => state.settings.styles);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'EN' ? 'VN' : 'EN';
        dispatch(changeLanguage(newLanguage));
        i18n.changeLanguage(newLanguage);
    };

    //Deactivate Account
    const handleDeactivateAccount = () => {
        Alert.alert(
            'Confirm',
            'Are you sure you want to deactivate your account?',
            [
                {
                    text: 'No',
                    style: 'Cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        // Process...
                        console.log('Account disabled');
                    },
                },
            ]
        );
    };

    return (
        <View style={{ ...styles.background, ...stylesLightDark.background }}>
            {/* headerSetting */}
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.ME_TAB);
                        }
                        }
                    >
                        <MaterialCommunityIcon name="chevron-left" style={styles.leftHeaderIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerHeader}>
                    <Text style={{ fontSize: 22, ...stylesLightDark.text, fontWeight: 'bold' }}>{t('settings')}</Text>
                </View>
            </View>

            {/* containerSetting */}
            <View styles={styles.container}>
                <View style={styles.blockContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.textContainer}>{t('mySubscription')}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rightContainer}>
                            <Image source={require('../../assets/icons/mySubscribtion.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.textContainer}>{t('termsAndConditions')}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rightContainer}
                            onPress={() => {
                                navigation.navigate(ROUTES.TermAndCondition)
                            }}>
                            <MaterialCommunityIcon name="chevron-right" style={{ color: COLORS.bgBlack(1), fontSize: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.textContainer}>{t('helpSupport')}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rightContainer}
                            onPress={() => {
                                navigation.navigate(ROUTES.HelpAndSupport)
                            }}>
                            <MaterialCommunityIcon name="chevron-right" style={{ color: COLORS.bgBlack(1), fontSize: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blockContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.textContainer}>{t('language')}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.rightContainer} onPress={toggleLanguage}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ fontSize: 15 }}>{currentLanguage}</Text>
                                <MaterialCommunityIcon name="chevron-right" style={{ color: COLORS.bgBlack(1), fontSize: 30 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* footerSetting */}

        </View>
    )

}

//Styles
const styles = StyleSheet.create({
    background: {
        //backgroundColor: '#F5F5F5',
        flex: 1
    },

    //Header
    header: {
        flexDirection: 'row',
        marginTop: 35,
        marginHorizontal: 10,
        marginBottom: 25
    },
    leftHeader: {
        flex: 1
    },
    leftHeaderIcon: {
        color: COLORS.bgBlack(1),
        fontSize: 30,
    },
    centerHeader: {
        flex: 2,
        left: 25
    },

    //Container
    container: {
    },
    blockContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 8,
        marginHorizontal: 12,
        weight: 343,
        height: 60,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    leftContainer: {
        flex: 1,
        marginLeft: 5
    },
    textContainer: {
        fontSize: 16,
        color: "black"
    },
    rightContainer: {
        flex: 1,
    },

    //Footer
    footer: {
    },
    blockFooter: {
        backgroundColor: "#87CEFF",
        borderRadius: 20,
        marginTop: 130,
        marginHorizontal: 80,
        weight: 343,
        height: 53,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    textFooter: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})
