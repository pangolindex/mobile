import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
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
                <View style={{...styles.mainView,backgroundColor:'#FF6B00',paddingBottom:10,paddingTop:50,}}>
                <Text />
                <Text style={{fontSize:20,color:'white'}}>Profile</Text>
                <Text />
                </View>
             <View style={styles.container}>
             <ScrollView style={styles.scrollView} >
                 <Text style={styles.TextStyle}>Profile</Text>
                <TouchableOpacity> 
                    <View style={{paddingTop:5,paddingBottom:5}}>
                        <View style={styles.viewAssests}>
                        <View style={styles.shadowIcons}>
                            <Text style={{color:'#FF6B00'}}>I</Text>
                        </View>
                        <View style={styles.view1}>
                            <Text style={{fontWeight:'bold'}}>@iamUber</Text>
                        </View>
                        <View>
                            <Icon name='chevron-right' size={30} color='#929292'/>
                        </View>
                        </View> 
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity onPress={()=>navigation.navigate('Wallets')}>
                 <View style={{paddingTop:20}}>
                     <View style={styles.viewAssests}>
                     <View style={styles.shadowIcons}>
                         <Icon name='account-balance-wallet' size={22} color='#FF6B00'/>
                     </View>
                     <View style={styles.view2}>
                         <Text style={{fontWeight:'bold'}}>Wallets</Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>
                         <Text style={{justifyContent:'center',alignSelf:'center',color:'#929292'}}>  Main Wallet </Text>
                         <Icon name='chevron-right' size={30} color='#929292'/> 
                     </View>
                     </View> 
                 </View>
                 </TouchableOpacity>


                 <Text style={styles.TextStyle}>Security</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('LockMethods')}>
                <View style={{paddingTop:5,paddingBottom:5}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold'}}>App Lock</Text>
                    </View>
                    <View>
                        <Icon name='chevron-right' size={30} color='#929292'/>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>

                <Text style={styles.TextStyle}>Advanced</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Manage')}>
                <View style={{paddingTop:5,paddingBottom:5}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold'}}>Advanced Settings</Text>
                    </View>
                    <View>
                        <Icon name='chevron-right' size={30} color='#929292'/>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>

                <Text style={styles.TextStyle}>About Pangolin Wallet</Text>

                <TouchableOpacity>
                <View style={{paddingTop:5,paddingBottom:5}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold'}}>Version</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>
                        <Text styles={{color:'#929292',alignSelf:'center',justifyContent:'center'}}>24.11.230</Text>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('LegalSettings')}>
                <View style={{paddingTop:5,paddingBottom:5}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold'}}>Legal</Text>
                    </View>
                    <View>
                    <Icon name='chevron-right' size={30} color='#929292'/>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>

                <Text style={styles.TextStyle}>Others</Text>

                <TouchableOpacity>
                <View style={{paddingTop:5,paddingBottom:5}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold'}}>Contact Us</Text>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={{paddingTop:5,paddingBottom:30}}>
                    <View style={styles.viewAssests}>
                    <View style={styles.view3}>
                        <Text style={{fontWeight:'bold',color:'#EB5757'}}>Sign out</Text>
                    </View>
                    </View> 
                </View>
                </TouchableOpacity>
                 
                </ScrollView>
             </View>
        </>

    )
}

export default Receve