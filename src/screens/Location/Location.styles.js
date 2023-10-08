import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary,
        gap: 20,
        padding: 30,
    },
    withoutLocation: {
        width: 200,
        height: 200,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.secondary,
        marginTop: 100,
    },
    locationText:{
        fontFamily: 'GaretBook',
        color: colors.tertiary,
        padding: 2,
    },
    title: {
        color: colors.secondary,
        fontFamily: 'GaretHeavy',
        fontSize: 25,
        textDecorationLine: 'underline'
    }
})