import React from "react";
import { Text, Image, TouchableOpacity, View, Dimensions, StyleSheet, ScrollView, Alert } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";
import { useTranslation } from "react-i18next";

export default function TermAndCondition() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const handleDecline = () => {
        Alert.alert(
            "Notification",
            "Please uninstall the application if you do not accept the terms of use",
            [
                {
                    text: "Close",
                    style: "cancel"
                }
            ]
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SETTINGS_SCREEN)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -50,
                        marginRight: -20,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View style={{}}><Text style={styles.headerText}>{t("termsAndConditions")}</Text></View>
            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <Text style={styles.smallText}>{t("lastUpdate")} </Text>
                    <Text style={styles.unitText}>{t("interpretation")}</Text>
                    <Text style={styles.smallText}>{t("termsText1")}</Text>
                    <Text style={styles.unitText}>{t("definitions")}</Text>
                    <Text style={styles.smallText}>{t("termsContent1")}</Text>
                    <Text style={styles.unitText}>{t("acknowledgment")}</Text>
                    <Text style={styles.smallText}>{t("termsContent2")}</Text>
                    <Text style={styles.unitText}>{t("linksto")}</Text>
                    <Text style={styles.smallText}>{t("termsContent3")}</Text>
                    <Text style={styles.unitText}>{t("termination")}</Text>
                    <Text style={styles.smallText}>{t("termsContent4")}</Text>

                    <Text style={styles.unitText}>{t("limitation")}</Text>

                    <Text style={styles.smallText}>{t("termsContent5")}</Text>
                    <Text style={styles.unitText}>{t("asis")}</Text>

                    <Text style={styles.smallText}>{t("termsContent6")}</Text>
                    <Text style={styles.unitText}>{t("desolution")}</Text>
                    <Text style={styles.smallText}>{t("termsContent7")}</Text>

                    <Text style={styles.unitText}>{t("severability")}</Text>
                    <Text style={styles.smallText}>{t("termsContent8")}</Text>
                    <Text style={styles.unitText}>{t("translation")}</Text>
                    <Text style={styles.smallText}>{t("termsContent9")}</Text>

                    <Text style={styles.unitText}>{t("contacUs")}</Text>
                    <Text style={styles.smallText}>{t("termsContent10")}</Text>






                </ScrollView>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    scrollView: {
        height: Dimensions.get("screen").height * 0.8,

    },
    bootomTab: {
        height: Dimensions.get("screen").height * 0.25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: '#d1d1d1',
        borderTopWidth: 1,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    bottomButton: {
        height: 45,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#81acff',
        marginTop: 25,
    },
    unitText: {
        color: '#81acff',
        fontSize: 18,
        marginHorizontal: 10,
        marginTop: 10,
    },
    smallText: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 10,
        marginTop: 15,
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
    boldText: {
        color: "black",
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})
