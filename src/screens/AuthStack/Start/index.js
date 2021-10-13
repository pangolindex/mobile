import React from 'react'
import { View, Text, TouchableOpacity,ScrollView,Dimensions } from 'react-native'
//Utils
import styles from './style'
import Style from '../../../util/Style'
import color from '../../../util/color'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import Button from '../../../components/button'
import GradientContainer from '../../../components/GradientContainer'

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
        <GradientContainer>
            <View style={{...styles.container}}>
                 <ScrollView style={{width:'100%'}}>
                     <View style={{alignItems: 'center',paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('10%') : hp('45%')}}>
                <Box icon={icon.logo} />
                <View style={Style.flex} />

                <View style={styles.textContainer}>
                    <Text style={styles.name}>Pangolin</Text>
                    <Text style={styles.tag}>The easiest and most secure crypto wallet</Text>
                    <View style={{...Style.row,paddingBottom:20}}>
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
               </ScrollView>
            </View>
        </GradientContainer>
    )
  }
}

