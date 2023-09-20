import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from "./StackNavigator";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";


const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {

    return <BottomTab.Navigator initialRouteName="HomeNav"
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: styles.tabBar
        }}
    >

        <BottomTab.Screen name="HomeNav" component={StackNavigator} /> 
        <BottomTab.Screen name="CartNav" component={CartNavigator}/>


    </BottomTab.Navigator>
}

export default BottomTabNavigator

 const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.tertiary
    }
})