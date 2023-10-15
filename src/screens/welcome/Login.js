import React, { useState, useEffect } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, InputField, Alert, ActivityIndicator } from "react-native";
import { COLORS, APP_NAME } from '../../../constants/index';
// import Icon from '../../android/app/src/main/assets/fonts/FontAwesome.ttf'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';


import { userGetCaptcha, userLogin, userLoginFacebook } from "../../api/UserAPI.js";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import Home from "../home/Home.js";
import Timer from "../../components/Timer";
import { LoginManager, Profile, GraphRequest, GraphRequestManager } from 'react-native-fbsdk-next';




const Login = () => {
    const navigation = useNavigation();
    const [isTextInputEmailFocused, setIsTextInputEmailFocused] = useState(false);
    const [isTextInputCaptchaFocused, setIsTextInputCaptchaFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [isClickCaptcha, setIsClickCaptcha] = useState(false)
    const [loadingLogin, setLoadingLogin] = useState(false);


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const handleGetCaptcha = () => {
        if (!validateEmail(email)) {
            Alert.alert('Lỗi email', 'Vui lòng nhập đúng đinh dạng email');
            return;
        } else {
            setIsClickCaptcha(true);
            userGetCaptcha({
                "email": email
            }).then(async (result) => {
                // console.log(result);
                if (result.data.status === 200) {
                    console.log("Captcha đã được xử lý thành công!");
                    // viết logic để chuyển giao diện
                }

            })
                .catch(err => {
                    console.log(err)
                })
        }

    };
    const handleLoginFacebook = async () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    const currentProfile = Profile.getCurrentProfile();
                    currentProfile.then((profile) => {
                        if (profile) {
                            console.log("The current logged user is: " +
                                profile.name
                                + ". His profile id is: " +
                                profile.userID
                            );
                            const emailRequest = new GraphRequest(
                                '/me',
                                {
                                    accessToken: currentProfile.accessToken,
                                    parameters: {
                                        fields: { string: 'email' }
                                    },
                                },
                                (error, result) => {
                                    if (error) {
                                        console.error(error);
                                    } else {
                                        // console.log("Email: " + result.email);
                                        userLoginFacebook({
                                            "email": result.email,
                                            "name": profile.name
                                        }).then(async (result) => {
                                            // console.log(result)
                                            if (result.data.success === true) {
                                                navigation.navigate('Home');
                                            } else {
                                            }
                                        })
                                            .catch(error => {
                                                setLoadingLogin(false)
                                                console.log(error)
                                            })

                                    }
                                }
                            );

                            new GraphRequestManager().addRequest(emailRequest).start();
                        } else {
                            console.log("No current profile found.");
                        }
                    });
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }
    const handleLogin = async () => {
        const captchaRegex = /^\d{6}$/;
        const isCaptchaValid = captchaRegex.test(captchaInput);

        if (validateEmail(email)) {
            // Thực hiện các tác vụ sau khi captcha hợp lệ
            if (isCaptchaValid) {
                setLoadingLogin(true)
                userLogin({
                    "email": email,
                    "captcha": captchaInput
                })
                    .then(async (result) => {
                        if (result.data.status === 200) {
                            setTimeout(() => {
                                setLoadingLogin(false);
                                navigation.navigate('Home');
                            }, 1000);
                        } else {
                            setLoadingLogin(false)
                            alert("Mã captcha sai!");
                        }
                    })
                    .catch(error => {
                        setLoadingLogin(false)
                        console.log(error)
                    })
            } else {
                alert("Captcha không hợp lệ. Vui lòng nhập lại!");
                // Thông báo lỗi cho người dùng hoặc thực hiện các tác vụ khác khi captcha không hợp lệ
            }

        } else {
            alert("email không hợp lệ");
        }
    }
    const handleOnTimerEnd = () => {
        setIsClickCaptcha(false)
    }
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.layoutLogo}>
                <Image
                    source={require('../../assets/logos/logo.png')}
                    style={styles.mainLogo}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxHeight: 80

                }}
            >
                <Text
                    style={{
                        marginBottom: 4,
                        color: COLORS.green,
                        fontSize: 24,
                        fontWeight: 500
                    }} please
                >
                    {APP_NAME.name}
                </Text>

                <Text
                    style={{
                        color: COLORS.grey1
                    }}
                >
                    Please login to your account
                </Text>
            </View>

            <View
                style={{
                    marginTop: 10,
                    paddingHorizontal: 32,
                    paddingEnd: 32
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: isTextInputEmailFocused ? COLORS.green1 : COLORS.grey,
                        borderBottomWidth: 2,
                        marginBottom: 25,
                    }}
                >
                    <MaterialCommunityIcons
                        name={"email-outline"}
                        size={32}
                        color={isTextInputEmailFocused ? COLORS.green : COLORS.grey}
                        style={{
                            marginTop: 4,
                        }}
                    ></MaterialCommunityIcons>
                    <TextInput
                        placeholder="Email address"
                        onFocus={() => setIsTextInputEmailFocused(true)}
                        onBlur={() => setIsTextInputEmailFocused(false)}
                        onChangeText={text => setEmail(text)}
                        style={{
                            flex: 1,
                            paddingVertical: 0,
                            color: COLORS.black,
                            paddingLeft: 5

                        }}
                        placeholderTextColor={COLORS.grey}
                        keyboardType="email-address"
                        editable={!isClickCaptcha}
                    />
                    <View style={{
                        flex: 0.3,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}>
                    </View>
                </View>


                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: isTextInputCaptchaFocused ? COLORS.green1 : COLORS.grey,
                        borderBottomWidth: 2,
                        marginBottom: 25,

                    }}
                >
                    <MaterialCommunityIcons
                        name='lock-outline'
                        size={32}
                        color={isTextInputCaptchaFocused ? COLORS.green : COLORS.grey}
                        style={{
                            marginTop: 4,
                        }}
                    ></MaterialCommunityIcons>
                    <TextInput

                        placeholder="Captcha"
                        onFocus={() => setIsTextInputCaptchaFocused(true)}
                        onBlur={() => setIsTextInputCaptchaFocused(false)}
                        onChangeText={text => setCaptchaInput(text)}
                        style={{
                            flex: 1,
                            paddingVertical: 0,
                            paddingLeft: 5,
                            color: COLORS.black
                        }}
                        placeholderTextColor={COLORS.grey}

                        keyboardType="number-pad"
                    />
                </View>
                {isClickCaptcha ?
                    <View
                        style={{
                            flexDirection: 'row',
                            marginStart: 135,
                            marginBottom: 20
                        }}>
                        <Timer
                            onTimerEnd={handleOnTimerEnd}
                        ></Timer>
                        <TouchableOpacity
                            onPress={() => setIsClickCaptcha(false)}
                            style={{
                                justifyContent: 'center',
                                marginLeft: 66
                            }}>
                            <MaterialIcon
                                style={{
                                    fontSize: 35,
                                    justifyContent: 'center',
                                }}
                                name={'cancel'}
                                color={'#D9D9D9'}
                            ></MaterialIcon>

                        </TouchableOpacity>
                    </View>
                    : <TouchableOpacity
                        onPress={handleGetCaptcha}
                        style={{
                            marginTop: 10,
                            backgroundColor: COLORS.captcha,
                            padding: 10,
                            borderRadius: 30,
                            marginBottom: 27,
                            marginEnd: 46,
                            marginStart: 46,
                            borderColor: COLORS.black,
                            borderWidth: 1
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.black,
                                textTransform: "uppercase",
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "400"

                            }}
                        >
                            get Captcha
                        </Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity
                    onPress={handleLogin}

                    style={{
                        backgroundColor: COLORS.signin,
                        padding: 10,
                        borderRadius: 30,
                        marginBottom: 10,
                        marginEnd: 80,
                        marginStart: 80,

                    }}
                >
                    {loadingLogin && (
                        <View style={styles.spinnerContainer}>
                            <ActivityIndicator size="large" color={COLORS.signin} />
                        </View>
                    )}
                    <Text
                        style={{
                            color: COLORS.black,
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "400"


                        }}
                    >
                        sign in
                    </Text>

                </TouchableOpacity>

                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginLeft: 10,
                        color: COLORS.black29
                    }}
                >Email did not receive verification code?</Text>

                <View style={{
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Text
                        style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginTop: 10,
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        OR SIGN IN WITH
                    </Text>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.green,
                            width: '80%',
                            position: 'absolute',
                            top: '70%',
                            zIndex: 0
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', marginTop: 40
                }}>
                    <TouchableOpacity
                        onPress={handleLoginFacebook}
                    >
                        <Image source={require('../../assets/logos/facebook.png')} />
                    </TouchableOpacity>
                </View>
            </View>



        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: COLORS.white,

    },
    mainLogo: {
        height: 100,
        width: 120,
        marginTop: 40

    },
    layoutLogo: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: 100,
    },
    spinnerContainer: {
        ...StyleSheet.absoluteFillObject, // Để spinner trải dài trên toàn màn hình
        backgroundColor: 'rgba(255,255,255,0.7)', // Để có một nền mờ (tuỳ chọn)
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Login;