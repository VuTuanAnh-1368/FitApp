import { Image } from 'react-native';
import React from 'react';
import { Animated } from 'react-native/Libraries/Animated/Animated';
import Onboarding from 'react-native-onboarding-swiper'; // 1.1.4
import { useNavigation } from '@react-navigation/native';
import utils from '../../../utils';
import { ROUTES } from '../../../../constants';
export default function OnboardingScreen() {
    const navigation = useNavigation();

    return (
        <Onboarding
            onDone={handleDone = () => {
                navigation.navigate(ROUTES.LOGIN);
                utils.AsyncStorage.storeItem('onboarded', '1');
            }}

            pages={[
                {
                    backgroundColor: '#68ffcb',
                    image: <Image source={require('../../../assets/images/aboutus.png')} />,
                    title: 'Welcome to ADHFit',
                    subtitle: ' We are re here on a mission to help you become healthier every day. Now let get started with us ',
                },
                {
                    backgroundColor: '#fe6e58',
                    image: <Image source={require('../../../assets/images/checkingplan.png')} />,
                    title: 'Set plan and practice every day',
                    subtitle: '',
                },
                {
                    backgroundColor: '#9340FC',
                    image: <Image source={require('../../../assets/images/run.png')} />,
                    title: 'Consistent practice will help you become healthier and more resilient over time.',
                    subtitle: "",
                },
                {
                    backgroundColor: '#F9FB86',
                    image: <Image source={require('../../../assets/images/strong.png')} />,
                    title: 'And Become stronger',
                    subtitle: "",
                },
            ]}
        />

    )
}

