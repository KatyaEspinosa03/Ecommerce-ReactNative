import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.primary,

    },
    emptyWishlist: {
        color: colors.secondary
    },
    image:{
        height: 250,
        width: 150,
        borderColor: colors.quaternary,
        borderWidth: 4,
        borderRadius: 10,
    },
    imageContainer: {
       padding: 2,
       position: 'relative'
    },
    minusButton: {
        position: 'absolute',
        top: 2,
        left: 3,
        zIndex: 1,
        backgroundColor: colors.quaternary,
        borderRadius: 50,
    }
})