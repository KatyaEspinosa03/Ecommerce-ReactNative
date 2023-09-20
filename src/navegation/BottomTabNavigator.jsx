import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import StackNavigator from "./StackNavigator";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from '@expo/vector-icons/Feather'

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
        <BottomTab.Screen name="CartNav" component={CartNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather 
                        name='shopping-bag' 
                        size={24} 
                        color={focused ? colors.secondary : colors.primary }
                        />
                    ),
                }}/>


    </BottomTab.Navigator>
}

export default BottomTabNavigator

 const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.tertiary
    }
})