import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, ImageBackground, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { COLORS, ROUTES } from "../../../constants";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { alignContent } from "react-native-wind/dist/styles/flex/align-content";
import CalendarPickerButton from "../../components/CalendarPickerButton";
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from "@react-navigation/native";
import api from "../../api";
import utils from "../../utils";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from "react-native-modal";
import Toast from 'react-native-toast-message'


export default function EditInformation({ route }) {

    const options = route?.params?.options;

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [displayImage, setDisplayImage] = useState('');

    const navigation = useNavigation();
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);

    const [userName, setUserName] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [valueGender, setValueGender] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            let userId = await utils.AsyncStorage.getItem('user_id');

            api.UserAPI.handleGetUserInformation({
                "user_id": userId
            })
                .then(
                    (response) => {
                        if (response?.data?.success === true) {
                            setUserName(response?.data?.userInfo?.name);
                            setHeight(String(response?.data?.userInfo?.height));
                            setWeight(String(response?.data?.userInfo?.weight));
                            setValueGender(response?.data?.userInfo?.gender);
                            setSelectedDate(response?.data?.userInfo?.dateOfBirth);
                            if (response?.data?.userInfo?.avatar != '') {
                                setDisplayImage(`http://10.0.2.2:3001/${response?.data?.userInfo?.avatar}`)
                            }
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })

        }
        loadData();
    }, []);




    const validateDataInput = () => {
        if (!userName || userName.trim() === '') {
            // userName is empty
            utils.Toast.showToast('info', 'Lack', 'Vui lòng nhập tên người dùng!', 'bottom');
            return 0;
        } else if (userName) {
            const formattedName = userName
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            setUserName(formattedName);
        }
        if (!selectedDate) {
            utils.Toast.showToast('info', 'Lack', 'Vui lòng nhập ngày sinh!', 'bottom');
            return 0;
        }
        if (!valueGender) {
            utils.Toast.showToast('info', 'Lack', 'Vui lòng chọn giới tính!', 'bottom');
            return 0;
        }
        if (height) {
            if (height < 0 || height > 300) {
                utils.Toast.showToast('error', 'Over', 'Chiều cao không hợp lệ!', 'bottom');
                return 0;
            }
        } else {
            utils.Toast.showToast('info', 'Lack', 'Vui lòng nhập chiều cao!', 'bottom');
            return 0;
        }
        if (weight) {
            if (weight < 0 || weight > 300) {
                utils.Toast.showToast('error', 'Over', 'cân nặng không hợp lệ!', 'bottom');
                return 0;
            }
        } else {
            utils.Toast.showToast('info', 'Lack', 'Vui lòng nhập cân nặng!', 'bottom');
            return 0;
        }
        return 1;
    }
    const handleSave = async () => {
        // xử lý xem đã nhập đủ thông tin hay chưa
        const flag = validateDataInput();
        if (flag == 1) {
            const user_id = await utils.AsyncStorage.getItem('user_id');
            const formData = new FormData();
            if (selectedImage !== '') {

                formData.append('avatar',
                    {
                        uri: selectedImage?.uri,
                        type: selectedImage?.type,
                        name: selectedImage?.fileName
                    }
                );
            }
            // console.log(selectedImage)
            formData.append('user_id', user_id)
            formData.append('name', userName);
            formData.append('dateOfBirth', selectedDate)
            formData.append('gender', valueGender)
            formData.append('height', height)
            formData.append('weight', weight)
            api.UserAPI.handleEditInformation(formData)
                .then((result) => {
                    if (result.data.success === true) {
                        setLoading(true);
                        utils.Toast.showToast('success', 'Success', 'Lưu thông tin thành công', 'bottom');
                        setTimeout(() => {
                            navigation.navigate(ROUTES.ME_TAB, {
                                'options': 'RECALL'
                            });
                        }, 1000)
                    }
                })
                .catch(error => {
                    console.log(error)
                })


        }


    }
    const handleSignOut = () => {
        utils.AsyncStorage.removeItem('user_id');
        navigation.navigate(ROUTES.LOGIN)

    }
    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    }
    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }
    const handleCleanDate = (date) => {
        const dateObject = new Date(date);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        return day + '/' + month + '/' + year
    }
    const handleSelectDate = (date) => {
        setSelectedDate(handleCleanDate(date))
        hideDatePicker();
    }

    const openImagePicker = async (type) => {
        const options = {
            strorageOptions: {
                mediaType: 'photo',
                path: 'image',

            },
            includeBase64: true
        }
        if (type === 'album') {
            launchImageLibrary(options, response => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else {
                    if (response.assets[0]) {
                        setSelectedImage(response?.assets[0])
                        setDisplayImage(response?.assets[0]?.uri)
                    }
                }
                toggleModal()

            });
        } else if (type === 'camera') {
            launchCamera(options, response => {
                if (response.didCancel) {
                    console.log('User cancelled camera picker');
                } else if (response.error) {
                    console.log('CameraPicker Error: ', response.error);
                } else {
                    // console.log('Image Base64 String: ', response.assets);
                    if (response) {
                        if (response?.assets[0]) {
                            setSelectedImage(response?.assets[0])
                            setDisplayImage(response?.assets[0]?.uri)
                        }
                    }
                }
                toggleModal()

            });
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    }
    return (

        <View style={{ flex: 1, backgroundColor: loading ? 'grey' : 'white' }}>
            <Toast config={utils.Toast.toastConfig} />
            {
                loading && (
                    <View style={{
                        ...StyleSheet.absoluteFillObject, // Để spinner trải dài trên toàn màn hình
                        backgroundColor: 'rgba(255,255,25)', // Để có một nền mờ (tuỳ chọn)
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator size="large" color={COLORS.signin} />
                    </View>
                )
            }

            {/*avatar*/}

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
                <TouchableOpacity onPress={toggleModal}>
                    <Image source={
                        displayImage === ''
                            ?
                            require('../../assets/images/avatar.png')
                            :
                            // require(selectedImage)
                            { uri: displayImage }
                    }
                        style={displayImage === ''
                            ?
                            { width: 120, height: 120, zIndex: -1000 }
                            :
                            {
                                zIndex: -1000,
                                width: 120,
                                height: 120,
                                borderRadius: 60,
                                overflow: 'hidden'
                            }
                        } />
                </TouchableOpacity>
            </View>
            <View>
                <Modal isVisible={isModalVisible}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => openImagePicker('album')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Album</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openImagePicker('camera')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Take Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={toggleModal}>
                            <Text style={[styles.buttonText, { color: 'red' }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
            {/*Many setting*/}

            <View style={{ marginHorizontal: 30 }}>
                <Text style={styles.textTitle}>Name</Text>
                <TextInput style={styles.TextInputS}
                    value={userName}
                    onChangeText={(text) => { setUserName(text) }}
                    maxLength={40}
                    placeholder="Enter Your Name"
                    placeholderTextColor={COLORS.grey}
                >
                </TextInput>
            </View>

            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.textTitle}>Birthday</Text>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={[styles.TextInputS, {
                                width: 160
                            }]}
                            onChangeText={text => { setSelectedDate(text) }}
                            maxLength={40}
                            placeholder="dd/mm/yyyy"
                            placeholderTextColor={COLORS.grey}
                            value={selectedDate}
                        />
                        <MaterialCommunityIcon
                            onPress={() => showDatePicker()}
                            name={'calendar-month-outline'}
                            style={{
                                fontSize: 20, position: 'absolute', right: 10, top: '50%', transform: [{ translateY: -10 }],
                                color: COLORS.bgBlack(1)
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.textTitle}>Gender</Text>
                    <DropDownPicker
                        style={[styles.TextInputS, {
                            width: 160
                        }]}
                        open={openDropdown}
                        value={valueGender}
                        items={items}
                        setOpen={setOpenDropdown}
                        setValue={setValueGender}
                        setItems={setItems}
                        placeholder={'Choose'}
                        placeholderStyle={{ color: COLORS.grey }}
                        dropDownContainerStyle={{
                            borderColor: COLORS.grey
                        }}
                        itemSeparatorStyle={{
                            backgroundColor: "red"
                        }}

                    />
                </View>
            </View>
            {/*Date picker logic*/}

            {
                isDatePickerVisible ? <CalendarPickerButton hide={hideDatePicker} handleSelectDate={handleSelectDate}
                    maxDatePicker='today' />
                    :
                    (
                        <View>

                            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.textTitle}>Height</Text>
                                    <View style={{ position: 'relative' }}>
                                        <TextInput
                                            style={[styles.TextInputS, {
                                                width: 160
                                            }]}
                                            onChangeText={text => { setHeight(text) }}
                                            value={height}
                                            maxLength={40}
                                            placeholder="Height (cm)"
                                            placeholderTextColor={COLORS.grey}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textTitle}>Weight</Text>
                                    <View style={{ position: 'relative' }}>
                                        <TextInput
                                            style={[styles.TextInputS, {
                                                width: 160
                                            }]}
                                            onChangeText={text => { setWeight(text) }}
                                            value={weight}
                                            maxLength={40}
                                            placeholder="Weight (kg)"
                                            placeholderTextColor={COLORS.grey}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                                <TouchableOpacity
                                    onPress={handleSave}
                                    style={[styles.touchAble, {
                                        backgroundColor: 'rgba(0, 122, 255, 0.4)',
                                    }]}>
                                    <Text style={styles.textButton}>Save</Text>
                                </TouchableOpacity>
                                {
                                    options === 'me'
                                        ?
                                        null :
                                        <TouchableOpacity
                                            onPress={handleSignOut}
                                            style={[styles.touchAble, {
                                                backgroundColor: 'rgba(185, 185, 185, 0.6)',
                                            }]}>
                                            <Text style={styles.textButton}>Sign Out</Text>
                                        </TouchableOpacity>
                                }
                            </View>
                        </View>
                    )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    touchAble: {
        marginTop: 30,
        width: 200,
        height: 50,
        borderRadius: 20
    },
    TextInputS: {
        backgroundColor: COLORS.bgWhite(0.4),
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal:
            20,
        borderColor: 'rgba(185, 175, 245, 1)',
        color: COLORS.bgBlack(1),
    },
    textButton: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 12,
        color: COLORS.bgBlack(0.9),
        // fontWeight: 500
    },
    textTitle: {
        color: COLORS.bgBlack(1),
        fontSize: 18,
        marginVertical: 10

    },
    button: {
        backgroundColor: COLORS.bgWhite(0.96),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10,
        marginBottom: 2,
        width: 230,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },




})