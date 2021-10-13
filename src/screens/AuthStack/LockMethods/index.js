import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
import AuthHeader from '../../../components/AuthHeader'
import {ListView} from '../MainWallet/listView'
import { style } from 'styled-system';
import Rectangle from '../../../components/Rectangle'

const LockMethod = ({ navigation }) => {
    return (
        // <GradientContainer small>
        <>

                <View style={{...styles.mainView,backgroundColor:'#FF6B00',paddingBottom:10,paddingTop:50, justifyContent:'space-between',padding:20}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" color="white" size={25} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                        <Text style={{fontSize:20,color:'white'}}>Lock Method</Text>
                        <Text />
                </View>
             {/* <View style={styles.container}>
                 <Text style={styles.TextStyle}>Profile</Text>

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
             </View> */}

                <View  style={{paddingTop:50}} />
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
        </>
        //  {/* </GradientContainer> */}

    )
}

export default LockMethod