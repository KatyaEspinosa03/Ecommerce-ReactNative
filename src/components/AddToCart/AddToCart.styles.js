import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,
        padding: 2,
    },
    text: {
        fontFamily: "GaretHeavy",
        color: colors.tertiary,
        fontSize: 25,

    },
    pressedStyle: {
        backgroundColor: colors.quaternary,
    }
})