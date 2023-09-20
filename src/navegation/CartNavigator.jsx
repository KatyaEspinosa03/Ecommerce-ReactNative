
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";
import {Cart} from '../screens'

const Stack = createNativeStackNavigator()

function CartNavigator() {
    return(
            <Stack.Navigator initialRouteName='Cart' 
            screenOptions={({navigation}) => ({
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

                <Header title="Carrito"/>
            </View> ),
})} >
                    
                <Stack.Screen name='Cart' component={Cart} />

            </Stack.Navigator>
    )
}

export default CartNavigator