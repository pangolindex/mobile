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
        marginHorizontal: '20@s',
        fontFamily: font.regular,
        color: color.grey
    },
    userIcon: {
        color: color.grey,
        marginHorizontal: "8@s",
        fontSize: '16@ms'
    },
    laterText: {
        textAlign: 'center',
        marginVertical: '20@vs',
        marginHorizontal: '80@s',
        fontFamily: font.bold,
        color: color.primary,
        textDecorationLine: 'underline',
    },
    checkbox: {
        width: '20@s',
        height: '20@vs',
        resizeMode: 'contain'
    },
    unchecked: {
        borderWidth: 1,
        borderColor: color.primary,
        width: '20@s',
        height: '19@s',
        borderRadius: 3,
        resizeMode: 'contain',
        marginTop: 2

    },
    checkedText: {
        fontFamily: font.regular,
        color: color.black,
        marginHorizontal: '10@s'
    }



});
export default styles;