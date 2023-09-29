import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    productContainer: {
        backgroundColor: colors.tertiary,
        borderRadius: 15,
        marginTop: 10,
        padding: 20,
    },
    image:{
        height: '50%',
        width: '80%',
        borderWidth: 5,
        borderColor: colors.quaternary,
        borderRadius: 8,
        marginTop: 15,
        alignSelf: 'center',
        resizeMode: 'cover'
    },
    textProduct: {
        marginTop: 10,
        fontSize: 24,
        fontFamily: "GaretHeavy",
        color: colors.secondary,
    },
    textDescription: {
        fontSize: 16,
        fontFamily: "GaretBook",
        color: colors.quaternary,
    },
    price: {
        fontSize: 20,
        fontFamily: "GaretBook",
        color: colors.quaternary,
        alignSelf: 'flex-start',
        marginTop: 5,
        marginVertical: 5,
    },
    counter:{
        marginTop: 20,
    },

})