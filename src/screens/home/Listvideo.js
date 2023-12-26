import React from "react";
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, Linking } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";

//Url cac video
const video1Url = "https://www.youtube.com/watch?v=_kGESn8ArrU";
const video2Url = "https://www.youtube.com/watch?v=_FbwddBgCL4";
const video3Url = "https://www.youtube.com/watch?v=brFHyOtTwH4";
const video4Url = "https://www.youtube.com/watch?v=VT7LTO47XrI";
const video5Url = "https://www.youtube.com/watch?v=B9ie7aRTCnE";
const video6Url = "https://www.youtube.com/watch?v=tgfAOOGr9vM";
const video7Url = "https://www.youtube.com/watch?v=BQu26ABuVS0";
const video8Url = "https://www.youtube.com/watch?v=Ie6nz5fmXYY";
const video9Url = "https://www.youtube.com/watch?v=j7rKKpwdXNE";
const video10Url = "https://www.youtube.com/watch?v=SwDe1e7Pz60";
const video11Url = "https://www.youtube.com/watch?v=CP9n_Hm4FCE";

// Chay video tren trinh duyet 
const openYouTube = async (videoUrl) => {
    try {
        const response = await axios.get(videoUrl);
        if (response.status === 200) {
            const url = response.request.responseURL;
            if (url) {
                return Linking.openURL(url);
            }
        }
    } catch (error) {
        console.error(error);
    }
};
const Listvideo = () => {
    const navigation = useNavigation();

    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    return (
        <SafeAreaView>
            <ImageBackground
                source={require("../../assets/images/Layer1.png")}
                style={{
                    height: hei,
                    width: wi,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: hei / 14,
                        width: wi,
                        alignItems: 'center',
                        //    backgroundColor: 'yellow'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.HOME_TAB)
                        }}
                    >
                        <Entypo
                            name='chevron-left'
                            size={34}></Entypo>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            marginLeft: 5,
                        }}>Practice videos</Text>
                </View>
                <ScrollView>
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            marginTop: 5,
                            marginBottom: 5,
                            marginStart: 10,
                            marginEnd: 10,
                            height: 65,
                            borderRadius: 15,
                            flexDirection: 'row',
                        }}>
                        <Image
                            source={require('../../assets/images/runVideo.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>How to Run Correctly</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video1Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/runVideo2.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>Video Make You A Faster Runner!</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video2Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/runVideo3.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>What Is Perfect Running Form?</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video3Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/runVideo4.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>Common Running Mistakes</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video4Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/runVideo5.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>How To Breathe While Running</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video5Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/runVideo6.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>6 Tips To Run Smoother!</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>Global Triathlon Network</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video6Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/plankVideo1.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>Plank properly for beginners</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>
                                WaysAndHow</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video7Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/gym1.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>exercises help you lose excess fat</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>WORKOUT</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video8Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/yogaVideo.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>
                                10 Minute Yoga for Beginners</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>
                                Yoga With Adriene</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video9Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/pushup.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>25 types of Push Ups at home</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>WORKOUT</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video10Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.box}>
                        <Image
                            source={require('../../assets/images/gym2.png')}
                            style={styles.videoImage}>
                        </Image>
                        <View
                            style={{
                                width: 250,
                            }}>
                            <View style={{
                                height: 20,
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonStar}>
                                    <Image
                                        source={require('../../assets/icons/star.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 15,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>4.8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonCrown}
                                >
                                    <Image
                                        source={require('../../assets/icons/crown.png')}
                                        style={{
                                            height: 12,
                                            width: 12,
                                            marginLeft: 10,
                                        }}></Image>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            marginLeft: 5,
                                            color: 'black',
                                        }}>Premium</Text>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={styles.viedeoName}>5 Min At Home Workout</Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: 'black',
                                    marginLeft: 25,
                                }}>GYM BODY MOTIVATION</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => await openYouTube(video11Url)}
                            style={{
                                height: 50,
                                width: 50,
                            }}>
                            <FontAwesome6
                                name="circle-play"
                                size={32}
                                style={{
                                    marginTop: 15,
                                    marginLeft: 13,
                                }}></FontAwesome6>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </ImageBackground>
        </SafeAreaView>
    )
}
export default Listvideo

const styles = StyleSheet.create({
    buttonCrown: {
        borderRadius: 30,
        width: 85,
        marginLeft: 40,
        backgroundColor: '#A5FAFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    buttonStar: {
        borderRadius: 30,
        width: 65,
        marginLeft: 40,
        backgroundColor: '#A5FAFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    box: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        marginBottom: 5,
        marginStart: 10,
        marginEnd: 10,
        height: 65,
        borderRadius: 15,
        flexDirection: 'row',
    },
    videoImage: {
        margin: 5,
        height: 55,
        width: 55,
        borderRadius: 15
    },
    viedeoName: {
        fontSize: 14,
        color: 'black',
        marginLeft: 25,
        marginTop: 5,
        fontWeight: 'bold',
    }
})