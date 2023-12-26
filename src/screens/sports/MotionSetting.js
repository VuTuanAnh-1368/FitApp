import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchButton from '../../components/Switch';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

const MotionSetting = () => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.Header}>
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
                <View style={{}}><Text style={style.headerText}>Motion setting</Text></View>
            </View>
            <View style={{ height: 140, }}>
                <View style={style.boxView}>
                    <View style={style.inforView}>
                        <Text style={style.textInfor}>Voice broadcast</Text>
                    </View>
                    <View style={style.togglebox}>
                        <SwitchButton></SwitchButton>
                    </View>
                </View>
                <View style={style.boxView}>
                    <View style={[style.inforView]}>
                        <View style={style.halfbox}>
                            <Text style={style.textInfor}>Broadcast frequency</Text>
                        </View>
                        <Text style={style.smalltext}>How long is the interval?</Text>
                    </View>
                    <View style={[style.togglebox, { flexDirection: 'row' }]}>
                        <View style={{ width: 60 }}>
                            <Text style={style.smalltext}>1 km</Text>
                        </View>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name='chevron-right' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={style.secondBox}>
                <View style={{ height: 50, backgroundColor: 'white', borderBottomWidth: 1, borderColor: "#9d9d9d", justifyContent: 'center' }}>
                    <Text style={[style.smalltext, { fontSize: 14, }]}>Broadcast content</Text>
                </View>
                <View style={style.boxView}>
                    <View style={style.inforView}>
                        <Text style={style.textInfor}>Distance</Text>
                    </View>
                    <View style={style.togglebox}>
                        <SwitchButton></SwitchButton>
                    </View>
                </View>
                <View style={style.boxView}>
                    <View style={style.inforView}>
                        <Text style={style.textInfor}>Duration</Text>
                    </View>
                    <View style={style.togglebox}>
                        <SwitchButton></SwitchButton>
                    </View>
                </View>
                <View style={style.boxView}>
                    <View style={[style.inforView]}>
                        <View style={style.halfbox}>
                            <Text style={style.textInfor}>Heart rate</Text>
                        </View>
                        <Text style={style.smalltext}>Need to wear and connect devices that support step counting</Text>
                    </View>
                    <View style={[style.togglebox, { flexDirection: 'row' }]}>
                        <SwitchButton></SwitchButton>
                    </View>
                </View>
            </View>
            <View style={[style.boxView, { marginTop: 10, }]}>
                <View style={[style.inforView]}>
                    <View style={[style.halfbox, { height: 45 }]}>
                        <Text style={style.textInfor}>Heart rate warning</Text>
                    </View>
                    <Text style={[style.smalltext, { marginTop: -15 }]}>Heart rate reaches the warning value during exercise, equipment vibration reminder</Text>
                </View>
                <View style={[style.togglebox, { flexDirection: 'row' }]}>
                    <SwitchButton></SwitchButton>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 10, backgroundColor: 'white', alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={style.bigButton}>
                        <Text style={[style.textInfor, { color: 'white' }]}>Audition</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default MotionSetting;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
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
    boxView: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'white',


    },
    inforView: {
        width: 300,
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderColor: '#d1d1d1',
        borderBottomWidth: 1,


    },
    togglebox: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#d1d1d1',
        borderBottomWidth: 1,

    },
    textInfor: {
        fontSize: 18,
        color: "black",
        padding: 10,
    },
    smalltext: {
        fontSize: 14,
        color: '#D1D1D1',
        marginTop: -5,
        paddingLeft: 10,
    },
    halfbox: {
        height: 40,
        backgroundColor: 'transparent',
        //    marginBottom: 30,
    },
    secondBox: {
        height: 260,
        marginTop: 10,
        backgroundColor: 'white',
    },
    bigButton: {
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81acff',
        borderRadius: 25,
        marginTop: 20,
    }

})
