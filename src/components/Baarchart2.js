import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Rect, Circle, Line, Text as SvgText } from 'react-native-svg';


const BaarChart2 = (props) => {
    const data = [3000, 4000, 600, 2000, 1000, 920, 1200]; // Dữ liệu của biểu đồ
    const chartHeight = 180;
    const chartWidth = 250;
    const barWidth = 10;
    const spaceBetweenBars = 30;
    const maxData = Math.max(...data);


    const horizontalDashedLines = Array.from({ length: 5 }, (_, i) => (
        <Line
            key={i}
            x1="0"
            y1={chartHeight - (i / 4) * chartHeight}
            x2={chartWidth}
            y2={chartHeight - (i / 4) * chartHeight}
            stroke="#D9D9D9"
            strokeWidth="0.9"
            strokeDasharray="4 4"
        />
    ));
    const currentTime = new Date();
    const date = currentTime.getDay();
    day = 5;
    if (date == 0) {
        day = 6;         // nếu là 0 - chủ nhật thì cho = 6 - ngày cuối cùng
    }
    else {
        day = date - 1;     // Nếu đ phải chủ nhật thì trừ 1 là ra index, ví dụ thứ 2 index là 0 thì cái hàm bỏ mẹ này trả về 1.
    }     // Cái này trả về thứ trong tuần nhưng ngày 0 là chủ nhật chứ đ phải thứ 2, phải chỉnh lại cho thứ 2 đứng đầu.
    const highlightIndex = day;

    return (
        <Svg height={chartHeight} width={chartWidth}
            style={{
                marginLeft: 20,
            }}>
            {horizontalDashedLines}
            {props.data.map((value, index) => {
                const barHeight = (value / (maxData + maxData / 10)) * chartHeight;
                const barTop = chartHeight - barHeight;
                const barLeft = index * (barWidth + spaceBetweenBars);
                const circleRadius = 5;
                const circleCenterX = barLeft + barWidth / 2;
                const circleCenterY = barTop;

                const isHighlighted = index === highlightIndex;
                return (
                    <React.Fragment key={index}>
                        <Rect
                            x={barLeft}
                            y={barTop}
                            width={barWidth}
                            height={barHeight}
                            fill={isHighlighted ? 'blue' : 'black'} // Sử dụng màu đỏ nếu đang highlight
                        />
                        <Circle
                            cx={circleCenterX}
                            cy={circleCenterY}
                            r={circleRadius}
                            fill={isHighlighted ? 'blue' : 'black'} // Sử dụng màu đỏ nếu đang highlight
                        />
                    </React.Fragment>
                );
            })}
        </Svg>
    );
};

export default BaarChart2;