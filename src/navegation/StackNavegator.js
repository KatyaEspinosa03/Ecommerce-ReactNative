import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/colors";
import {Home, Products, Details} from '../screens'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={({route}) => ({
                headerShown: true })} >
                    
                <Stack.Screen name='Home' component={Home} 
                options={{
                    headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.tertiary,
                headerTitleStyle:{
                    fontFamily: "GaretHeavy",
                    fontSize: 25,
                }
                }}/>

                <Stack.Screen name='Products' component={Products} options={{
                    headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.tertiary,
                headerTitleStyle:{
                    fontFamily: "GaretHeavy",
                    fontSize: 25,
                }
                }} />
                <Stack.Screen name='Details' component={Details}
                options={{
                    headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: colors.tertiary,
                headerTitleStyle:{
                    fontFamily: "GaretHeavy",
                    fontSize: 25,
                }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator