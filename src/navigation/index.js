import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Index from "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} options={{headerTransparent: true, headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
