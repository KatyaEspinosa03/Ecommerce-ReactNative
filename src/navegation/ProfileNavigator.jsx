import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { Header } from "../components";
import { colors } from "../constants/colors";
import { Profile, Location, Details } from "../screens";

const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        header: () => (
          <View
            style={{ flexDirection: "row", backgroundColor: colors.primary }}
          >
            <View style={{ marginTop: 55, marginLeft: 10 }}>
              <Button
                title="Go back"
                onPress={() => navigation.goBack()}
                color={colors.tertiary}
              />
            </View>

            <Header title="Perfil" />
          </View>
        ),
      })}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Location" component={Location} />
      <ProfileStack.Screen name="Details" component={Details} />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
