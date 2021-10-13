import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import AuthHeader from '../../../components/AuthHeader'

import InputField from '../../../components/InputField'
import Button from '../../../components/button'
import { Center } from 'native-base';

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
        // <GradientContainer small>
            <View style={styles.container}>
                <ScrollView style={{width:'100%'}}>
                <View style={styles.mainView}>
                <AuthHeader click={() => navigation.goBack()} />
                <Text style={{fontSize:20}}>SEND BNB</Text>
                <Icon name="filter-variant" size={35} color="#FF6B00" />
                </View>

                <View>
                    <Text style={styles.sendText}>Send to</Text>
                    <View style={styles.sendViewIn}>

                        <View style={{width:'70%'}}>
                            <TextInput 
                                 multiline={true}
                                 numberOfLines={4}
                                 editable
                                 maxLength={40}
                                 placeholder="Public Address (0x..) or ENX domain"
                            />
                        </View>
                        <Icon name="content-copy" size={25} color="#FF6B00" style={{alignSelf:'center'}}/>
                        <Icon name="qrcode-scan" size={25} color="#FF6B00" style={{alignSelf:'center'}}/>

                    </View>
                </View>

                <View>
                    <View style={styles.secondView}>
                        <Text style={styles.Assests}>Assests</Text>
                        <Text style={styles.balance}>Balance: 0</Text>
                    </View>
                    <View style={styles.viewAssests}>
                    <View style={{
                        position:'relative',
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                        <Icon name='sync' size={45} color='#FF6B00'/>
                        <Foundation name='dollar' size={25} color='#FF6B00' style={{position: 'absolute', zIndex: 99}} />  
                    </View>
                    <View style={styles.doller}>
                        <Text style={styles.dollerText}>≈ US $0.00</Text>
                        <Text style={styles.dollerText}>0 BNB</Text>
                    </View>

                       <View style={styles.view1} >
                            <Image
                            style={styles.Image}
                            source={{uri: 'https://s3-alpha-sig.figma.com/img/32bb/9b1b/a492d6360acee1621f3b04732ce0c0f5?Expires=1633910400&Signature=PG4lS5WO~raXNr8HtaMYt2fTyNLEPuHt5K~YIgonXpxnJvtuH5qeRIfYSccdzTiYiFvk3mb~2hFiqUTPvQ2y8lUT7Pc4ceOzb7VTqTOXdYM~amLD4foME~mr-FeVQF3SMN2i2m5r~QX5IYvlDQBnC7l8BRirRYPgT7tSnUZzxttIJ0Hj8lJPRCRjU20fSnTR3DJxgM1GlDn55T9XY~Z~W7OqBvBom0FuvtXWSZPlF7WSr5e7idpPT7qxLJREwec6emnY25tTXC11vc6n3W7A2ykUWQSFU8ad-Y1sVID0cDblLGCVNf5vrbyJxf~HPZoVmCB8YCJNlTvjsHekbyfjOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}
                            />
                            <Text>BNB</Text>
                        </View>
                        <Icon name="chevron-down" size={25} color="#FF6B00" style={{alignSelf:'center'}}/>
                    </View>
                </View>
                    <View style={{flex: 1,justifyContent:'flex-end', alignItems:'center',paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('43%')}}>
                    <Button text="Send" click={() => navigation.navigate('ProtectWallet')} />
                    </View>
            </ScrollView>
            </View>
        // {/* </GradientContainer> */}

    )
}
}
