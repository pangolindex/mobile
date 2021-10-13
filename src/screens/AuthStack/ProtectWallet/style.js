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
    icon: {
        resizeMode: 'contain',
        width: '25@s',
        height: '25@vs',
        marginEnd: '15@s'
    },
    FieldText: {
        color: color.black,
        fontFamily: font.bold

    },
    FieldSecText: {
        color: color.primary,
        fontFamily: font.regular

    },
    userIcon: {
        color: color.grey,
        marginHorizontal: "8@s",
        fontSize: '16@ms'
    },



});
export default styles;