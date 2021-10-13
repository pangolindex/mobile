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
        // <GradientContainer small>
        <>

            <View style={{...styles.mainView,backgroundColor:'#FF6B00',paddingBottom:10,paddingTop:50, justifyContent:'space-between',padding:20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color="white" size={25} style={{alignSelf:'center'}}/>
                </TouchableOpacity>
                    <Text style={{fontSize:20,color:'white'}}>Manage</Text>
                    <Text />
                </View>
             <View style={styles.container}>
             <ScrollView>
                 <Text style={styles.TextStyle}>Name</Text>

                 <View style={{paddingTop:5,paddingBottom:5}}>
                     <View style={styles.viewAssests}>
                     <View style={styles.view1}>
                         <Text style={{fontWeight:'bold',paddingLeft:20}}>Main Wallet</Text>
                     </View>
                     </View> 
                 </View>

                 <Text style={styles.TextStyle}>Backup Options</Text>

                 <View style={{paddingTop:5}}>
                     <View style={styles.viewAssests}>
                     <View style={styles.shadowIcons}>
                         <Icon name='lock' size={22} color='#FF6B00'/>
                     </View>
                     <View style={styles.view2}>
                         <Text style={{fontWeight:'bold'}}>Show recovery phrase</Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center',}}>
                         <Text />
                         {/* <Text style={{justifyContent:'center',alignSelf:'center',color:'#929292'}}>  Main Wallet </Text> */}
                         <Icon name='chevron-right' size={30} color='#929292'/> 
                     </View>
                     </View> 
                 </View>


                 
                </ScrollView>
             </View>
        </>
        //  {/* </GradientContainer> */}

    )
}

export default Receve