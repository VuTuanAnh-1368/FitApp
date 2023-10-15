import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const UVLine = ({ uvIndex }) => {
    const [position] = useState(new Animated.Value(0));


    useEffect(() => {
        if (uvIndex !== undefined) {
            Animated.timing(position, {
                toValue: uvIndex - 1,
                duration: 1000, // Thời gian di chuyển (1 giây)
                useNativeDriver: false,
            }).start();
        }
    }, [uvIndex, position]);

    const uvColors = [
        '#00FF00', // Màu xanh lá cây
        '#FFFF00', // Màu vàng
        '#FFA500', // Màu cam
        '#FF4500', // Màu đỏ cam
        '#FF0000', // Màu đỏ
    ];
    const getColorForUV = (uv) => {
        if (uv >= 0 && uv <= 2) {
            return uvColors[0];
        } else if (uv > 2 && uv <= 5) {
            return uvColors[1];
        } else if (uv > 5 && uv <= 7) {
            return uvColors[2];
        } else if (uv > 7 && uv <= 10) {
            return uvColors[3];
        } else if (uv > 10) {
            return uvColors[4];
        }
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20 }}>
                {Array.from({ length: 11 }, (_, i) =>
                    <View
                        key={i}
                        style={{
                            height: 10,
                            width: 10,
                            backgroundColor: getColorForUV(i + 1),
                            // marginEnd: i !== 10 ? 5 : 0, // Tạo khoảng cách giữa các mốc
                        }}
                    />
                )}
                <Animated.View
                    style={{
                        marginTop: 5,
                        position: 'absolute',
                        left: position.interpolate({
                            inputRange: [0, 10],
                            outputRange: ['0%', '78%'], // Di chuyển từ đầu đến cuối của line
                        }),
                        top: -5,
                        width: 8,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'black',
                    }}
                />
            </View>



        </View>
    );
};

export default UVLine;
