import { StyleSheet } from "react-native";
import {colors} from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image:{
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.tertiary,
        borderRadius: 10,
        marginTop: 15,
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between',
        marginHorizontal: 20,

    },
    cameraButton: {
        width: '100%',
        padding: 2,
        backgroundColor: colors.tertiary,
        width: '90%',
        height: 40,
        borderRadius: 10,
    },
     confirmButton:{
        width: '50%',
        backgroundColor: colors.tertiary,
        borderRadius: 10,
        marginHorizontal: 10,
     },
     locationButton:{
        marginTop: 10,
        backgroundColor: colors.tertiary,
        borderRadius: 10,
        height: 40,
        width: '60%',
        marginHorizontal: 20

     },
    text: {
        color: colors.secondary,
        fontFamily: 'GaretBook',
        fontSize: 20,
    }
})