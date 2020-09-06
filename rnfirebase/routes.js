import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const AppStack = createStackNavigator();

import LoginF from './screens/LoginF';
import Profile from './screens/Profile';
import Signup from './screens/Signup';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="LoginF" component={LoginF} />
                <AppStack.Screen name="Signup" component={Signup} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

