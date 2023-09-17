import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        backgroundColor: colors.primary,
        marginTop: 5,
    },
    input:{
        color: 'white',
        backgroundColor: colors.tertiary,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        width: '80%',
        fontSize: 20,
        marginBottom: 5,
        marginHorizontal: 3,
    }
})