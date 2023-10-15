import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Taskbar = () => {
    return (
        <View
            style={{
                backgroundColor: '#F2E9E9',
                flexDirection: 'row',
                marginTop: 20,
                height: 65,
                borderRadius: 32,
                margin: 10,
                alignItems: 'center'
            }}
        >
            <TouchableOpacity
                //home
                activeOpacity={0.9}
                style={{
                    height: 40,
                    width: 98,
                    borderRadius: 43,
                    marginStart: 20,
                    backgroundColor: '#BBF246',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={require('../assets/icons/homepage.png')}
                    style={{
                        height: 32,
                        margin: 5,
                        width: 32,
                    }}
                ></Image>
                <Text style={{
                    fontSize: 13,
                    margin: 4,
                    fontWeight: 'bold'
                }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                // run
                activeOpacity={0.7}
                style={{
                    height: 45,
                    width: 45,
                    margin: 20
                }}
            >
                <Image source={require('../assets/icons/shoe.png')}
                    style={{
                        height: 45,
                        width: 45
                    }}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity
                // instruction
                activeOpacity={0.7}
                style={{
                    height: 45,
                    width: 45,
                    margin: 20,
                    justifyContent: 'center'
                }}
            >
                <Image source={require('../assets/icons/ziplock.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity
                // Me
                activeOpacity={0.7}
                style={{
                    height: 45,
                    width: 45,
                    margin: 20,
                    justifyContent: 'center'
                }}
            >
                <Image source={require('../assets/icons/settings.png')}
                    style={{
                        height: 30,
                        width: 30,
                    }}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}
export default Taskbar;