import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import AuthHeader from '../../../components/AuthHeader'


import InputField from '../../../components/InputField'
import Button from '../../../components/button'
import { Center } from 'native-base';
import {ListView} from '../MainWallet/listView'

const Receve = ({ navigation }) => {
    return (
        // <GradientContainer small>

            <View style={styles.container}>
                <View style={styles.mainView}>
                <AuthHeader click={() => navigation.goBack()} />
                <Text style={{fontSize:20}}>Receive</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('ReceiveBTC')}>
                    <Text style={{fontSize:19,fontWeight:'bold',color:'#FF6B00'}} onPress={()=> navigation.navigate('ReceiveBTC')}>Done</Text>
                </TouchableOpacity>
                </View>

                <View style={{paddingTop:30,paddingBottom:20}}>
                    <View style={styles.viewAssests}>
                    <View style={{
                        position:'relative',
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                        <Icon name='search' size={20} color='#2C2F36'/>
                        {/* <Foundation name='dollar' size={25} color='#FF6B00' style={{position: 'absolute', zIndex: 99}} />   */}
                    </View>
                    <View style={{width:'100%'}}>
                            <TextInput 
                                 editable
                                 style={{height:40}}
                                 maxLength={40}
                                 placeholder="Search"
                            />
                    </View>
                    </View> 
                </View>
                <ScrollView> 
                    <ListView />
                </ScrollView>
            </View>
        // {/* </GradientContainer> */}

    )
}

export default Receve