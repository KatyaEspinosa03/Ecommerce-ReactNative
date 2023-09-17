import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";
import {Home, Products, Details} from '../screens'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
            screenOptions={({route}) => ({
                headerShown: true,
               header: () => (            
            <View>
                <Header title={route.name}/>
            </View>
            ),
            headerRight: ({ navigation }) => (
                <Button 
                title="Back"
                onPress={() => navigation.goBack()}
                color={colors.secondary}
                />
            ),
            })} >
                    
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products}/>
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator