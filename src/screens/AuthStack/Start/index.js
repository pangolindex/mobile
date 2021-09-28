import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
//Utils
import styles from './style'
import Style from '../../../util/Style'
import color from '../../../util/color'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import Button from '../../../components/button'
import GradientContainer from '../../../components/GradientContainer'
const Start = ({ navigation }) => {
    return (
        <GradientContainer>
            <View style={styles.container}>
                <View style={Style.space} />
                <Box icon={icon.logo} />
                <View style={Style.flex} />

                <View style={styles.textContainer}>
                    <Text style={styles.name}>Pangolin</Text>
                    <Text style={styles.tag}>The easiest and most secure crypto wallet</Text>
                    <View style={Style.row}>
                        <View style={styles.dot} />
                        <View style={[styles.dot, styles.secondaryDot, { marginHorizontal: 5 }]} />
                        <View style={[styles.dot, styles.secondaryDot]} />

                    </View>
                </View>
                <View style={Style.flex} />
                <View style={Style.flex} />

                <Button text="Create a new wallet" click={() => navigation.navigate('Legal')} />
                <TouchableOpacity>
                    <Text style={styles.registerText}>I already have a wallet</Text>
                </TouchableOpacity>
            </View>
        </GradientContainer>
    )
}

export default Start
