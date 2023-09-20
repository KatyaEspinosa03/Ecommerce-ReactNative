import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        height: 50,
        borderWidth: 1,
        borderColor: colors.secondary,
        // borderRadius: "50%",
        shadowColor: colors.quaternary,
        shadowOffset: {height: 2, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})

