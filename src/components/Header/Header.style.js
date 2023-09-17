import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 100,
        width: "100%",
        justifyContent: "center",
        // alignItems: "center",
        borderBottomWidth: 2,
        borderColor: colors.quaternary,
    },
    text: {
        marginTop: 40,
        padding: 10,
        fontSize: 30,
        color: colors.secondary,
        fontFamily: 'GaretHeavy'
    }
})