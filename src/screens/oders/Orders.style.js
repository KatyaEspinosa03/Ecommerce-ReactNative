import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    list: {
        backgroundColor: colors.quaternary,
        padding: 5,
        borderWidth: 2,
        borderColor: colors.primary,
        marginHorizontal: 10,
        marginTop: 4,
        borderRadius: 10,
    },
    title:{
        fontFamily: 'GaretHeavy',
        fontSize: 20,
        color: colors.tertiary,
        width: '70%',
        marginHorizontal: 10,
    },
    quantity:{
        fontFamily: 'GaretBook',
        fontSize: 18,
        color: colors.tertiary,
        marginTop: 2,
        textAlign: 'right',
        marginRight: 5,
    },
    image: {
        alignSelf: 'left',
        height: 100,
        width: 100,
        borderRadius: 10
    },
    titleContainer:{
        flexDirection: 'row'
    }
})