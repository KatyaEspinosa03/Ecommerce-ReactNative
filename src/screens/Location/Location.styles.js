import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        gap: 20,
        paddingBottom: 130
    },
    withoutLocation: {
        width: 200,
        height: 200,
        borderWidth: 2,
        padding: 10,
        borderColor: colors.quaternary,
        backgroundColor: colors.quinary,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.secondary
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