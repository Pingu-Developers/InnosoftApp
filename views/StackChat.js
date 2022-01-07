import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import LoginScreen from '../chat/screens/LoginScreen';
import ChatScreen from '../chat/screens/ChatScreen';
import LobbyScreen from '../chat/screens/LobbyScreen';

export default function StackAboutUs() {
  const Stack = createStackNavigator ();
  return (
      <Stack.Navigator 
      screenOptions={{
          presentation: 'modal',
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitle:'Volver',
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
        }}>
            <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
            <Stack.Screen name="Lobby" component={LobbyScreen}/>
            <Stack.Screen name="Sala" component={ChatScreen}/>
      </Stack.Navigator>
  )
};