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
            screenOptions={({route, navigation}) => ({
                headerShown: true,
               header: () => (            
            <View style={{flexDirection: 'row', backgroundColor: colors.primary}}>
                <View style={{marginTop: 55, marginLeft: 10}}>
                <Button 
                title='Go back'
                onPress={() => navigation.goBack()}
                color={colors.tertiary}           
                />
                </View>
                <Header title={
                    route.name === "Home" ? "Home":
                    route.name === "Products" ? route.params.category:
                    "Detalles"
                }/>

            </View>
            ),
            // headerLeft: () => (
            //     <Button 
            //     title="Back"
            //     onPress={() => navigation.goBack}
            //     color={colors.secondary}
            //     />
            // ),
            })} >
                    
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products}
                options={({route}) => ({
                    headerTitle: route.params.category || "Productos"
                })}/>
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator