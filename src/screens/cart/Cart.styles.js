import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    containerCart: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        marginLeft: 'auto',
        width: '40%',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
    },
    textPrice: {
        textAlign: 'right',
        fontFamily: 'GaretBook',
        fontSize: 20,
        color: colors.tertiary,
        padding: 5,
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'GaretHeavy',
        fontSize: 25,
        color: colors.tertiary,
        padding: 5,
        marginTop: 5,
        borderWidth: 2,
        borderColor: colors.tertiary,
        borderRadius: 10
    }
})