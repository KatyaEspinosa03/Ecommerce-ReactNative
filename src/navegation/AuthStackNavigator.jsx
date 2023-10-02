import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";
import {Signup, Login} from '../screens'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return(
            <AuthStack.Navigator initialRouteName='Signup' 
            screenOptions={() => ({
                headerShown: false,
            })}>
                    
                <AuthStack.Screen name='Signup' component={Signup} />
                <AuthStack.Screen name='Login' component={Login}/>
            </AuthStack.Navigator>
    )
}

export default AuthStackNavigator