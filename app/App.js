import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import SignInScreen from './src/screens/Signin';
import SignUpScreen from './src/screens/Signup';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import MessageScreen from './src/screens/Message';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './src/core/fontawesome'
import useGlobal from './src/core/global';

const LightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white'
	}
}
const Stack = createNativeStackNavigator();

export default function App() {
  const [initialized] = useState(true);
  const authenticated= useGlobal(state => state.authenticated)
  console.log("soy la autenticacion")
  console.log(authenticated)

  return (
    <NavigationContainer theme={LightTheme} >
      <StatusBar barStyle='dark-content' />
      <Stack.Navigator>
        {!initialized ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
          </>
        ) : !authenticated ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Messages" component={MessageScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}