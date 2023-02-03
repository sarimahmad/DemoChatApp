/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../Screens/Main';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Chat from '../Screens/Chat';
const Stack = createStackNavigator();


function AuthNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />  
    </Stack.Navigator>
  );
}

function MainNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AccountStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AccountStack" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;

