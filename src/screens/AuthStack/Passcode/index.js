import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import GradientContainer from '../../../components/GradientContainer'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'

//Utils
import styles from './style'
import Style from '../../../util/Style'
import color from '../../../util/color'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import AuthHeader from '../../../components/AuthHeader'
import Loader from '../../../components/Loader'
import Button from '../../../components/button'


const ProtectWallet = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState("")

    return (
        <GradientContainer small>

            <View style={styles.container}>
                <View style={Style.halfSpace} />
                <AuthHeader click={() => navigation.goBack()} />

                <View style={styles.contentContainer}>
                    <View style={Style.flex} />
                    <View style={[Style.outer, { borderWidth: 0.3 }]}>

                        <View style={Style.outer}>
                            <Box small icon={icon.white_keypad} />
                        </View>
                    </View>
                    <Text style={styles.name}>Enter passcode</Text>
                    <Text style={styles.tag}>Please enter your passcode</Text>
                    {/* <View style={[Style.row, Style.align]}>
                        <View style={styles.dot} />
                        <View style={[styles.dot, styles.bigDot, { marginStart: 8, }]} />
                        <View style={[styles.dot, styles.secondaryDot, { marginHorizontal: 8 }]} />
                        <View style={[styles.dot, styles.secondaryDot]} />

                    </View> */}
                    <SmoothPinCodeInput
                        placeholder={<View style={[styles.dot, , styles.secondaryDot,]} />
                        }
                        mask={<View style={styles.dot} />
                        }
                        maskDelay={500}
                        password={true}
                        cellStyle={null}
                        cellStyleFocused={null}
                        autoFocus
                        animated
                        value={code}
                        onTextChange={code => setCode(code)}
                    />
                </View>
                <View style={Style.flex} />
                <View style={Style.align}>
                    <Button text="Save" click={() => navigation.navigate('BackupWallet')} />
                </View>
                <Loader loading={loading} />
            </View>
        </GradientContainer>
    )
}

export default ProtectWallet
