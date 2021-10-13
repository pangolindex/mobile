import React from 'react'
import { View, Text, TouchableOpacity, TextInput,Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Foundation from 'react-native-vector-icons/Foundation';
import GradientContainer from '../../../components/GradientContainer'
//Utils
import styles from './style'
import AuthHeader from '../../../components/AuthHeader'
import {ListView} from '../MainWallet/listView'

const Receve = ({ navigation }) => {
    return (
            <View style={styles.container}>
                <View style={styles.mainView}>
                <AuthHeader click={() => navigation.goBack()} />
                <Text style={{fontSize:20}}>Receive BTC</Text>
                <Text />
                </View>

                <View style={{paddingTop:30,paddingBottom:20}}>
                    <View style={styles.viewAssests}>
                    <View style={{
                        position:'relative',
                        justifyContent:'center',
                        alignItems:'center'
                        }}>
                        <Icon name='search' size={20} color='#2C2F36'/>
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

                <View style={{paddingTop:30,paddingBottom:5,justifyContent:'center',alignSelf:'center'}}>
                <Image
                    style={{width:40,height:40,borderRadius:20}}
                    source={{uri: 'https://s3-alpha-sig.figma.com/img/bd12/fcd2/37c2fd022aaef1dd724cd4e399fc4541?Expires=1633910400&Signature=J1OKx9QNhsstOvHaVOyoTq3nTBNv7hi-IizGlVrv4MDAQfXqft1~G3q1YZK9ngBDxkFlnK3QFVohQUvwDJVNcxampzcg4CtmbgAjUe1g6-IbLCbsvNtlOsYk86FoKi87MFk8ZeyIx45KaOqmRQKKxw94n7EN9fc8tNBnXj5ZyxAN~Q8bDoGZi7~U42LA8KF4h2hrnRpAZ9L7Ab1YC6XwuIU2cxaHDKRM9IvhciZwC~xnpbqGdhlquf89O0KfDaxwc4GWK6rzBL~eI5HndygnNNuGruD4pxi8RjIuAP9qOtTLY1Lt~LmLtHxQUUVpUcixq6Jq6M9P02wMNLx3536BLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}
                />
                </View>
                <View style={{justifyContent:'center',alignSelf:'center'}}>
                    <Text>Pangolin Wallet</Text>
                </View>
                <View style={{paddingTop:30}}>
                    <View style={{alignSelf:'center',padding:20,paddingTop:40,borderRadius:20,borderWidth:2,borderColor:'#FFFFFF'}}>
                        <Image
                            style={{width:150,height:150,paddingTop:40,alignSelf:'center'}}
                            source={{uri: 'https://s3-alpha-sig.figma.com/img/76e2/88d6/de9b272caba08e3ae4aa2937e64977b4?Expires=1633910400&Signature=TEF0cKYSCc~VCjKMoISBXWpq5Bw4Xyc4k041eKJjt~78tprd0zaRFVbOvN7foOzW5tfydpTUfJLVLdZG8eqgoxsfqC5G8~sD3bpBYgRr4UDOC-L6iayXwetxtsbvfrFK52GDGCBt9p-sMqKJCJRTWi-5b6fBimGcj5kEOQc8ciBvejVZa3hk~YyR7l7kizZ01ZTrxxC1xcJXuWOVxuKVelvtaqCvSR~iCuprYsKuX0faBIYGo4OHfa5j8SHI6tc4iamxOz99dBNflCwK5qfvLw58Zjm3C5f~7ZPTZybo2Eg8IrPj3VwPMggSnbfOSzamoy4VGacJbGeAkZe44Xa1gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}}
                        />
                    <View style={{width:200,alignSelf:'center',borderColor:'#FFFFFF',paddingTop:20}}>
                        <Text>aogfihsd4jgwiuhf5okas6mlmxbh8uuy7euih5f</Text>
                    </View>
                    </View>
                </View>

                <View style={{justifyContent:'center',alignSelf:'center',padding:40,alignItems:'center'}}>
                    <Text>
                    Send only Bitcoin (BTC) to this address. Sending any other coins may result in permanent loss.
                    </Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>
                    <TouchableOpacity style={{padding:20}}>
                        <View style={styles.view1}>
                            <View style = {styles.circleView} >
                            <View style={styles.view2}>
                                <Icon name="content-copy" size={22} color="white"  />
                            </View>
                            </View> 
                            <Text style={{color:'#ee9f34'}}>Receive</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:20}}>
                        <View style={styles.view1}>
                            <View style = {styles.circleView} >
                            <View style={styles.view2}>
                                <Icon name="ios-share" size={22} color="white"  />
                            </View>
                            </View> 
                            <Text style={{color:'#ee9f34'}}>Share</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Receve