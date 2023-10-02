import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image:{
        height: '40%',
        aspectRatio: 1,   
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
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: colors.tertiary,
        width: '50%',
        height: 40,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: 'GaretHeavy',
        color: colors.secondary,
        fontSize: 20,
        padding: 5,
    },
    subtext:{
        fontFamily: 'GaretBook',
        color: colors.quaternary
    }
})