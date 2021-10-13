import React from 'react'
import {ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Stack
import AuthStack from './screens/AuthStack'


const Stack = createNativeStackNavigator();
const Route = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{flex:1}}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
        </ScrollView>
    )
}

export default Route
