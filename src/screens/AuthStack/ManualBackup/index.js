import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ScrollView,Dimensions } from 'react-native'
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

  const data = [
    {
        id: 1,
        name: 'tongue'
    },
    {
        id: 2,
        name: 'shiver'
    },
    {
        id: 3,
        name: 'solve'
    },
    {
        id: 4,
        name: 'genius'
    },
    {
        id: 5,
        name: 'buzz'
    },
    {
        id: 6,
        name: 'water'
    },
    {
        id: 7,
        name: 'neglect'
    },
    {
        id: 8,
        name: 'bacon'
    },
    {
        id: 9,
        name: 'they'
    },
    {
        id: 10,
        name: 'dial'
    },
    {
        id: 11,
        name: 'join'
    },
    {
        id: 12,
        name: 'palace'
    },
]


    
    export default class App extends React.Component {

    
        constructor(props)
            {
                super(props);
                this.state = { isSelected : false,  reset: false};
            }
        componentDidMount() {
          loc(this);
        }
        
        componentWillUnMount() {
          rol();
        }
    
    
        
      render() {
        const {navigation} = this.props;
        const {isSelected,reset} = this.state;
        var width = Dimensions.get('window').width; //full width
        var height = Dimensions.get('window').height; //full height
    return (
        <GradientContainer small>

            <View style={styles.container}>
                {/* <View style={Style.halfSpace} /> */}
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
                    <Text style={styles.name}>{!reset ? "Manual Backup" : "Recovery Phrase"}</Text>
                    {!isSelected ? <View>
                        {!reset ? <Text style={styles.tag}>
                            Write down recovery phrase. Write these 12 words down or copy them to a password manager.</Text>
                            : <Text style={[styles.tag, { color: 'green' }]}>
                                ✔  Backed up
                            </Text>}
                    </View> : <Text style={[styles.tag]}>
                        Select words in the correct order
                    </Text>}

                </View>
                <View style={styles.box}>
                    {!isSelected || reset ? <FlatList
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
                    /> : null}
                </View>
                {isSelected && !reset ? <FlatList
                    data={data}
                    numColumns={4}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingVertical: 10, alignSelf: 'center', }}
                    renderItem={({ item }) => (
                        <View style={styles.dataBoxRow}>
                            <View style={styles.boxRow}>
                                <Text style={styles.text}> {item.name}</Text>
                            </View>
                        </View>
                    )}
                    ListFooterComponent={() => (
                        <>

                            <TouchableOpacity onPress={() => { this.setState({reset:true}); this.setState({isSelected:false}) }} style={styles.restBox}>
                                <Icon style={styles.reset} name="ios-reload-sharp" />
                                <Text style={styles.resetText}> Reset all</Text>

                            </TouchableOpacity>

                        </>
                    )}
                /> :


                    <View style={{ flex: 1 }}>

                        <TouchableOpacity>
                            <Text style={styles.laterText}>Copy to clipboard</Text>
                        </TouchableOpacity>
                        <View style={Style.flex} />

                        <View style={[Style.align, { paddingHorizontal: 13 }]}>
                            {/* {!reset ?
                                <Button text="Next" click={() => this.setState({isSelected:false})} /> */}
                                {/* :  */}
                                <Button text="Done" click={() => navigation.navigate('MainWallet')} />
                            {/* } */}
                        </View>
                        <View style={Style.flex} />

                    </View>
                }
            </View>
            </ScrollView>
            </View>
        </GradientContainer>
    )
}

}
