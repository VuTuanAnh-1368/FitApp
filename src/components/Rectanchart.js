import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Rect, Circle, G } from 'react-native-svg';

const Rectanchart = (props) => {
    const rectWidth = 70;
    const rectHeight = 70;
    const strokeWidth = 20;
    const strokeColor = 'blue';
    const cornerRadius = 30;

    const circleCircumference = 2 * (rectHeight + rectWidth);

    const percentage = (50 / 120) * 100;
    const strokeDashoffset =
        circleCircumference - (circleCircumference * percentage) / 100;
    return (
        <View>
            <Svg height={rectHeight} width={rectWidth}
                style={{
                    marginTop: props.top,
                    marginLeft: props.left,
                    transform: [{ rotate: '90deg' }]
                }}>
                <Rect
                    width={rectWidth}
                    height={rectHeight}
                    fill="transparent"
                    stroke={props.colorTarget}
                    strokeWidth={strokeWidth}
                    rx={cornerRadius}
                    ry={cornerRadius}
                />
                <Rect
                    width={rectWidth}
                    height={rectHeight}
                    fill="transparent"
                    stroke={props.colorAmount}
                    strokeWidth={strokeWidth}
                    rx={cornerRadius}
                    ry={cornerRadius}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </Svg>
        </View >
    );
};

export default Rectanchart;