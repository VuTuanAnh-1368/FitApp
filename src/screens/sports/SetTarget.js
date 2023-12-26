import React, { useState, useRef } from "react";
import { View, Image, Dimensions, TouchableOpacity, StyleSheet, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from "../../../constants";


const SetTarget = () => {
    const navigation = useNavigation();
    const [currentScreen, setCurrentScreen] = useState(1);
    const [kilometer, setKilometer] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedKm, setSelectedKm] = useState(null);
    const [scollViewHeight, setScrollViewHeight] = useState(0);
    const handleClick = () => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1);
        }
    }
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    let kmArray = [];
    for (let i = 1; i <= 48; i += 1) {
        kmArray.push(i);
    }
    const handleKmPress = (km) => {
        setSelectedKm(km);
        setKilometer(km);
    };

    const screens = [
        <>
            <View>
                <View style={styles.box1Distance}>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}>{kilometer.toFixed(2)}
                            <Text style={{ color: '#d1d1d1', fontSize: 14, }}> Kilometer</Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        <View style={styles.ovalButton}>
                            <Text>Customize</Text>
                        </View>
                    </TouchableOpacity>
                    <Modal isVisible={isModalVisible} style={styles.modalBox}>
                        <ScrollView
                            onLayout={(event) => {
                                var { height } = event.nativeEvent.layout;
                                setScrollViewHeight(height);
                            }}
                            style={{
                                marginTop: 12,
                                backgroundColor: '#ccc',
                            }}
                        >
                            {kmArray.map((km, index) => {
                                const isSelected = selectedKm === km;
                                return (
                                    <TouchableWithoutFeedback
                                        key={index}
                                        onPress={() => handleKmPress(km)}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: 60,
                                                fontWeight: isSelected ? 'bold' : 400,
                                                backgroundColor: isSelected ? '#81ACFF' : '#ccc',
                                            }}
                                        >
                                            <Text>{km.toFixed(2)}</Text>
                                            {isSelected && <Text> Km</Text>}
                                        </View>
                                    </TouchableWithoutFeedback>
                                );
                            })}
                        </ScrollView>
                        <TouchableOpacity
                            onPress={toggleModal}>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center', height: 50,
                                backgroundColor: '#81acff',
                            }}>

                                <Text>Start exerciting</Text>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </View >
        </>,

        <>
            <View></View>
        </>,
        <>

        </>
    ]

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SPORT_TAB)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -120,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View><Text style={styles.headerText}>Set Target</Text></View>

            </View>
            <View style={styles.rowView}>
                <View style={[styles.currentBox, { borderColor: currentScreen === 1 ? "#81acff" : "transparent" }]}>
                    <Text>Distance</Text>
                </View>
                <View style={[styles.currentBox, { borderColor: currentScreen === 2 ? "#81acff" : "transparent" }]}>
                    <Text>Duration</Text>
                </View>
                <View style={[styles.currentBox, { borderColor: currentScreen === 3 ? "#81acff" : "transparent" }]}>
                    <Text>Heat</Text>
                </View>

            </View>
            <View style={styles.mainScreen}>
                {
                    screens[currentScreen - 1]
                }
            </View>
            <TouchableOpacity
                onPress={handleClick}>
                <View style={styles.next}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default SetTarget;

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
    rowView: {
        //    backgroundColor: 'green',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    mainScreen: {
        flex: 1,
        //    backgroundColor: 'violet',
        marginTop: 10,
    },
    currentBox: {
        height: 50,
        width: 80,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
    },
    box1Distance: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        //    backgroundColor: 'orange',
        borderBottomWidth: 2,
        borderColor: '#d1d1d1',
    },
    ovalButton: {
        height: 45,
        width: 175,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'black'
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
    modalBox: {
        flex: 0.8,
        //    backgroundColor: 'red',
    },

})