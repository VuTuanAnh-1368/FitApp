import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect } from 'react'
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants";
import * as Animatable from 'react-native-animatable';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

const Splash = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animatable.Image
                source={require('../../../assets/images/splash.png')}
                style={{ width: screenWidth, height: screenHeight, resizeMode: 'cover' }}
                animation="fadeIn"
                duration={2000}
                direction="normal"
                onAnimationEnd={() => {
                    navigation.navigate(ROUTES.LOGIN)
                }}

            />

        </View >

    )
}

export default Splash

const styles = StyleSheet.create({

})

