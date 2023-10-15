/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Home from './src/screens/home/Home';
import { name as appName } from './app.json';
import AppWithSplashScreen from './src/screens/welcome/splash/AppWithSplashScreen';
import Sleeptracking from './src/screens/home/Sleeptracking';
import Liinechart from './src/components/Liinechart';
import Steps from './src/screens/home/Steps';
import Taskbar from './src/components/Taskbar';


AppRegistry.registerComponent(appName, () => Home);
