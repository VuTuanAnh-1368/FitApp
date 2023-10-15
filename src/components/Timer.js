import { Text, View, TouchableOpacity } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const Timer = ({ onTimerEnd }) => {

  return (
    <CountdownCircleTimer
      isPlaying
      size={50}              // Mặc định 180, có 2 cái này là chỉnh size thoải mái r
      strokeWidth={6}        // độ béo gầy của cái bánh donut, mặc định là 12. 
      duration={60}
      // 2mảng này lưu các cái màu để vòng tròn đổi màu và thời gian sẽ đổi. Nếu b muốn thêm màu thì nhớ thêm cả 2 mảng.
      colors={['#004777', '#096EB2', '#0772A1', '#07A185', '#07A157', '#07A116', '#6FA107', '#CAC318', '#D1750A', '#D13A0A', '#D60D0D']}
      colorsTime={[55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]}
    >
      {({ remainingTime }) => {

        if (remainingTime == 0) {
          onTimerEnd()
        }
        return <Text>{remainingTime}</Text>
      }}
    </CountdownCircleTimer>
  )
}
export default Timer
