import React from 'react'
import {  TouchableOpacity, ScrollView,Alert,StyleSheet, Text, View, Dimensions } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import {ListView} from './listView';

//Utils
import styles from './style'

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
      const styles1 = StyleSheet.create({
        responsiveBox: {
          width: wp('84.5%'),
          height: Math.ceil(width) > Math.ceil(height) ? hp('70%') : hp('35%'),
          borderColor: 'orange',
          flexDirection: 'column',
          justifyContent: 'space-around' 
        }
      });
  
    return (
        <ScrollView 
            style={styles.scrollView} 
            >
             <View style={styles.container}>
                <View style={styles1.responsiveBox}>
                <Text style={styles.Token}>Tokens</Text>
                <Text style={styles.Price}>$0.00</Text>
                <Text style={styles.mainWallet}>Main Wallet</Text>
                <Text style={styles.mainWallet}></Text>
                <Text style={styles.mainWallet}></Text>

                <View style={{...styles.MultiItems,paddingBottom:50}}>
                    <TouchableOpacity onPress={() => navigation.navigate('SendMoney')}>
                    <View style={styles.view1} onPress={() => navigation.navigate('SendMoney')} >
                        <View style = {styles.circleView}>
                        <View style={styles.view2}>
                            <Icon name="upload" size={22} color="#FFFFFF"/>
                        </View>
                        </View> 
                        <Text style={styles.TextColor}>Send</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('RecieveMoney')}>
                    <View style={styles.view1}>
                        <View style = {styles.circleView} >
                        <View style={styles.view2}>
                            <Icon name="download" size={22} color="#FFFFFF"  />
                        </View>
                        </View> 
                        <Text style={styles.TextColor}>Receive</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Swap')}>
                    <View style={styles.view1} >
                        <View style = {styles.circleView} >
                        <View style={{...styles.view2,transform: [{ rotate: '90deg'}]}}>
                            {/* <FIcon name="retweet" size={20} color="#FFFFFF" /> */}
                            <Icon name="swap" size={22} color={"#FFFFFF"}/>
                        </View>
                        </View> 
                        <Text style={styles.TextColor}>Swap</Text>
                    </View>
                    </TouchableOpacity>
                      <TouchableOpacity onPress={() => navigation.navigate('Pool')}>
                        <View style={styles.view1} >
                            <View style = {styles.circleView}>
                            <View style={styles.view2}>
                                <Icon name="sync" size={22} color="#FFFFFF"/>
                            </View>
                            </View> 
                            <Text style={styles.TextColor}>Pool</Text>
                        </View>
                      </TouchableOpacity>
               </View>
                </View>
            </View>
                 <ListView />
        </ScrollView>
        );
  }
}
  