import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import AuthHeader from '../../../components/AuthHeader'
import {ListView} from '../MainWallet/listView'
import { style } from 'styled-system';

const Receve = ({ navigation }) => {
    return (
        <>
            <View style={{...styles.mainView,backgroundColor:'#FF6B00',paddingBottom:10,paddingTop:50, justifyContent:'space-between',padding:20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color="white" size={25} style={{alignSelf:'center'}}/>
                </TouchableOpacity>
                    <Text style={{fontSize:20,color:'white'}}>Wallets</Text>
                    <Text />
                </View>
             <View style={styles.container}>
                 <Text style={styles.TextStyle}>Multi-coin Wallets</Text>

                 <View style={{paddingTop:5,paddingBottom:5}}>
                     <View style={styles.viewAssests}>
                     <View style={{...styles.shadowIcons,justifyContent:'center',alignSelf:'center'}}>
                         <MIcon name='shield-outline' size={35} color='#FF6B00'/>
                     </View>
                     <View style={styles.view1}>
                         <Text style={{fontWeight:'bold'}}>Main Wallet</Text>
                         <Text style={{fontWeight:'bold',color:'gray'}}>Multi-coin Wallets</Text>
                     </View>
                     <View style={{justifyContent:'center',alignSelf:'center'}}>
                         <Icon name='info-outline' size={30} color='#929292'/>
                     </View>
                     </View> 
                 </View>
             </View>
        </>

    )
}

export default Receve