import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: `${colors.quinary}95`,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: 200,
        width: 300,
        top: '50%',
        transform: [{translateX: 50}, {translateY: -100}],
        borderRadius: 10,
    },
    message: {
        fontFamily:'GaretHeavy',
        textAlign: 'center',
        fontSize: 20,
        color: colors.tertiary,
        padding: 8,
    },
    close: {
        padding: 2,
        backgroundColor: colors.tertiary,
        borderRadius: 5,
       marginTop: 10,
    },
    closeText: {
        fontFamily: 'GaretHeavy',
        color: colors.secondary,
        fontSize: 18,

    }
})