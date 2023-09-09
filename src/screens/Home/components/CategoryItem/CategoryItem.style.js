import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    cardContainer:{
        marginTop: 10,
        marginHorizontal: 20,
        // marginVertical: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
        height: 60,

    },
    text: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
    }
})