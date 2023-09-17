import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    cardContainer:{
        marginTop: 10,
        marginHorizontal: 20,
        // marginVertical: 10,
        padding: 15,
        justifyContent: "center",
        alignItems: "flex-start",
        height: 60,
        minWidth: 90,
        maxWidth: 500,
        width: '90%',
    },
    text: {
        color: colors.secondary,
        fontSize: 18,
        fontFamily: 'GaretBook'
    }
})