import React from 'react'
import { View, Text, TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
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
        <View style={{...styles.container}}>
             <ScrollView style={{width:'100%'}}>
            {/* <View style={Style.halfSpace} /> */}
            <AuthHeader text click={() => navigation.goBack()} />
            <View style={{paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('10%')}}>
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
            </ScrollView>
        </View>
    )
}
}


