import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientContainer from '../../../components/GradientContainer'

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import AuthHeader from '../../../components/AuthHeader'
import InputField from '../../../components/InputField'
import Button from '../../../components/button'

const Username = ({ navigation }) => {
    return (
        <GradientContainer small>

            <View style={styles.container}>
                <View style={Style.halfSpace} />
                <AuthHeader click={() => navigation.goBack()} />
                <View style={styles.contentContainer}>
                    <View style={Style.flex} />

                    <Box icon={icon.logo} />
                    <Text style={styles.name}>Pick your username</Text>
                    <Text style={styles.tag}>This is how other Wallet user can find you and send you payments</Text>

                </View>
                <InputField
                    leftIcon={() => <Icon style={styles.userIcon} name="user" />
                    }
                />
                <View style={Style.flex} />
                <View style={Style.align}>
                    <Button text="Accept" click={() => navigation.navigate('ProtectWallet')} />
                </View>

            </View>
        </GradientContainer>

    )
}

export default Username
