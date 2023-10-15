import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS } from '../../constants';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CalendarPickerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
        this.onCloseCalendar = this.onCloseCalendar.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
        if (this.props.hide && this.props.handleSelectDate) {
            this.props.hide();
            this.props.handleSelectDate(date);
        }
    }
    onCloseCalendar() {
        if (this.props.hide) {
            this.props.hide();
        }
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                    todayBackgroundColor={COLORS.weatherBgColor}
                    nextTitle={' '}
                    previousTitle={' '}
                    scrollable={'true'}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 4 }}>
                    <Text onPress={this.onCloseCalendar}>Close</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
    },
});