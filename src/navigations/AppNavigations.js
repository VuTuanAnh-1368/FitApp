import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Children, useEffect, useState } from 'react';
import OnboardingScreen from '../screens/welcome/onboarding/Onboarding';
import Login from '../screens/welcome/Login';
// import { SplashScreen } from '../screens/welcome/splash/SplashScreen';
import SplashScreen from 'react-native-splash-screen';
import Home from '../screens/home/Home';
import EditInformation from '../screens/me/editInformation';
import { TabNavigations } from './TabNavigations';
import { COLORS, ROUTES } from '../../constants/index';
import Listvideo from '../screens/home/Listvideo';
import Steps from '../screens/home/Steps';
import Sleeptracking from '../screens/home/Sleeptracking';
import Heart from '../screens/home/Heart';
import WeatherScreen from '../screens/home/WeatherScreen';
import Goals from '../screens/me/Goals';
import Setting from '../screens/me/Settings';

import BloodPressurePost1 from '../screens/details/BloodPressure/Post1';
import BloodPressurePost2 from '../screens/details/BloodPressure/Post2';
import BloodPressurePost3 from '../screens/details/BloodPressure/Post3';
import BloodPressurePost4 from '../screens/details/BloodPressure/Post4';
import BloodPressurePost5 from '../screens/details/BloodPressure/Post5';

import BloodSugarPost1 from '../screens/details/BloodSugar/Post1';
import BloodSugarPost2 from '../screens/details/BloodSugar/Post2';
import BloodSugarPost3 from '../screens/details/BloodSugar/Post3';
import BloodSugarPost4 from '../screens/details/BloodSugar/Post4';
import BloodSugarPost5 from '../screens/details/BloodSugar/Post5';

import BodyWeightPost1 from '../screens/details/BodyWeight/Post1';
import BodyWeightPost2 from '../screens/details/BodyWeight/Post2';
import BodyWeightPost3 from '../screens/details/BodyWeight/Post3';
import BodyWeightPost4 from '../screens/details/BodyWeight/Post4';
import BodyWeightPost5 from '../screens/details/BodyWeight/Post5';

import HealthyFoodPost1 from '../screens/details/HealthyFood/Post1';
import HealthyFoodPost2 from '../screens/details/HealthyFood/Post2';
import HealthyFoodPost3 from '../screens/details/HealthyFood/Post3';
import HealthyFoodPost4 from '../screens/details/HealthyFood/Post4';
import HealthyFoodPost5 from '../screens/details/HealthyFood/Post5';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import utils from '../utils';
import Toast from 'react-native-toast-message'
import Splash from '../screens/welcome/splash/Splash';
import ChangeGoalsScreen from '../screens/me/ChangeGoalsScreen';
import TrainingSchedule from '../screens/me/TrainingSchedule';
import ViewSetting from '../screens/me/ViewSetting';
import Details from '../screens/details/Details';
import BloodPressure from '../screens/details/BloodPressure/BloodPressure';
import BloodSugar from '../screens/details/BloodSugar/BloodSugar';
import BodyWeight from '../screens/details/BodyWeight/BodyWeight';
import HealthyFood from '../screens/details/HealthyFood/HealthyFood';
import TermAndCondition from '../screens/me/TermAndCondition';
import HelpAndSupport from '../screens/me/HelpAndSupport';
import MotionSetting from '../screens/sports/MotionSetting';
import SetTarget from '../screens/sports/SetTarget';
import Walking from '../screens/sports/Walking';
import Waitime from '../screens/sports/Waitime';
import History from '../screens/sports/History';
import PushNotification from 'react-native-push-notification';
import BackgroundFetch from 'react-native-background-fetch';
import BackgroundTimer from 'react-native-background-timer';
import api from '../api';

const Stack = createNativeStackNavigator();

function TabNavigationsMain() {
    return (
        <TabNavigations />
    );
}

