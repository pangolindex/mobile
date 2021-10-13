import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput,ScrollView,Dimensions  } from 'react-native'
import GradientContainer from '../../../components/GradientContainer'
import Icon from 'react-native-vector-icons/Ionicons';

//Utils
import styles from './style'
import Style from '../../../util/Style'
import icon from '../../../assets/icons'
//Components
import Box from '../../../components/box'
import Button from '../../../components/button'

    import {
        widthPercentageToDP as wp,
        heightPercentageToDP as hp,
        listenOrientationChange as loc,
        removeOrientationListener as rol
      } from 'react-native-responsive-screen';
    
    
    export default class App extends React.Component {

    
        constructor(props)
            {
                super(props);
                this.state = { loading : false,  code:'', reset:false};
            }
        componentDidMount() {
            const timer = setTimeout(() => {
                this.setState({loading:false})
            }, 3000);
            return () => clearTimeout(timer)

          loc(this);
        }
        
        componentWillUnMount() {
          rol();
        }
    
    
        
      render() {
        const {navigation} = this.props;
        const {loading,reset} = this.state;
        var width = Dimensions.get('window').width; //full width
        var height = Dimensions.get('window').height; //full height
    return (
        <GradientContainer small>

            <View style={styles.container}>
            <ScrollView style={{width:'100%'}}>
                {/* <View style={Style.halfSpace} /> */}
                <View style={{paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('10%')}}>
                <View style={styles.contentContainer}>
                    <View style={Style.flex} />
                    <View style={[Style.filled_outer, { backgroundColor: 'rgba(255, 107, 0, .1)' }]}>

                        <View style={Style.filled_outer}>
                            <Box small icon={icon.setting} />
                        </View>
                    </View>
                    <Text style={styles.name}>{reset ? "Manual Backup" : "Sign in with a recovery phrase"}</Text>
                    <View>
                    </View><Text style={[styles.tag]}>
                    This is a 12 phrase you were given when you created your previous wallet.
                    </Text>
                    <TouchableOpacity>
                               <Text style={[styles.tag, { color: '#FF6B00' }]}>Learn More. </Text>
                    </TouchableOpacity>

                </View>
                <View style={{padding:20}}>
                <View style={{...styles.box, borderLeftWidth:1,borderRightWidth:1,borderRadius:30}}>
                <Icon name="lock-closed" size={24} color="black"  style={{paddingTop:20}}/>
                    {/* {!isSelected || reset ? <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        contentContainerStyle={{ paddingVertical: 10, }}
                        renderItem={({ item }) => (
                            <View style={styles.dataRow}>
                                <Text style={styles.index}>{item.id} </Text>
                                <Text style={styles.text}> {item.name}</Text>

                            </View>
                        )}
                    /> : null} */}
                </View>
                </View>


                    <View style={{ flex: 1 }}>
                        <View style={Style.flex} />
                        <View style={[Style.align, { paddingHorizontal: 13 }]}>
                            <Button text="Restore with recovery phrase" click={() => navigation.navigate('MainWallet')} />
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        </GradientContainer>
    )
}
}
