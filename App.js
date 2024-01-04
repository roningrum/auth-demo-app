import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Home} from "./src/screens";
const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      
    </Stack.Navigator>
   </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
