import { ScaledSheet } from 'react-native-size-matters'
import color from '../../../util/color'
import font from '../../../assets/fonts'

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: "13@s",
    },

    textContainer: {
        alignItems: 'center',
    },

    tag: {
        marginTop: '10@vs',
        marginBottom: '20@vs',
        fontFamily: font.regular,
        color: color.grey,
        marginEnd: '30@s',
    },
    backIcon: {
        color: color.grey,
    },
    FieldText: {
        fontFamily: font.bold,
        color: color.black,

    },


});
export default styles;