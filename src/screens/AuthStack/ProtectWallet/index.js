import React from 'react'
import { View, Text, TouchableOpacity, Image,Dimensions,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import GradientContainer from '../../../components/GradientContainer'


//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import AuthHeader from '../../../components/AuthHeader'
import Rectangle from '../../../components/Rectangle'
import Button from '../../../components/button'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


export default class App extends React.Component {
    componentDidMount() {
      loc(this);
    }
    
    componentWillUnMount() {
      rol();
    }


    
  render() {
    const {navigation} = this.props;
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
        <GradientContainer small>
            <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
                {/* <View style={Style.halfSpace} /> */}
                <View style={{paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('10%')}}>
                <AuthHeader click={() => navigation.goBack()} />
                <View style={styles.contentContainer}>
                    <View style={Style.flex} />
                    <View style={[Style.outer, { borderWidth: 0.3 }]}>
                        <View style={Style.outer}>
                            <Box small icon={icon.lock} />
                        </View>
                    </View>
                    <Text style={styles.name}>Protect Your Wallet</Text>
                    <Text style={styles.tag}>Add an extra layer of security to keep your crypto safe</Text>

                </View>
                <View style={Style.flex} />
                <Rectangle touchable>
                    <View style={[Style.row, Style.align]}>
                        <Image style={styles.icon} source={icon.vector} />
                        <View>
                            <Text style={styles.FieldText}>Use Face ID</Text>
                            <Text style={styles.FieldSecText}>Recommended</Text>

                        </View>
                    </View>
                    <Icon style={styles.backIcon} name="arrow-forward-ios" />

                </Rectangle>
                <Rectangle touchable click={() => navigation.navigate('Passcode')}>
                    <View style={[Style.row, Style.align]}>
                        <Image style={styles.icon} source={icon.keypad} />
                        <View>
                            <Text style={styles.FieldText}>Setup Passcode</Text>

                        </View>
                    </View>
                    <Icon style={styles.backIcon} name="arrow-forward-ios" />

                </Rectangle>
                </View>
                </ScrollView>
            </View>
        </GradientContainer>
    )
}
}