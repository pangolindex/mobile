import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import color from '../util/color'
import font from '../assets/fonts'

const Rectangle = ({ children, touchable, click }) => {
    return touchable ? <TouchableOpacity onPress={click} activeOpacity={0.6} style={styles.Field}>
        {children}

    </TouchableOpacity> :
        <View style={styles.Field}>
            {children}
        </View>


}
const styles = ScaledSheet.create({
    Field: {
        borderRadius: '30@s',
        padding: '30@s',
        borderColor: color.grey,
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20@vs',
    },
})

export default Rectangle