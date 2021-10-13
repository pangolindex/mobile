import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome5';

//Screens
import Start from './Start'
import Legal from './Legal'
import Username from './Username'
import ProtectWallet from './ProtectWallet'
import Passcode from './Passcode'
import BackupWallet from './BackupWallet'
import ManualBackup from './ManualBackup'
import MainWallet from './MainWallet'
import Dex from './Dex'
import Settings from './Setting'
import SendMoney from './SendMoney'
import RecieveMoney from './ReceiveMoney'
import Swap from './Swep'
import Pool from './Pool'
import ReceiveBTC from './ReceiveBTC'
import RecoveryPhrase from './RecoveryPhrase'
import LockMethods from './LockMethods'
import Wallets from './Wallets'
import Manage from './Manage'
import LegalSettings from './LegalSettings'
import RestoreWallet from './RestoreWallet'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator initialRouteName="Wallet" screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name="Wallet" component={MainWallet} 
        options={{
            tabBarLabel: 'Wallet',
            tabBarActiveTintColor:'#FF6B00',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({ color, size }) => (
                <FIcon name="shield-alt" size={size} color={color}/>
            ),
          }}
          />
        <Tab.Screen name="Dex" component={Swap} 
        options={{
            tabBarLabel: 'Dex',
            tabBarActiveTintColor:'#FF6B00',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({ color, size }) => (
                <Icon name="swap" size={size} color={color}/>
            ),
          }}
          />
        <Tab.Screen name="Setting" component={Settings}  
        options={{
            tabBarLabel: 'Setting',
            tabBarActiveTintColor:'#FF6B00',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({ color, size }) => (
                <Icon name="setting" size={size} color={color}/>
            ),
          }}/>
      </Tab.Navigator>
    );
  }


const index = () => {
    return (
        <Stack.Navigator initialRouteName="Start" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Legal" component={Legal} />
            <Stack.Screen name="Username" component={Username} />
            <Stack.Screen name="ProtectWallet" component={ProtectWallet} />
            <Stack.Screen name="Passcode" component={Passcode} />
            <Stack.Screen name="BackupWallet" component={BackupWallet} />
            <Stack.Screen name="ManualBackup" component={ManualBackup} />
            <Stack.Screen name="MainWallet" component={MyTabs} />
            <Stack.Screen name="SendMoney" component={SendMoney} />
            <Stack.Screen name="RecieveMoney" component={RecieveMoney} />
            <Stack.Screen name="Swap" component={Swap} />
            <Stack.Screen name="Pool" component={Pool} />
            <Stack.Screen name="ReceiveBTC" component={ReceiveBTC} />
            <Stack.Screen name="RecoveryPhrase" component={RecoveryPhrase} />
            <Stack.Screen name="LockMethods" component={LockMethods} />
            <Stack.Screen name="Wallets" component={Wallets} />
            <Stack.Screen name="Manage" component={Manage} />
            <Stack.Screen name="LegalSettings" component={LegalSettings} />
            <Stack.Screen name="RestoreWallet" component={RestoreWallet} />
        </Stack.Navigator>
    )
}

export default index
