import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'
import { COLORS } from "../../../constants";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { alignContent } from "react-native-wind/dist/styles/flex/align-content";
import CalendarPickerButton from "../../components/CalendarPickerButton";
import DropDownPicker from 'react-native-dropdown-picker';



export default function EditInformation() {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [valueGender, setValueGender] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);



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
    return (

        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/avatar.png')} style={{ width: 120, height: 120 }} />
                </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 30 }}>
                <Text style={{ color: COLORS.bgBlack(1), fontSize: 18, marginVertical: 10 }}>Name</Text>
                <TextInput style={{
                    backgroundColor: COLORS.bgWhite(0.4), borderRadius: 10, borderWidth: 1,
                    paddingHorizontal: 20, borderColor: 'rgba(185, 175, 245, 1)', color: COLORS.bgBlack(1),
                }}
                    maxLength={40}
                    placeholder="Enter Your Name"
                    placeholderTextColor={COLORS.grey}
                >
                </TextInput>
            </View>

            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: COLORS.bgBlack(1), fontSize: 18, marginVertical: 10 }}>Birthday</Text>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={{
                                backgroundColor: COLORS.bgWhite(0.4), borderRadius: 10, borderWidth: 1,
                                paddingHorizontal: 20, borderColor: 'rgba(185, 175, 245, 1)', color: COLORS.bgBlack(1),
                                width: 160
                            }}
                            maxLength={40}
                            placeholder="dd/mm/yyyy"
                            placeholderTextColor={COLORS.grey}
                            value={selectedDate}
                        />
                        <MaterialCommunityIcon
                            onPress={() => showDatePicker()}
                            name={'calendar-month-outline'}
                            style={{ fontSize: 20, position: 'absolute', right: 10, top: '50%', transform: [{ translateY: -10 }], color: COLORS.bgBlack(1) }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ color: COLORS.bgBlack(1), fontSize: 18, marginVertical: 10 }}>Gender</Text>
                    <DropDownPicker
                        style={{
                            backgroundColor: COLORS.bgWhite(0.4), borderRadius: 10, borderWidth: 1,
                            paddingHorizontal: 20, borderColor: 'rgba(185, 175, 245, 1)', color: COLORS.bgBlack(1),
                            width: 160
                        }}
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
            {
                isDatePickerVisible ? <CalendarPickerButton hide={hideDatePicker} handleSelectDate={handleSelectDate} />
                    :
                    (
                        <View>


                            <View style={{ marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: COLORS.bgBlack(1), fontSize: 18, marginVertical: 10 }}>Height</Text>
                                    <View style={{ position: 'relative' }}>
                                        <TextInput
                                            style={{
                                                backgroundColor: COLORS.bgWhite(0.4), borderRadius: 10, borderWidth: 1,
                                                paddingHorizontal: 20, borderColor: 'rgba(185, 175, 245, 1)', color: COLORS.bgBlack(1),
                                                width: 160
                                            }}
                                            maxLength={40}
                                            placeholder="Height (cm)"
                                            placeholderTextColor={COLORS.grey}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: COLORS.bgBlack(1), fontSize: 18, marginVertical: 10 }}>Weight</Text>
                                    <View style={{ position: 'relative' }}>
                                        <TextInput
                                            style={{
                                                backgroundColor: COLORS.bgWhite(0.4), borderRadius: 10, borderWidth: 1,
                                                paddingHorizontal: 20, borderColor: 'rgba(185, 175, 245, 1)', color: COLORS.bgBlack(1),
                                                width: 160
                                            }}
                                            maxLength={40}
                                            placeholder="Weight (kg)"
                                            placeholderTextColor={COLORS.grey}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                                <TouchableOpacity style={{
                                    marginTop: 30, backgroundColor: 'rgba(0, 122, 255, 0.4)',
                                    width: 200, height: 50, borderRadius: 20
                                }}>
                                    <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 12, color: COLORS.bgBlack(0.9), fontWeight: 500 }}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    marginTop: 30, backgroundColor: 'rgba(185, 185, 185, 0.6)',
                                    width: 200, height: 50, borderRadius: 20
                                }}>
                                    <Text style={{ fontSize: 18, textAlign: 'center', paddingTop: 12, color: COLORS.bgBlack(0.9), fontWeight: 500 }}>
                                        Sign Out
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
            }

        </View>
    )
}