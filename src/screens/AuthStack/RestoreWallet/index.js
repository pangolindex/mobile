import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import GradientContainer from '../../../components/GradientContainer'
import Icon from 'react-native-vector-icons/Entypo';

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import Button from '../../../components/button'

const RestoreWallet = ({ navigation }) => {
    const [isSelected, setIsSelected] = useState(false)
    const [reset, setReset] = useState(false)
    return (
        <GradientContainer small>

            <View style={styles.container}>
                <View style={Style.halfSpace} />
                <View style={styles.contentContainer}>
                    <View style={Style.flex} />
                    <View style={[Style.filled_outer, { backgroundColor: 'rgba(255, 107, 0, .1)' }]}>

                        <View style={Style.filled_outer}>
                            <Icon name="download" size={80} color="white" style={{padding:20}} />
                        </View>
                    </View>
                    <Text style={styles.name}>{"Restore Wallet"}</Text>
                    <View>
                        <Text style={styles.tag}>
                            No backup found on iCloud.
                        </Text>
                        <Text style={styles.tag}>
                            Restore your wallet with the 12 word recovery phrase that you have written down.
                        </Text>
                    </View>

                </View>


                    <View style={{ flex: 1,justifyContent:'flex-end' }}>
                        <View style={[Style.align, { paddingHorizontal: 13 }]}>
                            <Button text="Restore with recovery phrase" click={() => navigation.navigate('Start')} />
                        </View>
                    </View>
                

            </View>
        </GradientContainer>
    )
}

export default RestoreWallet
