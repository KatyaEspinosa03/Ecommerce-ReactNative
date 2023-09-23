import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
      counterContainer: {
        flexDirection: 'row',
        backgroundColor: colors.tertiary,
        justifyContent: 'space-between',
        height: 40,
        padding: 2,
        marginTop: 20,
        borderRadius: 10
      },
      counterButtons: {
        backgroundColor: colors.tertiary,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 10,
      },
      signs: {
        fontSize: 20,
        fontFamily: 'GaretBook',
        color: colors.primary,
      },
    })