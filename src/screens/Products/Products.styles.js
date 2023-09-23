import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    listContainer: {
        flex: 1,
        marginTop: 15,
        padding: 10
    },
    wrapperStyle:{
        justifyContent: 'space-between'
    },
    productContainer:{
        width: '47%',
        backgroundColor: colors.tertiary,
        marginBottom: 20,
        alignItems: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        gap: 10
    },
    text: {
        fontFamily: "GaretHeavy",
        color: colors.secondary,
        fontSize: 15,
    },
    image: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        borderRadius: 10
    },
    price: {
        fontSize: 20,
        fontFamily: 'GaretBook',
        color: colors.quaternary

    }

})