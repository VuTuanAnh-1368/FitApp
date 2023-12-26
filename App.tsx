import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';

import Goals from './src/screens/me/Goals';
import Login from './src/screens/welcome/Login';
import { useEffect } from 'react';
import EditInformation from './src/screens/me/EditInformation';
import TrainingSchedule from './src/screens/me/TrainingSchedule';
import Sport from './src/screens/sports/Sport';
import RunningOutDoor from './src/screens/sports/RunningOutDoors';
import Splash from './src/screens/welcome/splash/Splash';
import ViewSetting from './src/screens/me/ViewSetting';
import Waitime from './src/screens/sports/Waitime';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from './src/screens/home/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import Walking from './src/screens/sports/Walking'
import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import { View, Button } from 'react-native';


const Stack = createNativeStackNavigator()





export default function App() {

    // Xử lý khi nhận được thông báo
    // Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
    //     console.log('Received notification:', notification);
    //     completion({ alert: true, sound: false, badge: false });
    // });

    // useEffect(() => {
    //     ReactNativeForegroundService.add_task(log, {
    //         delay: 1000,
    //         onLoop: true,
    //         taskId: "taskid",
    //         onError: (e) => console.log(`Error logging:`, e),
    //     });
    // }, [])

    // const startTask = () => {
    //     ReactNativeForegroundService.start({
    //         id: 1244,
    //         title: "Foreground Service",
    //         message: "We are live World",
    //         icon: "ic_launcher",
    //         button: true,
    //         button2: true,
    //         buttonText: "Button",
    //         button2Text: "Anther Button",
    //         buttonOnPress: "cray",
    //         setOnlyAlertOnce: true,
    //         color: "#000000",
    //         progress: {
    //             max: 100,
    //             curr: 50,
    //         },
    //     });
    // }




    return (
        // <Provider store={store}>

        //     <NavigationContainer>
        //         <Stack.Navigator>

        //             <Stack.Screen name='Waitime' component={Login} />
        //             {/* <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} /> */}

        //             <Stack.Screen name={ROUTES.VIEWSETTING} component={ViewSetting} />
        //             {/* <Stack.Screen name='ViewSetting' component={ViewSetting} /> */}
        //             <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
        //             <Stack.Screen name={ROUTES.SPORT_TAB} component={RunningOutDoor} />
        //             {/* <Stack.Screen name={ROUTES.TRAINING_SCHEDULE} component={TrainingSchedule} /> */}


        //             <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        //             <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />




        //         </Stack.Navigator>
        //     </NavigationContainer>
        // </Provider>
        <View>
            {/* <Button onPress={startTask} title='start' /> */}

        </View>
    )
}


// const log = () => console.log("tewsst");