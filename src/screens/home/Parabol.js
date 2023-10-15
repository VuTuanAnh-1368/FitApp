import React from 'react';
import Svg, { Path, Line, LinearGradient, Stop, Circle } from 'react-native-svg';


const ParabolaCurve = () => {
    return (
        <Svg height="100%" width="100%" style={{ position: 'absolute', top: 4, left: 0 }}>
            <LinearGradient id="gradAbove" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor="black" />
                <Stop offset="0.3" stopColor="yellow" />
                <Stop offset="1" stopColor="red" />
            </LinearGradient>
            <Path
                d="M -13 120 Q 70 15 150 100 T 200 100"
                fill="none"
                stroke="url(#gradAbove)"
                strokeWidth="5"
            />
            <Line
                x1="0"
                y1="85"
                x2="400"
                y2="85"
                stroke="white"
                strokeWidth="2"
            />

        </Svg>
    );
};

export default ParabolaCurve;
