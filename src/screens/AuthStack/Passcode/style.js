import { ScaledSheet } from 'react-native-size-matters'
import color from '../../../util/color'
import font from '../../../assets/fonts'

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: "13@s",

    },

    contentContainer: {
        alignItems: 'center',
        marginTop: '30@vs',
    },
    name: {
        fontFamily: font.bold,
        color: color.black,
        marginTop: '20@vs',
        fontSize: '16@ms',

    },
    tag: {
        textAlign: 'center',
        marginTop: '10@vs',
        marginBottom: '20@vs',
        marginHorizontal: '30@s',
        fontFamily: font.regular,
        color: color.grey
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: color.primary,
        borderRadius: 10,
    },
    bigDot: {
        width: 15,
        height: 15,
    },
    secondaryDot: {
        backgroundColor: color.lightGrey,

    },



});
export default styles;