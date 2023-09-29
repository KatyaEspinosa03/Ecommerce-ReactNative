import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignContent: 'center'
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputEmail:{
        width: '95%',
        backgroundColor: colors.tertiary,
        height: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: colors.tertiary,
        width: '50%',
        height: 40,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})