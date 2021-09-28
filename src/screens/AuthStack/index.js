import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Start from './Start'
import Legal from './Legal'
import Username from './Username'
import ProtectWallet from './ProtectWallet'
import Passcode from './Passcode'
import BackupWallet from './BackupWallet'
import ManualBackup from './ManualBackup'


const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
    )
}

export default index
