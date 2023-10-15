import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

//export các cái dữ liệu này nếu cần.
// const targetAmount = 5000;   // cái này là target
// const spentAmount = 2000//  Cai nay la dang thuc hien 

const Donutchart = (props) => {
  const targetAmount = `${props.target}`;            // cái này là target
  const spentAmount = `${props.spent}`;
  const colorTarget = `${props.colorTarget}`;
  const colorAmount = `${props.colorAmount}`;
  const strokeTarget = `${props.strokeTarget}`
  const strokeAmount = `${props.strokeAmount}`
  const text = `${props.text}`; //  Cai nay là đơn vị của cái mình đang chart
  const radius = `${props.radius}`;
  const circleCircumference = 2 * Math.PI * radius;

  const percentage = (spentAmount / targetAmount) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  return (
    <View style={styles.graphWrapper}>
      <Svg height="180" width="180" viewBox="0 0 180 180">
        <G rotation={-90} originX="90" originY="90">
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={colorTarget}
            fill="transparent"
            strokeWidth={strokeTarget}    // điều chỉnh độ béo gầy của bánh donut
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke={colorAmount}
            fill="transparent"
            strokeWidth={strokeAmount}
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text style={{
        position: "absolute",
        textAlign: "center",
        fontWeight: "600",
        fontSize: props.fontText,   // Cai nay cung kho truyen nhu cai duoi
        color: props.colorText,    // Mãi mới truyền đc cái này, muốn chữ trong vòng tròn màu gì thì truyền cái đấy
      }}>{spentAmount}  {text}</Text>
    </View>
  );
};

export default Donutchart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    color: "white",
  },
});