import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode, setLightMode } from '../action/actions';

const SwitchLightDark = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.settings.mode);
    const styles = useSelector((state) => state.settings.styles);

    const onValueChange = () => {
        if (mode === 'light') {
            dispatch(setDarkMode());
        } else {
            dispatch(setLightMode());
        }
    };
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={mode === 'dark' ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onValueChange}
                value={mode === 'dark'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SwitchLightDark;
