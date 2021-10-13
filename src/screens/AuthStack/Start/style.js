import { ScaledSheet } from 'react-native-size-matters'
import color from '../../../util/color'
import font from '../../../assets/fonts'

const styles = ScaledSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: "blue",

    },
    textContainer: {
        alignItems: 'center',
    },
    
    name: {
        fontFamily: font.bold,
        color: color.black
    },
    tag: {
        textAlign: 'center',
        marginTop: '10@vs',
        marginBottom: '20@vs',
        marginHorizontal: '80@s',
        fontFamily: font.regular,
        color: color.grey
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: color.primary,
        borderRadius: 10,
    },
    secondaryDot: {
        backgroundColor: color.lightGrey,

    },
    registerText: {
        textAlign: 'center',
        marginVertical: '20@vs',
        marginHorizontal: '80@s',
        fontFamily: font.bold,
        color: color.primary,
        textDecorationLine: 'underline',
    },


});
export default styles;