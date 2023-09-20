
import {useFonts} from 'expo-font'
import fonts from "./src/global/fonts";
import StackNavigator from './src/navegation/StackNavigator';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './src/navegation/BottomTabNavigator';

export default function App() {

  const [fontsLoaded] = useFonts(fonts)


  if (!fontsLoaded){
    return null
  }

  return (

  <NavigationContainer>
      <BottomTabNavigator />
  </NavigationContainer>

  )



}

