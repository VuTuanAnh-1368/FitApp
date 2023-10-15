import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

/*const dataSleep = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [2, 8, 7, 6, 4, 9, 5]
    }
  ]
};       Cái này là dữ liệu mẫu, dữ liệu muốn chart thì truyền props, t để đây đoạn cần bảo trì thì có sẵn cái test. */


const Liinechart = (props) => {
  return (
    <LineChart
      data={props.data}
      //data={dataSleep}           Cái này để chạy dữ liệu mẫu, có props thì ko cần cái này.
      width={300}
      height={200}
      verticalLabelRotation={30}
      chartConfig={{
        backgroundGradientFrom: props.backgroundGradient,
        backgroundGradientFromOpacity: 0,                    //Opacity = 0 rồi thật ra ko cần truyền màu cũng được, mờ 100% - cái chart sẽ màu cái chứa nó.
        backgroundGradientTo: props.backgroundGradient,   // Nền cũng để màu chạy tuyến tính đc nma t thấy ko thích nên để 1 cái màu thôi.
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgb(65, 101, 229)`,
        labelColor: (opacity = 1) => `rgb(255, 255, 255)`,
        strokeWidth: 4, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        fillShadowGradientFrom: props.fillShadowGradientFrom,
        fillShadowGradientFromOpacity: props.Opacity,
        fillShadowGradientTo: props.fillShadowGradientTo,
        fillShadowGradientToOpacity: props.Opacity,
      }}
      bezier
      withInnerLines={false}
      withOuterLines={false}
      style={{
        marginStart: 15,
      }}
    />
  )
}
export default Liinechart