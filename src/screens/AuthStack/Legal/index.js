import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import AuthHeader from '../../../components/AuthHeader'
import Rectangle from '../../../components/Rectangle'
import Button from '../../../components/button'

const Legal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={Style.halfSpace} />
            <AuthHeader text click={() => navigation.goBack()} />
            <Text style={styles.tag}>Please review the Pangolin Wallet Privacy Policy and Terms of Service.</Text>
            <Rectangle touchable>
                <Text style={styles.FieldText}>Privacy Policy</Text>
                <Icon style={styles.backIcon} name="arrow-forward-ios" />

            </Rectangle>
            <Rectangle touchable>
                <Text style={styles.FieldText}>Terms of Service</Text>
                <Icon style={styles.backIcon} name="arrow-forward-ios" />

            </Rectangle>
            <View style={Style.flex} />
            <View style={Style.align}>
                <Button text="Accept" click={() => navigation.navigate('Username')} />
            </View>
        </View>
    )
}

export default Legal
