import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import AuthHeader from '../../../components/AuthHeader'

import InputField from '../../../components/InputField'
import Button from '../../../components/button'
import { Center } from 'native-base';

const Send = ({ navigation }) => {
    return (
        // <GradientContainer small>
        <>
        <View style={{...styles.mainView,backgroundColor:'#FF6B00',paddingBottom:10,paddingTop:50,}}>
        <AuthHeader click={() => navigation.goBack()} />
        <Text style={{fontSize:20,color:'white'}}>Swap</Text>
        <Text />
        </View>

            <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
                <View style={{position:'relative'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.sendViewIn}>
                        <View style={{width:'60%'}}>
                         <Text style={{color:'#929292',fontSize:18}}>You Pay</Text>
                            <TextInput
                                style={{color:'#929292',fontSize:18}}
                                 placeholder="0"
                            />
                         <Text style={{color:'#929292',fontSize:18}}>Balance</Text>
                        </View>
                        <Image
                            style={{width:30,height:30,alignSelf:'center'}}
                            source={{uri: 'https://s3-alpha-sig.figma.com/img/32bb/9b1b/a492d6360acee1621f3b04732ce0c0f5?Expires=1633910400&Signature=PG4lS5WO~raXNr8HtaMYt2fTyNLEPuHt5K~YIgonXpxnJvtuH5qeRIfYSccdzTiYiFvk3mb~2hFiqUTPvQ2y8lUT7Pc4ceOzb7VTqTOXdYM~amLD4foME~mr-FeVQF3SMN2i2m5r~QX5IYvlDQBnC7l8BRirRYPgT7tSnUZzxttIJ0Hj8lJPRCRjU20fSnTR3DJxgM1GlDn55T9XY~Z~W7OqBvBom0FuvtXWSZPlF7WSr5e7idpPT7qxLJREwec6emnY25tTXC11vc6n3W7A2ykUWQSFU8ad-Y1sVID0cDblLGCVNf5vrbyJxf~HPZoVmCB8YCJNlTvjsHekbyfjOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}
                            />
                        <Text style={{alignSelf:'center'}}>BNB</Text>
                        <Icon name="chevron-right" size={25} color="black" style={{alignSelf:'center'}}/>
                    </View>
                </View>
                <View style={{position:'absolute',justifyContent:'center',alignSelf:'center',paddingTop:98,paddingLeft:250,}}>
                    <View style={{ borderWidth:1,borderRadius:30,borderColor:'#FFFFFF',backgroundColor:'white'}}>
                        <Icon name="swap-vertical" size={40} color="#FF6B00" style={{alignSelf:'center'}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.sendViewIn1}>
                        <View style={{width:'60%'}}>
                         <Text style={{color:'#929292',fontSize:18}}>You Pay</Text>
                            <TextInput
                                style={{color:'#929292',fontSize:18}}
                                 placeholder="0"
                            />
                         <Text style={{color:'#929292',fontSize:18}}>Balance</Text>
                        </View>
                        <Image
                            style={{width:30,height:30,alignSelf:'center'}}
                            source={{uri: 'https://s3-alpha-sig.figma.com/img/32bb/9b1b/a492d6360acee1621f3b04732ce0c0f5?Expires=1633910400&Signature=PG4lS5WO~raXNr8HtaMYt2fTyNLEPuHt5K~YIgonXpxnJvtuH5qeRIfYSccdzTiYiFvk3mb~2hFiqUTPvQ2y8lUT7Pc4ceOzb7VTqTOXdYM~amLD4foME~mr-FeVQF3SMN2i2m5r~QX5IYvlDQBnC7l8BRirRYPgT7tSnUZzxttIJ0Hj8lJPRCRjU20fSnTR3DJxgM1GlDn55T9XY~Z~W7OqBvBom0FuvtXWSZPlF7WSr5e7idpPT7qxLJREwec6emnY25tTXC11vc6n3W7A2ykUWQSFU8ad-Y1sVID0cDblLGCVNf5vrbyJxf~HPZoVmCB8YCJNlTvjsHekbyfjOQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}
                            />
                        <Text style={{alignSelf:'center'}}>BNB</Text>
                        <Icon name="chevron-right" size={25} color="black" style={{alignSelf:'center'}}/>
                    </View>
                </View>

                <View style={{justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{fontSize:20, color:'#929292',paddingTop:14,fontWeight:'bold'}}>1 BNB ≈ 1127.662 BNB</Text>
                </View>
                    

                </View>
                <View style={{flex: 1, alignItems:'center',paddingTop:30}}>
                    <Button text="Swap" click={() => navigation.navigate('ProtectWallet')} />
                </View>
                {/* <View>
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
                    <View style={{flex: 1,justifyContent:'flex-end', alignItems:'center'}}>
                    </View> */}
            </ScrollView>
            </View>
        </>
        // {/* </GradientContainer> */}

    )
}

export default Send
