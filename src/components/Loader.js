import React from 'react'
import { View, ActivityIndicator, Modal, Text } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import color from '../util/color'
import font from '../assets/fonts'

const Loader = ({ loading }) => {
    return (
        <Modal visible={loading} transparent>
            <View style={styles.container}>
                <View style={styles.box}>
                    <ActivityIndicator color={color.primary} size="large" />

                    <Text style={styles.text}>Signing you in to Pangolin Wallet...</Text>
                </View>
            </View>
        </Modal>
    )
}
const styles = ScaledSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    box: {
        borderRadius: "15@ms",
        width: "300@s",
        height: "250@vs",
        justifyContent: 'space-between',
        paddingVertical: "20@vs",
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: '10@vs',
        marginBottom: '20@vs',
        marginHorizontal: '50@s',
        fontFamily: font.regular,
        color: color.grey
    },
})

export default Loader
