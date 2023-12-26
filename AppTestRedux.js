import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import WeatherScreen from './src/screens/home/WeatherScreen';
import Me from './src/screens/me/me';
import Listvideo from './src/screens/home/Listvideo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import Details from './src/screens/details/Details';
import Steps from './src/screens/home/Steps';
import Sleeptracking from './src/screens/home/Sleeptracking';
import Heart from './src/screens/home/Heart';
import Goals from './src/screens/me/Goals';
import Setting from './src/screens/me/Settings';
import { Provider } from 'react-redux';
import store from './redux/store';


const Tab = createBottomTabNavigator();

function ScreenWtaskbar() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#9D9D9D',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let screenName = route.name;
                    let background;
                    if (screenName === "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                        background = focused ? '#BBF246' : 'white';
                    } else if (screenName === "me") {
                        iconName = focused ? 'settings' : 'settings-outline';
                        background = focused ? '#BBF246' : 'white';
                    }
                    else if (screenName = "Details") {
                        iconName = focused ? 'document-text' : 'document-text-outline';
                        background = focused ? '#BBF246' : 'white';
                    }
                    return <View
                        style={{
                            borderRadius: 20,
                            width: 80,
                            height: 30,
                            backgroundColor: `${background}`,
                            alignItems: 'center'
                        }}>
                        <Ionicons name={iconName} size={size} color={color} />
                    </View>
                },
            })}>
            <Tab.Screen name={"Home"} component={Home} options={{ headerShown: false }} />
            <Tab.Screen name={"Details"} component={Details} options={{ headerShown: false }} />
            <Tab.Screen name={"me"} component={Me} />
        </Tab.Navigator>
    );
}

function AppTestRedux() {
    return (
        <NavigationContainer>
        <Provider store = {store}>
            <Stack.Navigator>
                <Stack.Screen name="ScreenWtaskbar" component={ScreenWtaskbar} options={{ headerShown: false }} />
                <Stack.Screen name={"STEP"} component={Steps} options={{ headerShown: false }} />
                <Stack.Screen name={"SLEEPTRACKING"} component={Sleeptracking} options={{ headerShown: false }} />
                <Stack.Screen name={"HEART"} component={Heart} options={{ headerShown: false }} />
                <Stack.Screen name={"WEATHER_SCREEN"} component={WeatherScreen} options={{ headerShown: false }} />
                <Stack.Screen name={"GOALS_SCREEN"} component={Goals} options={{ headerShown: false }} />
                <Stack.Screen name={"SETTINGS_SCREEN"} component={Setting} options={{ headerShown: false }} />
                <Stack.Screen name="LIST_VIDEO" component={Listvideo} options={{ headerShown: false }} />
                <Stack.Screen name="Me" component={Me} options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Provider>
        </NavigationContainer>
    );
}
export default AppTestRedux