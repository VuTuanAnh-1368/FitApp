import React from "react"
import { Text, View, Image, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Donutchart from "../../components/Donutchart"
import LinearGradient from "react-native-linear-gradient"
import Baarchart from "../../components/Baarchart"
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Taskbar from "../../components/Taskbar"


const dataHeart = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", ""],    // Label của trục x trong cái Barchat, nhưng ko có label nên để rỗng
    datasets: [
        {
            data: [87, 89, 90, 92, 60, 77, 70, 43, 50, 70, 88, 90]   // dữ liệu demo.
        }
    ]
};


const Home = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentTime = new Date();
    currentTime.setUTCHours(currentTime.getUTCHours());
    const year = currentTime.getFullYear();     // năm
    const month = currentTime.getMonth();      // tháng
    const dayOfmonth = currentTime.getDate();  // ngày trong tháng
    const day = currentTime.getDay();          // Thứ trong tuần, nhưng tra ve cac gia tri 0-6
    const dayName = daysOfWeek[day];           // Chuyen tu du lieu số sang thứ trong tuần
    const monthName = monthsOfYear[month];
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#FDEEEE'
            }}>
            <ImageBackground
                source={require("../../assets/images/Layer1.png")}>
                <View
                    // cai tren cung
                    style={{
                        height: 80,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={require('../../assets/icons/avatar.png')}
                        style={{
                            borderRadius: 30,
                            width: 60,
                            height: 60,
                            marginStart: 5
                        }}
                    ></Image>
                    <View
                        //Lấy thành công dữ liệu ngày tháng current
                        style={{
                            flexDirection: 'column',
                            marginStart: 10,
                            marginEnd: 20
                        }}>
                        <Text
                            style={{
                                color: '#7F7F7F',
                                fontSize: 14
                            }}>Hello!</Text>
                        <Text
                            style={{
                                color: '#000000',
                                fontSize: 18
                            }}>{dayName}, {dayOfmonth} {monthName}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}>
                        <Image
                            //tuy tinh hinh thoi tiet ma lay anh thich hop
                            source={require('../../assets/icons/cloudy.png')}
                            style={{
                                margin: 20,
                                height: 50,
                                width: 50,
                                marginLeft: 50
                            }}></Image>
                    </TouchableOpacity>
                </View>
                <View
                    //cai duoi xep theo hang, 1 cai ben trai 1 cai ben phai, trong moi cai lai co 2 cai chia theo cot
                    style={{
                        flexDirection: 'row',
                        //flex:0.66,
                        height: 405,
                        marginLeft: 5,
                        // backgroundColor:'yellow'
                    }}>
                    <View
                        // ben trai
                        style={{
                            //   flex:0.6,
                            flexDirection: 'column'
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.7}    // do trong cua cai nut, neu = 1 thi an nut ko bi mo
                            //Goc tren ben trai
                            style={{
                                width: 180,
                                height: 230,
                                backgroundColor: '#DCC8C8',
                                borderRadius: 20,
                                margin: 5,
                            }}>
                            <View
                                style={{
                                    width: 180,
                                    height: 75,
                                    flexDirection: 'row'
                                }}>
                                <Text
                                    style={styles.title}
                                >Steps</Text>
                                <View
                                    style={styles.smallcircle}
                                >
                                    <Image source={require('../../assets/icons/jogging.png')}
                                        style={styles.icon}
                                    ></Image>
                                </View>
                            </View>
                            <Donutchart radius={60} target={7500} spent={4200} text="Steps" colorTarget='#FB3535' colorAmount="#483867" strokeTarget="15" strokeAmount="15" colorText='#483867' fontText={12} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            // goc duoi ben trai
                            style={{
                                width: 180,
                                height: 155,
                                borderRadius: 15,
                                backgroundColor: '#F3BDBD',
                                margin: 5
                            }}>
                            <View
                                style={{
                                    width: 180,
                                    height: 70,
                                    flexDirection: 'row'
                                }}>
                                <Text
                                    style={styles.title}
                                >Heart</Text>
                                <View
                                    style={styles.smallcircle}
                                >
                                    <Image source={require('../../assets/icons/heart-attack.png')}
                                        style={{
                                            width: 35,
                                            height: 35,
                                            marginTop: 11,
                                            marginStart: 8
                                        }}
                                    ></Image>
                                </View>
                            </View>
                            <Baarchart data={dataHeart} height={80} width={150} backgroundColor="#F3BDBD" Opacity={0} barPercentage={0.2} grid={false}></Baarchart>
                        </TouchableOpacity>

                    </View>
                    <View
                        // ben phai
                        style={{
                        }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                        // ben phai goc tren
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3E3254', '#425DB2', '#3D78EA']}
                                style={{
                                    borderRadius: 15,
                                    width: 180,
                                    margin: 5,
                                    height: 180
                                }}
                            >

                                <View
                                    style={{
                                        width: 180,
                                        height: 75,
                                        flexDirection: 'row'
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            color: '#FFFFFF',
                                            marginTop: 20,
                                            marginStart: 15,
                                        }}
                                    >Sleep</Text>
                                    <View
                                        style={styles.smallcircle}
                                    >
                                        <Image source={require('../../assets/icons/moon.png')}
                                            style={styles.icon}
                                        ></Image>
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        color: 'white',
                                        marginLeft: 10,
                                        marginTop: 35
                                    }}
                                >8:00h</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            // Ben phai goc duoi
                            style={{
                                width: 180,
                                margin: 5,
                                height: 210,
                                borderRadius: 15,
                                backgroundColor: '#AFFF9B'
                            }}>
                            <View
                                style={{
                                    width: 180,
                                    height: 75,
                                    flexDirection: 'row'
                                }}>
                                <Text
                                    style={styles.title}
                                >Kcals</Text>
                                <View
                                    style={styles.smallcircle}
                                >
                                    <Image source={require('../../assets/icons/kcal.png')}
                                        style={styles.icon}
                                    ></Image>
                                </View>
                            </View>
                            <Donutchart radius={50} target={500} spent={375} text="Kcals" colorTarget='#D9D9D9' colorAmount="#63665A" strokeTarget="15" strokeAmount="15" colorText='#63665A' fontText={12} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    //dong video vs see all
                    style={{
                        flexDirection: 'row',
                        marginTop: 15,

                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                            marginStart: 12,
                            fontWeight: "bold",
                        }}>Video</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                marginStart: 287,
                                color: 'red',
                                fontWeight: 'bold'
                            }}>See All</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#F2E9E9',
                        marginTop: 10,
                        marginStart: 10,
                        marginEnd: 10,
                        height: 65,
                        borderRadius: 15,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={require('../../assets/images/flag.jpg')}
                        style={{
                            margin: 5,
                            height: 55,
                            width: 55,
                            borderRadius: 15
                        }}>
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
                                style={{
                                    borderRadius: 30,
                                    width: 65,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}>
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
                                style={{
                                    borderRadius: 30,
                                    width: 85,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}
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
                            style={{
                                fontSize: 14,
                                color: 'black',
                                marginLeft: 25,
                                marginTop: 5,
                                fontWeight: 'bold',
                            }}>Quốc Ca Việt Nam</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'black',
                                marginLeft: 25,
                            }}>Văn Cao</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
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

                <View   // cai thu 2
                    style={{
                        backgroundColor: '#F2E9E9',
                        marginTop: 10,
                        marginStart: 10,
                        marginEnd: 10,
                        height: 65,
                        borderRadius: 15,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={require('../../assets/images/Partly.jpg')}
                        style={{
                            margin: 5,
                            height: 55,
                            width: 55,
                            borderRadius: 15
                        }}>
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
                                style={{
                                    borderRadius: 30,
                                    width: 65,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}>
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
                                style={{
                                    borderRadius: 30,
                                    width: 85,
                                    marginLeft: 40,
                                    backgroundColor: '#A5FAFF',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 5,
                                }}
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
                            style={{
                                fontSize: 14,
                                color: 'black',
                                marginLeft: 25,
                                marginTop: 5,
                                fontWeight: 'bold',
                            }}>Quốc Tế Ca</Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: 'black',
                                marginLeft: 25,
                            }}>Liên bang Xô Viết</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
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
                <Taskbar></Taskbar>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Home

const styles = StyleSheet.create({
    icon: {
        height: 35,
        width: 35,
        marginLeft: 9,
        marginTop: 8,
    },
    title: {
        fontSize: 24,
        color: 'black',
        marginTop: 20,
        marginStart: 15,
    },
    smallcircle: {
        backgroundColor: '#483867',
        marginStart: 50,
        marginTop: 15,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    music: {

    },
})