export default function AppNavigations() {
    SplashScreen.hide();
    const [showOnboarding, setShowOnboarding] = useState(null);
    const [timeIntervalGetStateData, setTimeIntervalGetStateData] = useState(null);
     /////////////////////////////////////////////////////////////////////////////
     const [userId, setUserId] = useState(null);
     const [currentStep, setCurrentStep] = useState(null);
     useEffect(() => {
      const getStateData = async () => {
        let ud = null;
        if (userId == null) {
            ud = await utils.AsyncStorage.getItem('user_id');
            setUserId(ud);
        }
        await api.UserAPI.handleGetStateDataFollowDay({
            'objectId': userId == null ? ud : userId
        })
            .then(response => {
                if (response?.data) {
                    if (response?.data?.todayInfo != {}) {
                        setCurrentStep(response?.data?.todayInfo?.step);
                        // console.log(response?.data?.todayInfo?.step)
                        const step =  response?.data?.todayInfo?.step
                        showNotification(step);


                      }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    getStateData();
    const intervalId = setInterval(() => {
        getStateData()
    }, 1000);

    // setTimeIntervalGetStateData(intervalId);

    // return () => {
    //     if (timeIntervalGetStateData) {
    //         clearInterval(timeIntervalGetStateData);
    //     }
    // };

      checkIfAlreadyOnboarding();
      createNotificationChannel();



      // initializeBackgroundFetch();
      // initializeBackgroundTask();
    }, []);
     
     ////////////////////////////////////////////////////////////
    //  useEffect(() => {
      
    //   }, []);
  
      // const initializeBackgroundTask = () => {
      //     BackgroundTimer.runBackgroundTimer(() => {
      //        showNotification(currentStep);
      //     },1000); // wait 100 -> update step
      //   };
  
        // Clear timer...
        // useEffect(() => {
        //   // return () => {
        //   //   BackgroundTimer.stopBackgroundTimer();
        //   // };
        // }, []);
  
        // useEffect(() => {
        //   showNotification(currentStep);
        // }, [currentStep]);

        const createNotificationChannel = () => {
        PushNotification.createChannel(
          {
            channelId: "steps-channel",
            channelName: "Steps Channel",
            channelDescription: "A channel to categorise your step count notifications",
            playSound: false,
            soundName: 'default',
            importance: 4,
            vibrate: true,
          },
          () => {}
        );
        }
        const initializeBackgroundFetch = () => {
          BackgroundFetch.configure({
            minimumFetchInterval: 15,
            stopOnTerminate: false,
            startOnBoot: true,
          }, async (taskId) => {
            console.log('[BackgroundFetch] taskId: ', taskId);
            try {
              await getStateData();
            } catch (error) {
              console.error('Lỗi khi cập nhật số bước chân từ Background Fetch: ', error);
            }
            BackgroundFetch.finish(taskId);
          }, (error) => {
            console.error('[BackgroundFetch] ERROR: ', error);
          });
        };
        const showNotification = async (steps) => {
          PushNotification.localNotification({
            channelId: "steps-channel",
            title: "STEP",
            message: `Your step count is ${steps}`,
            id: "123",
            largeIcon: "run",
            color: "#3D8BEC",
          });
        };
  
        // Function fetchStep
      /////////////////////////////////////////////////////////////////////////////
    const checkIfAlreadyOnboarding = async () => {
        const onboarded = await utils.AsyncStorage.getItem('onboarded');


        if (onboarded == '1') {
            setShowOnboarding(false)
        } else {
            setShowOnboarding(true)
        }
    }
    if (showOnboarding == null) {
        return <>
        </>
    }
    return (
        <>
            <Provider store={store}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
                    
                     
                        {
                            showOnboarding
                                ?
                                <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
                                :
                                <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
                        }
                        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
                        <Stack.Screen name={ROUTES.HOME} component={TabNavigationsMain} />

                        <Stack.Screen name={ROUTES.EDIT_INFORMATION} component={EditInformation} options={({ route }) => ({
                            title: 'Chỉnh sửa thông tin',
                            headerStyle: {
                                backgroundColor: COLORS.bgWheather1,
                            },
                            headerTintColor: 'white',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerShown: route?.params?.options === 'me'
                        })} />
                        <Stack.Screen name={ROUTES.LIST_VIDEO} component={Listvideo} />
                        <Stack.Screen name={ROUTES.STEP} component={Steps} />
                        <Stack.Screen name={ROUTES.SLEEPTRACKING} component={Sleeptracking} />
                        <Stack.Screen name={ROUTES.HEART} component={Heart} />
                        <Stack.Screen name={ROUTES.WEATHER} component={WeatherScreen} />
                        <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />
                        <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={Setting} />
                        <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />
                        <Stack.Screen name={ROUTES.TRAINING_SCHEDULE} component={TrainingSchedule} />
                        <Stack.Screen name={ROUTES.VIEWSETTING} component={ViewSetting} />
                        <Stack.Screen name={ROUTES.TermAndCondition} component={TermAndCondition} />
                        <Stack.Screen name={ROUTES.HelpAndSupport} component={HelpAndSupport} />

                        <Stack.Screen name={ROUTES.DETAILS} component={Details} options={{ headerShown: false }} />

                        <Stack.Screen name={ROUTES.BloodPresssure} component={BloodPressure} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodPressurePost1} component={BloodPressurePost1} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodPressurePost2} component={BloodPressurePost2} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodPressurePost3} component={BloodPressurePost3} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodPressurePost4} component={BloodPressurePost4} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodPressurePost5} component={BloodPressurePost5} options={{ headerShown: false }} />

                        <Stack.Screen name={ROUTES.BloodSugar} component={BloodSugar} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodSugarPost1} component={BloodSugarPost1} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodSugarPost2} component={BloodSugarPost2} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodSugarPost3} component={BloodSugarPost3} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodSugarPost4} component={BloodSugarPost4} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BloodSugarPost5} component={BloodSugarPost5} options={{ headerShown: false }} />

                        <Stack.Screen name={ROUTES.BodyWeight} component={BodyWeight} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BodyWeightPost1} component={BodyWeightPost1} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BodyWeightPost2} component={BodyWeightPost2} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BodyWeightPost3} component={BodyWeightPost3} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BodyWeightPost4} component={BodyWeightPost4} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.BodyWeightPost5} component={BodyWeightPost5} options={{ headerShown: false }} />

                        <Stack.Screen name={ROUTES.HealthyFood} component={HealthyFood} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.HealthyFoodPost1} component={HealthyFoodPost1} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.HealthyFoodPost2} component={HealthyFoodPost2} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.HealthyFoodPost3} component={HealthyFoodPost3} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.HealthyFoodPost4} component={HealthyFoodPost4} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.HealthyFoodPost5} component={HealthyFoodPost5} options={{ headerShown: false }} />

                        <Stack.Screen name={ROUTES.MotionSetting} component={MotionSetting} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.SetTarget} component={SetTarget} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.Walking} component={Walking} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.Waittime} component={Waitime} options={{ headerShown: false }} />
                        <Stack.Screen name={ROUTES.History} component={History} options={{ headerShown: false }} />

                    </Stack.Navigator>

                </NavigationContainer>
                <Toast config={utils.Toast.toastConfig} />
            </Provider>


        </>
    )


}
