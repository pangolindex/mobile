import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Loader from '../../../components/Loader'
import GradientContainer from '../../../components/GradientContainer'

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import Button from '../../../components/button'
const BackupWallet = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);
        return () => clearTimeout(timer)
    }, [])
    return (
        <GradientContainer small>

            <View style={styles.container}>
                <View style={Style.halfSpace} />
                <View style={styles.contentContainer}>
                    <View style={Style.flex} />

                    <Box small icon={icon.db} />
                    <Text style={styles.name}>Backup Your Wallet</Text>
                    <Text style={styles.tag}>You will be shown a secret recovery phrase on the next screen. The recovery phrase is the only key to your wallet. It will allow you to recover access to your wallet if your phone is lost or stolen.</Text>

                </View>

                <View style={Style.flex} />
                <View style={[Style.row, { padding: 10, paddingVertical: 25 }]}>
                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                        {isChecked ? <Image style={styles.checkbox} source={icon.checked} /> :
                            <View style={styles.unchecked} />}
                    </TouchableOpacity>
                    <Text style={styles.checkedText}>
                        I understand that if I lose my recovery phrase, I will not be able to access my account.
                    </Text>
                </View>
                <View style={Style.align}>
                    <Button text="Back up now" click={() => navigation.navigate('ManualBackup')} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.laterText}>Later</Text>
                </TouchableOpacity>
                <Loader loading={loading} />

            </View>
        </GradientContainer>
    )
}

export default BackupWallet
