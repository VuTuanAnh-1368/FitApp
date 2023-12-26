/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppNavigations from './src/navigations/Navigations';
import { name as appName } from './app.json';
import AppNavigations from './src/navigations/AppNavigations';
import App from './App';

import { PermissionsAndroid } from 'react-native';
import { Notifications } from 'react-native-notifications';
import MotionSetting from './src/screens/sports/MotionSetting';
import Sport from './src/screens/sports/Sport';
import Walking from './src/screens/sports/Walking';
import { TabNavigations } from './src/navigations/TabNavigations';
import Home from './src/screens/home/Home';
import Me from './src/screens/me/me';
import TermAndCondition from './src/screens/me/TermAndCondition';
import BaarChart2 from './src/components/Baarchart2';
import SetTarget from './src/screens/sports/SetTarget';
import HelpAndSupport from './src/screens/me/HelpAndSupport';
import Loading from './src/components/Loading';

// import ReactNativeForegroundService from "@supersami/rn-foreground-service";
// import BackgroundService from 'rdeact-native-background-actions';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

Notifications.registerRemoteNotifications();
// ReactNativeForegroundService.register();

// const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
// const veryIntensiveTask = async (taskDataArguments) => {
//     // Example of an infinite loop task
//     const { delay } = taskDataArguments;
//     await new Promise(async (resolve) => {
//         for (let i = 0; BackgroundService.isRunning(); i++) {
//             console.log(i);
//             await sleep(delay);
//         }
//     });
// };
// const options = {
//     taskName: 'Example',
//     taskTitle: 'ExampleTask title',
//     taskDesc: 'ExampleTask description',
//     taskIcon: {
//         name: 'ic_launcher',
//         type: 'mipmap',
//     },
//     color: '#ff00ff',
//     linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
//     parameters: {
//         delay: 1000,
//     },
// };


// await BackgroundService.start(veryIntensiveTask, options);
AppRegistry.registerComponent(appName, () => AppNavigations);
