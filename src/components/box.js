import React from 'react'
import { View, Image } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import color from '../util/color'
const Box = ({ icon, small }) => {
    return (
        <View style={[styles.box, small && { padding: moderateScale(30) }]}>
            <Image style={styles.boxImage} source={icon} />
        </View>
    )
}
const styles = ScaledSheet.create({
    box: {
        width: "100@s",
        height: '100@s',
        backgroundColor: color.primary,
        borderRadius: "30@s",
        padding: '10@ms',
    },
    boxImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Box
