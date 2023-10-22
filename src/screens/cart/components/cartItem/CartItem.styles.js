import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        marginHorizontal: 12,
        backgroundColor: colors.tertiary,
        padding: 8,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontFamily: 'GaretHeavy',
        color: colors.quaternary,
        width: '70%',
        marginHorizontal: 10,
        marginTop: 15,
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
    },
    subtitle: {
        fontFamily: 'GaretHeavy',
        color: colors.secondary,
        width: '80%',
        marginHorizontal: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    titleContainer:{
        flexDirection: 'row',
    }
})