import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { List, Title, Appbar } from 'react-native-paper';
import MapView, { Polyline, Marker } from 'react-native-maps';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ROUTES } from '../../../constants';
import { useNavigation } from "@react-navigation/native";

import api from '../../api';
import utils from '../../utils';
import moment from 'moment';
import * as geolib from 'geolib';

const History = () => {
    const navigation = useNavigation();
    const [walklist, setWalklist] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [walkinfo, setWalkinfo] = useState([]);
    const [selectedWalkIndex, setSelectedWalkIndex] = useState(-1);
    const mapRef = useRef();

    const urlSource = "https://bit.ly/3vjOhiJ";
    const isOnline = false;

    // const mockData = [
    //     { distance: 1000, duration: 620, 0: 1.5, gps0: [{ latitude: 37.78825, longitude: -122.4324, timestamp: "2023-01-01T12:00:00" }] },
    //     { distance: 1200, duration: 100, speed: 1.5, gps: [{ latitude: 21.041262, longitude: 105.777878, timestamp: "2023-01-01T12:00:00" }] },
    //     { distance: 7600, duration: 300, speed: 1.5, gps: [{ latitude: 21.028689, longitude: 105.808214, timestamp: "2023-01-01T12:00:00" }] },
    //     { distance: 1200, duration: 350, speed: 1.5, gps: [{ latitude: 21.062709, longitude: 105.360341, timestamp: "2023-01-01T12:00:00" }] },
    //     // Thêm các phần tử khác nếu cần
    // ];

    useEffect(() => {
        // setWalklist(mockData);

        const loadData = async () => {
            const userId = await utils.AsyncStorage.getItem('user_id')

            api.MapAPI.handleGetAllSportHistory({
                'objectId': userId
            }).then(response => {
                // console.log(response.data.historySport)
                if (response.data.success == true) {
                    if (response.data.historySport) {
                        const data = response.data.historySport
                        const allData = []
                        // console.log(data)
                        for (i = 0; i < data.length; i++) {
                            const timeStart = data[i].timeStart
                            const timeEnd = data[i].timeEnd
                            const latitude = data[i].latitude
                            const longitude = data[i].longitude
                            const timestamp = data[i].timestamp
                            const mock = []
                            for (j = 0; j < latitude.length; j++) {
                                const currentLatitude = latitude[j]
                                const currentLongitude = longitude[j]
                                mock.push({
                                    latitude: currentLatitude,
                                    longitude: currentLongitude,
                                    timestamp: timestamp[j]
                                })
                            }
                            allData.push({
                                timeStart: timeStart,
                                timeEnd: timeEnd,
                                gps: mock
                            })
                        }
                        // console.log(allData)
                        setWalklist(allData)
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        }
        loadData()
    }, []);
    // console.log(walklist)
    const convertToDate = (timestamp) => {
        const momentObject = moment.utc(timestamp);
        momentObject.utcOffset('+07:00');
        // Chuyển đổi đối tượng Moment thành định dạng dd/MM/yyyy HH:mm
        const formattedDateTime = momentObject.format('DD/MM/YYYY HH:mm:ss');
        return formattedDateTime
    }
    const calculateDistance = (coordinates) => {
        const distance = geolib.getPathLength(coordinates);
        return distance

    }
    // console.log(walklist)
    const renderItem = ({ item, index }) => {
        const borderColor = (index === selectedWalkIndex) ? "orange" : "gray";
        const walkDistance = calculateDistance(item.gps).toFixed(2);
        // console.log(walkDistance)
        // const walkDuration = (item.duration / 60).toFixed(2);
        // const walkSpeed = item.speed.toFixed(2);


        const timeStart = parseInt(item.timeStart)
        const timeEnd = parseInt(item.timeEnd)
        const DateStart = convertToDate(timeStart)
        const DateEnd = convertToDate(timeEnd)
        return (
            <List.Item
                style={[styles.listitem, { borderColor }]}
                title={`Walk #${index + 1} Distance: ${walkDistance}m`}
                description={`Time start: ${DateStart} \nTime end: ${DateEnd}`}
                left={props => <List.Icon {...props} icon="walk" style={styles.icon} />}
                onPress={() => {
                    const newWalkinfo = item.gps.map(e => ({ latitude: e.latitude, longitude: e.longitude, timestamp: e.timestamp }));
                    setWalkinfo(newWalkinfo);
                    mapRef.current.fitToCoordinates(newWalkinfo);
                    setSelectedWalkIndex(index);
                }}
            />
        );
    };
    // console.log(walklist[0])
    return (
        <View style={styles.mainView}>
            <View style={styles.infoView}>
                <Appbar.Header>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.SPORT_TAB)
                        }}
                    >
                        <MaterialCommunityIcon name='chevron-left' size={37}></MaterialCommunityIcon>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>History walking</Text>
                </Appbar.Header>
                <MapView
                    ref={mapRef}
                    style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Polyline
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
                    }
                </MapView>
            </View>
            {
                walklist.length == 0
                    ?
                    <></>
                    :
                    <View style={styles.walklistView}>
                        <Title style={styles.title}>
                            Walk List ({walklist.length})
                        </Title>
                        <FlatList
                            data={walklist}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={refreshing}
                            onRefresh={() => {
                                setRefreshing(true);
                                // Thêm logic cập nhật dữ liệu ở đây
                                setRefreshing(false);
                            }}
                        />
                    </View>
            }
        </View>
    );
};

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
        margin: 6
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        color: "#6200ee"
    },
    icon: {
        borderRadius: 24,
        backgroundColor: "gray",
        height: 48,
        width: 48,
        marginLeft: 15,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 72,
    },

});

export default History;