import React from 'react'
import { View, TextInput } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import color from '../util/color'
import Style from '../util/Style'
import font from '../assets/fonts'
const InputField = ({ leftIcon, }) => {
    return (
        <View style={styles.Field}>

            {leftIcon()}
            <TextInput style={styles.input} placeholder="Enter username" />

        </View>
    )

}
const styles = ScaledSheet.create({
    Field: {
        borderRadius: '15@s',
        padding: '13@s',
        borderColor: color.grey,
        borderWidth: 0.5,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20@vs',
    },
    input: {
        margin: 0,
        padding: 0,
        width: '100%',
    }
})
export default InputField