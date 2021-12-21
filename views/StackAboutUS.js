import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Contact from './Contact';
import HowToGetTo from './HowToGetTo';
import Organization from './Organization';
import AboutUs from './AboutUs';
import PopUpTransport from './PopUpTransport';

export default function StackAboutUs() {
  const Stack = createStackNavigator ();
  return (
      <Stack.Navigator
      screenOptions={{
          presentation: 'modal',
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
        }}>
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Contactanos" component={Contact} />
          <Stack.Screen name="Como Llegar" component={HowToGetTo} />
          <Stack.Screen name="Organización" component={Organization}/>
          <Stack.Screen name="PopUpTransport" component={PopUpTransport}/>
      </Stack.Navigator>
  )
};