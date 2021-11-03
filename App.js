import React from 'react';
import MyDrawer from './MyDrawers';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack = createStackNavigator ();

  return (
    <View style={{flex:1, backgroundColor: '#2C4365',position:'absolute',top:0,bottom:0,left:0,right:0}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            presentation: 'modal',
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
          }}>
          <Stack.Screen name="Slash" component={Slash} />
          <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Slash = ({navigation}) => {
  return(
    <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor:'#2C4365',justifyContent:'center',alignItems:'center'}}>
        <LottieView 
          style={{height:100,width:100}}
          source={require('./assets/animation_kvh2r8kk.json')}
          autoPlay
          loop={false}
          onAnimationFinish={()=>{navigation.replace('MyDrawer')}}
          />
    </View>
  )
}