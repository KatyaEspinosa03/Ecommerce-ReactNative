import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 16,
        paddingTop: 5,
        paddingBottom: '65%',
    },
    productContainer: {
        backgroundColor: colors.tertiary,
        borderRadius: 15,
        marginTop: 10,
        padding: 20,
    },
    image:{
        height: '50%',
        width: '90%',
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 10
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
    scrollViewStyle:{
        height: '80%'
    }

})