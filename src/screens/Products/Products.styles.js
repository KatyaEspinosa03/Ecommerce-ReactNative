import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    listContainer: {
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
    },
    cardContainer:{
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        height: 60,
        minWidth: 90,
        maxWidth: 500,
        width: '90%',
        borderRadius: 8
    },
    text: {
        fontFamily: "GaretBook",
        color: colors.primary,
        fontSize: 15,
    }

})