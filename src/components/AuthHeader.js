import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ScaledSheet } from 'react-native-size-matters'
import color from '../util/color'
import font from '../assets/fonts'
import Style from '../util/Style'

const AuthHeader = ({ text, click }) => {
    return (
        <View style={[Style.row, Style.align]}>
            <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={click}>
                <Icon style={styles.backIcon} name="arrow-back" />
            </TouchableOpacity>
            {text && <Text style={styles.backText}>Legal</Text>}

        </View>
    )
}
const styles = ScaledSheet.create({
    btn: {
        paddingEnd: '5@s',

    },
    backIcon: {
        fontSize: '22@ms'
    },
    backText: {
        fontFamily: font.bold,
        color: color.black,

        fontSize: '16@ms'
    },
});

export default AuthHeader
