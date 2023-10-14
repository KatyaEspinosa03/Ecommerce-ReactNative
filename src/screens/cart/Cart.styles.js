import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    containerCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        padding: 10,
        marginHorizontal: 10,
        position: 'absolute',
        height: 'auto',
        bottom: 0,
        left: 0,
        right: 0,
    },
    textPrice: {
        textAlign: 'right',
        fontFamily: 'GaretBook',
        fontSize: 20,
        color: colors.tertiary,
        padding: 5,
        marginTop: 20,
    
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
        borderRadius: 10,
    },
})