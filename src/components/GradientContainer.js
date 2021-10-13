import React from 'react'
import { ScaledSheet, } from 'react-native-size-matters'
import color from '../util/color'
import LinearGradient from 'react-native-linear-gradient';

const GradientContainer = ({ children, small }) => {
    const array = small ? [color.gadient, 'white', 'white', 'white'] : [color.gadient, 'white', 'white']
    return (
        <LinearGradient colors={array} style={styles.linearGradient}>
            {children}
        </LinearGradient>
    )


}
const styles = ScaledSheet.create({
    linearGradient: {
        flex: 1,
        borderRadius: 5
    },
})

export default GradientContainer