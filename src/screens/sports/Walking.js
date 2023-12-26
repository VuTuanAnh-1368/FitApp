import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, PermissionsAndroid, TouchableOpacity, Platform, Dimensions } from 'react-native';
import MapView, { Polyline, Marker, AnimatedRegion } from 'react-native-maps';
import { List, Title, Headline, Text, Appbar } from 'react-native-paper';
import { fetchData, csvrowToJson, parseCsvdata, twoDecimals } from './WalkTrack';
import GetLocation from 'react-native-get-location'
import { COLORS } from '../../../constants';
import { ro } from 'date-fns/locale';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from '../../../constants';
import api from '../../api';
import utils from '../../utils';
const LATITUDE_DELTA = 0.009
console.error = function () { };

const LONGITUDE_DELTA = 0.009
export default function Walking() {
    const navigation = useNavigation();

    const [PGranted, setPGranted] = React.useState();

    const [walklist, setWalklist] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [walkinfo, setWalkinfo] = React.useState([]);
    const [minThreshold, setMinThreshold] = React.useState(10);
    const [selectedWalkIndex, setSelectedWalkIndex] = React.useState(-1);
    const [currentLatitude, setCurrentLatitude] = React.useState(null);
    const [currentLongitude, setCurrentLongitude] = React.useState(null);

    const [routeCoordinates, setRouteCoordinates] = React.useState([])
    const [timeStart, setTimeStart] = useState(null)
    const [timeEnd, setTimeEnd] = useState(null)
    const [userId, setUserId] = useState(null)

    const urlSource = "https://bit.ly/3vjOhiJ";
    const mapRef = React.useRef();
    const marker = React.useRef();

    const pullData = async (url) => {
        await setRefreshing(true);
        const csvdata = await fetchData(url);
        if (!csvdata) {
            await setRefreshing(false);
            return false;
        }
        const parsedWalks = await parseCsvdata(csvdata, minThreshold);
        await setWalklist(parsedWalks);
        await setRefreshing(false);
        return true;
    };
    async function checkLocationPermission() {
        let granted = await getLocationPermission();
        setPGranted(granted)
        if (granted) {
            await getCurrentPosition();
        }
    }
    async function getCurrentPosition() {
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000
        })
            .then((location) => {
                setCurrentLatitude(location?.latitude)
                setCurrentLongitude(location?.longitude)
                const { latitude, longitude, time } = location
                const timestamp = new Date().getTime()
                let coordinate = {
                    latitude: latitude, longitude: longitude, timestamp: timestamp
                }
                setRouteCoordinates(prevCoordinates => [...prevCoordinates, coordinate]);

            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }
    async function getLocationPermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).catch(err => console.log(err))
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }

    React.useEffect(async () => {
        let userId = await utils.AsyncStorage.getItem('user_id');
        setUserId(userId)

        const time = new Date()
        const timestamp = time.getTime()
        setTimeStart(timestamp)
        checkLocationPermission();
        // pullData(urlSource); 
        const intervalGetLocation = setInterval(async () => {
            await getCurrentPosition();
        }, 10000)
        return () => clearInterval(intervalGetLocation)

    }, []);



    // render History of Walk track
    const renderItem = ({ item, index }) => {
        const borderColor = (index === selectedWalkIndex) ? "green" : "gray";
        return (
            <View>
                <List.Item
                    style={[styles.listitem, { borderColor }]}
                    title={`Walk #${index + 1} - Distance: ${item.distance}m`}
                    description={
                        `Dur: ${twoDecimals(item.duration / 60)}mins - ` +
                        `Avg Spd: ${twoDecimals(item.speed)}m/sec`}
                    left={props => <List.Icon {...props} icon="walk" style={styles.icon} />}
                    onPress={() => {
                        const newWalkinfo = item.gps.map(e => { return { latitude: e.latitude, longitude: e.longitude, timestamp: e.timestamp } })
                        setWalkinfo(newWalkinfo);
                        mapRef.current.fitToCoordinates(newWalkinfo);
                        setSelectedWalkIndex(index);
                        // print current walk info on console
                        // console.log(`Walk #${index + 1} Distance: ${item.distance}m `+
                        //   `Duration: ${twoDecimals(item.duration / 60)}mins `+
                        //   `Avg Spd: ${twoDecimals(item.speed)}m/sec`);

                    }}
                />
            </View>
        );
    };
    React.useEffect(() => {
        // Kiểm tra xem cả hai giá trị có tồn tại không
        if (currentLatitude !== null && currentLongitude !== null && mapRef.current) {
            // Nếu có, cập nhật region của bản đồ
            mapRef.current.animateToRegion({
                latitude: currentLatitude,
                longitude: currentLongitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }, 500); // Thời gian (milliseconds) để thực hiện animation đến vùng mới
            marker.current.animateMarkerToCoordinate({ latitude: currentLatitude, longitude: currentLongitude }, 500)
        }
    }, [currentLatitude, currentLongitude]);

    const [isButtonPressed, setButtonPressed] = useState(false);
    const pressTimeout = useRef(null);

    const handleButtonPress = () => {
        setButtonPressed(true);
        pressTimeout.current = setTimeout(() => {
            const timestamp = new Date().getTime()
            var timestamps = []
            var latitudes = [];
            var longitudes = [];
            for (var i = 0; i < routeCoordinates.length; i++) {
                latitudes.push(routeCoordinates[i].latitude);
                longitudes.push(routeCoordinates[i].longitude);
                timestamps.push(routeCoordinates[i].timestamp)
            }

            api.MapAPI.handlePostSportHistory({
                'objectId': userId,
                'timeStart': timeStart,
                'timeEnd': timestamp,
                'latitude': latitudes,
                'longitude': longitudes,
                'timestamp': timestamps
            }).then(response => {

            }).catch(err => {
                console.log(err)
            })

            console.log(routeCoordinates)
            navigation.navigate(ROUTES.SPORT_TAB)
            // Xử lý logic sau khi giữ nút trong 2 giây
            console.log('2s rồi');
        }, 2000);
    };

    const handleButtonRelease = () => {
        setButtonPressed(false);
        // Hủy timeout nếu nút được thả ra trước khi hết 2 giây
        clearTimeout(pressTimeout.current);
    };
    return (
        <View style={styles.mainView}>
            {
                PGranted !== undefined
                    ?
                    <>
                        <View style={styles.infoView}>

                            <MapView
                                ref={mapRef}
                                style={styles.mapView}
                                initialRegion={{
                                    latitude: 37.4226711,
                                    longitude: -122.0849872,
                                    latitudeDelta: LATITUDE_DELTA,
                                    longitudeDelta: LONGITUDE_DELTA,
                                }}
                            >
                                <Polyline
                                    coordinates={routeCoordinates}
                                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                                    strokeColors={[
                                        '#7F0000',
                                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                                        '#B24112',
                                        '#E5845C',
                                        '#238C23',
                                        '#7F0000',
                                    ]}
                                    lineDashPattern={[3, 1, 3, 1]}
                                    strokeWidth={6}
                                />

                                {
                                    routeCoordinates.length > 0 && (
                                        <>
                                            <Marker
                                                coordinate={{
                                                    latitude: routeCoordinates[0].latitude,
                                                    longitude: routeCoordinates[0].longitude,
                                                }}
                                                title="Điểm đầu"
                                                pinColor='red'
                                            />

                                        </>


                                    )
                                }
                                <Marker.Animated
                                    ref={marker}
                                    coordinate={
                                        {
                                            latitude: 0,
                                            longitude: 0
                                        }
                                    }
                                    title="Điểm cuối"
                                    pinColor="green"

                                />


                                {/* <Polyline
                                    coordinates={walkinfo}
                                    strokeColor="#8E94F2"
                                    strokeWidth={6}
                                    lineDashPattern={[3, 1, 3, 1]}
                                />
                                {walkinfo.length > 0 &&
                                    <>
                                        <Marker
                                            title={`Start: ${walkinfo[0].timestamp}`}
                                            pinColor="green"
                                            coordinate={walkinfo[0]}
                                        />
                                        <Marker
                                            title={`Stop: ${walkinfo[walkinfo.length - 1].timestamp}`}
                                            pinColor="blue"
                                            coordinate={walkinfo[walkinfo.length - 1]}
                                        />
                                    </>
                                } */}
                            </MapView>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPressIn={handleButtonPress}
                                onPressOut={handleButtonRelease}
                            >
                                <View
                                    style={{
                                        height: 80,
                                        width: 80,
                                        borderRadius: 40,
                                        backgroundColor: '#B04131',
                                        pointerEvents: 'box-only',
                                        position: 'absolute',
                                        bottom: 50,
                                        left: (Dimensions.get("window").width / 2) - 40,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{
                                        fontSize: 28,
                                        color: "white",
                                    }}>STOP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.walklistView}>
                            <Title style={styles.title}>
                                Walk List ({walklist.length})
                            </Title>
                            <FlatList
                                data={walklist}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index}
                                refreshing={refreshing}
                                onRefresh={() => {
                                    pullData(urlSource)
                                }}
                            />
                        </View> */}

                    </>

                    :
                    <>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Require Location PermissionsAndroid...</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => checkLocationPermission()}
                                style={{
                                    width: 90, height: 40,
                                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                    backgroundColor: 'rgba(185, 175, 245, 1)',
                                    borderRadius: 30, marginRight: 30

                                }}>
                                <Text style={{ color: COLORS.bgWhite(1), fontWeight: 600, fontSize: 16 }}>Allow</Text>
                            </TouchableOpacity>
                        </View>
                    </>
            }
        </View >
    );
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    infoView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    mapView: {
        flex: 1,
    },
    walklistView: {
        flex: 1,
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 10
    },
    listitem: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: 36,
        margin: 4
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        color: "#6200ee"
    },
    icon: {
        marginHorizontal: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: "#ccc"
    }
});