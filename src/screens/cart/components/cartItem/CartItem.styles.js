import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: colors.tertiary,
        padding: 8,
        borderBottomWidth: 3,
        borderBottomColor: colors.primary
    },
    name: {
        fontSize: 18,
        fontFamily: 'GaretHeavy',
        color: colors.primary
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailsText: {
        fontFamily: 'GaretBook',
        fontSize: 16,
        color: colors.primary,
    }
})