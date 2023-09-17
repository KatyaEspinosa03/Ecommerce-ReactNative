import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    image:{
        height: '40%',
        width: '80%',
        borderWidth: 8,
        borderColor: colors.tertiary,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    textProduct: {
        marginTop: 10,
        fontSize: 24,
        fontFamily: "GaretHeavy",
        color: colors.tertiary,
    },
    textDescription: {
        fontSize: 16,
        fontFamily: "GaretBook",
        color: colors.tertiary,
    },
    price: {
        fontSize: 20,
        fontFamily: "GaretBook",
        color: colors.tertiary,
        alignSelf: 'flex-start',
        marginTop: 5,
        marginVertical: 5,
    }

})