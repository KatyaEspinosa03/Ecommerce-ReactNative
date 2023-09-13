import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    image:{
        height: '40%',
        width: '100%'
    },
    title:{
        fontSize: 24,
        fontFamily: "GaretHeavy",
        marginVertical: 15,
    },
    price: {
        fontSize: 20,
        fontFamily: "GaretBook",
        marginVertical: 15,
    }

})