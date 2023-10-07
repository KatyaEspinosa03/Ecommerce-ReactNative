import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width:300,
        height: 300
    }
})