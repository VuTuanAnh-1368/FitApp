import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"

const Details = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const stylesLightDark = useSelector((state) => state.settings.styles);
    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    return (
        <SafeAreaView style={{ height: hei, width: wi, }}>
            <View style={{ flexDirection: 'row', height: hei / 12, width: wi, alignItems: 'center', ...stylesLightDark.background }}>
                <Text style={{ fontSize: 24, marginLeft: 20,fontWeight: "bold", ...stylesLightDark.text}}>{t("detailsAndTips")}</Text>
            </View>
            <ImageBackground source={require("../../assets/images/Layer1.png")} style={{ height: hei, width: wi,...stylesLightDark.background }}>
                <ScrollView>
                    <View style={styles.ScrollView}>
                        {/* BloodPressure */}<View style={styles.triangleCorner}></View>
                        <View style={styles.triangleCornerLayer}></View>
                        <View style={styles.triangleCorner1}>
                            <Image source={require("../../assets/icons/bloodPressure.png")} style={styles.iconRight}></Image>
                            <Text style={styles.text}>Blood Pressure</Text>
                            <TouchableOpacity style={styles.iconBack}
                                onPress={() => { navigation.navigate(ROUTES.BloodPresssure) }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                        {/* BloodSugar */}<View style={{ ...styles.commonStyle, top: 205, width: 350, height: 100, borderRightWidth: 50, borderTopWidth: 80, borderTopColor: 'gray' }}></View>
                        <View style={{ ...styles.commonStyle, top: 207, width: 347, height: 100, borderRightWidth: 47, borderTopWidth: 75, borderTopColor: 'white' }}></View>
                        <View style={{ ...styles.commonStyle, top: 200, width: 130, borderRightWidth: 50, borderTopWidth: 90, borderTopColor: '#FD97E6' }}>
                            <Image source={require("../../assets/icons/sugarBlood.png")} style={styles.iconRight}></Image>
                            <Text style={styles.text}>Blood Sugar</Text>
                            <TouchableOpacity style={styles.iconBack}
                                onPress={() => { navigation.navigate(ROUTES.BloodSugar) }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                        {/* WeightBMI */}<View style={{ ...styles.commonStyle, top: 355, width: 350, height: 100, borderRightWidth: 50, borderTopWidth: 80, borderTopColor: 'gray' }}></View>
                        <View style={{ ...styles.commonStyle, top: 357, width: 347, height: 100, borderRightWidth: 47, borderTopWidth: 75, borderTopColor: 'white' }}></View>
                        <View style={{ ...styles.commonStyle, top: 350, width: 130, borderRightWidth: 50, borderTopWidth: 90, borderTopColor: '#7EFC7C' }}>
                            <Image source={require("../../assets/icons/scale.png")} style={styles.iconRight}></Image>
                            <Text style={styles.text}>Weight and BMI</Text>
                            <TouchableOpacity style={styles.iconBack}
                                onPress={() => { navigation.navigate(ROUTES.BodyWeight) }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                        {/* HealthyNutrition*/}<View style={{ ...styles.commonStyle, top: 505, width: 350, height: 100, borderRightWidth: 50, borderTopWidth: 80, borderTopColor: 'gray' }}></View>
                        <View style={{ ...styles.commonStyle, top: 507, width: 347, height: 100, borderRightWidth: 47, borderTopWidth: 75, borderTopColor: 'white' }}></View>
                        <View style={{ ...styles.commonStyle, top: 500, width: 130, borderRightWidth: 50, borderTopWidth: 90, borderTopColor: '#CFD230' }}>
                            <Image source={require("../../assets/icons/healthyFood.png")} style={styles.iconRight}></Image>
                            <Text style={styles.text}>Healthy Nutrition</Text>
                            <TouchableOpacity style={styles.iconBack}
                                onPress={() => { navigation.navigate(ROUTES.HealthyFood) }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default Details;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
    },
    triangleCorner: {
        position: 'absolute',
        top: 55,
        left: 0,
        width: 350,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: 'gray'
    },
    triangleCorner1: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: 130,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 90,
        borderRightColor: 'transparent',
        borderTopColor: '#8BCEFF'
    },
    triangleCornerLayer: {
        position: 'absolute',
        top: 57,
        left: 0,
        width: 347,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 47,
        borderTopWidth: 75,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
    },
    ScrollView: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center'
    },
    commonStyle: {
        position: 'absolute',
        left: 0,
        borderRightColor: 'transparent',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    image: {
        height: 20,
        width: 20,
    },
    iconRight: {
        height: 40,
        width: 40,
        position: 'relative',
        bottom: 65,
        left: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        position: 'relative',
        bottom: 110,
        left: 120,
    },
    iconBack: {
        position: 'relative',
        bottom: 145,
        left: 260,
    },
});
