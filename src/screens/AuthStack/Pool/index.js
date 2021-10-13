import React from 'react'
import { View, Text, TouchableOpacity,Dimensions,ScrollView  } from 'react-native'
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
                {/* <View style={Style.halfSpace} /> */}
                <ScrollView style={{width:'100%'}}>
                <View style={{paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('10%')}}>
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
                <View style={{...Style.align,paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('1%') : hp('30%')}}>
                    <Button text="Accept" click={() => navigation.navigate('ProtectWallet')} />
                </View>
            </View>
            </ScrollView>
            </View>
        </GradientContainer>

    )
}

}