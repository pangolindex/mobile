import { ScaledSheet, verticalScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native';
import color from '../../../util/color'
import font from '../../../assets/fonts'
const width = Dimensions.get('window').width;
const styles = ScaledSheet.create({
    container: {
        flex: 1,

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

    laterText: {
        textAlign: 'center',
        marginVertical: '20@vs',
        marginHorizontal: '80@s',
        fontFamily: font.bold,
        color: color.primary,
        textDecorationLine: 'underline',
    },
    box: {
        backgroundColor: 'rgba(238, 243, 243, 0.3)',
        borderWidth: 0.8,
        borderColor: color.black,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: "180@vs",
        paddingStart: '10@s'
    },

    dataRow: {
        flexDirection: "row",
        // justifyContent: 'space-between',
        paddingHorizontal: "15@s",
        width: width / 3,
        height: verticalScale((180 / 4) - 4.5),

    },
    dataBoxRow: {
        // flexDirection: 'row',
        margin: 3,
    },
    boxRow: {
        backgroundColor: 'rgba(238, 243, 243, 0.3)',
        borderWidth: 0.5,
        borderColor: color.black,
        borderRadius: 7,
        padding: 5,
        paddingHorizontal: 10
    },
    index: {
        color: color.grey,
        fontFamily: font.regular
    },
    text: {
        color: color.black,
        fontFamily: font.regular
    },
    restBox: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: '30@vs'

    },
    reset: {
        color: color.darkGrey,
    },
    resetText: {
        color: color.darkGrey,
        fontFamily: font.bold
    }



});
export default styles;