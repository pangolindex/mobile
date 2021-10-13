import { ScaledSheet } from 'react-native-size-matters'
import color from './color'
const styles = ScaledSheet.create({
    space: {
        // height: '20%',
        width: '100%'
    },
    halfSpace: {
        height: '10%',
        width: '100%'
    },
    outer: {
        borderColor: color.primary,
        borderWidth: 0.7,
        borderRadius: "30@s",
        padding: '8@ms'
    },
    filled_outer: {
        backgroundColor: 'rgba(255, 107, 0, .2)',
        borderRadius: "30@s",
        padding: '8@ms'
    },
    flex: {
        flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    align: {
        alignItems: 'center',
    },
    just: {
        justifyContent: 'center',
    }

});
export default styles;