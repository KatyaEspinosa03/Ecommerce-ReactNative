
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";
import {Orders} from '../screens'

const Stack = createNativeStackNavigator()

function OrdersNavigator() {
    return(
            <Stack.Navigator initialRouteName='Orders' 
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

                <Header title="Orders"/>
            </View> ),
})} >
                    
                <Stack.Screen name='Orders' component={Orders} />

            </Stack.Navigator>
    )
}

export default OrdersNavigator