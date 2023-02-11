import {Animated, View} from "react-native";
import {windowHeight, windowWidth} from "../configs/utils";



export default function Foreground(){
  let qtdBlue = [1.2,9.1,8.5,1.7,0.8,1.8,0.2,4.7,2.8,3.8,4.2,2.05,2.1,5.4];//0.05,6.1,3.6, 2.2,3.1,7.5,
  let qtdRed = [2.2,3.1,3.5,4.7,2.8,3.8,7.2,0.7,0.8,1.8,0.2,0.05,0.1,2.6];//2.05,2.1,5.4, 1.2,0.1,0.5,

  const GraphicBlue = (item) => {
    return (
      <Animated.View key={item} style={{
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: "rgba(0,6,38,0.2)",
        marginTop: (windowHeight * Math.random() * 0.17),
        marginLeft:  (windowWidth * Math.random() * 1.6) * item.item,
        position: 'absolute'
      }}/>
    )
  };

  const GraphicRed = (item) => {
    return (
      <Animated.View key={item} style={{
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: "rgba(75,0,0,0.2)",
        marginTop: (windowHeight * Math.random() * 0.17),
        marginLeft:  (windowWidth * Math.random() * 1.7) * item.item,
        position: 'absolute'
      }}/>
    )
  };



  return (
    <View>
      {qtdBlue.map((item) => {
        return (<View style={{position: 'relative'}}><GraphicBlue item={item}/></View>)
      })}

      {qtdRed.map((item) => {
        return (<View style={{position: 'relative'}}><GraphicRed item={item}/></View>)
      })}
    </View>
  )
}