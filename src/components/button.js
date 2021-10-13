import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { ScaledSheet } from 'react-native-size-matters'
import color from '../util/color'
import font from '../assets/fonts'
const Button = ({ text, click }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={click} style={styles.btnContainer}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = ScaledSheet.create({
    btnContainer: {
        backgroundColor: color.primary,
        padding: "10@s",
        width: '95%',
        borderRadius: "17@s",
        marginBottom: '15@vs',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: font.bold,
    }
});

export default Button
