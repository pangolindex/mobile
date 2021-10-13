import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image,ScrollView,Dimensions } from 'react-native'
import Loader from '../../../components/Loader'
import GradientContainer from '../../../components/GradientContainer'

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
                this.state = { loading : false,  code:''};
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
        const {loading,isChecked} = this.state;
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

                    <Box small icon={icon.db} />
                    <Text style={styles.name}>Backup Your Wallet</Text>
                    <Text style={styles.tag}>You will be shown a secret recovery phrase on the next screen. The recovery phrase is the only key to your wallet. It will allow you to recover access to your wallet if your phone is lost or stolen.</Text>

                </View>

                <View style={{...Style.flex,paddingTop:Math.ceil(width) > Math.ceil(height) ? hp('5%') : hp('10%')}} />
                <View style={[Style.row, { padding: 10, paddingVertical: 25 }]}>
                    <TouchableOpacity onPress={() => this.setState({isChecked:!isChecked})}>
                        {isChecked ? <Image style={styles.checkbox} source={icon.checked} /> :
                            <View style={styles.unchecked} />}
                    </TouchableOpacity>
                    <Text style={styles.checkedText}>
                        I understand that if I lose my recovery phrase, I will not be able to access my account.
                    </Text>
                </View>
                <View style={Style.align}>
                    <Button text="Back up now" click={() => navigation.navigate('ManualBackup')} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.laterText}>Later</Text>
                </TouchableOpacity>
                <Loader loading={loading} />
            </View>
            </ScrollView>
            </View>
        </GradientContainer>
    )
}
}
