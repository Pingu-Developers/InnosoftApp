import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Contact from './Contact';
import HowToGetTo from './HowToGetTo';
import Organization from './Organization';
import AboutUs from './AboutUs';
import PopUpTransport from './PopUpTransport';
import InnosoftDays from './InnosoftDays';

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
          <Stack.Screen name="AboutUs" options={{headerTintColor:'#f2f2f2'}}  component={AboutUs} />
          <Stack.Screen name="InnosoftDays" component={InnosoftDays} />
          <Stack.Screen name="Contactanos" component={Contact} />
          <Stack.Screen name="Como Llegar" component={HowToGetTo} />
          <Stack.Screen name="Organización" component={Organization}/>
          <Stack.Screen name="Transporte" component={PopUpTransport}/>
      </Stack.Navigator>
  )
};