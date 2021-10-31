import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';

//Import Views
import Home from '../views/home';
import News from '../views/News';
import Program from '../views/Program';
import Speakers from '../views/Speakers';
import AboutUs from '../views/AboutUs';

//Slide Navigation Menu
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home}/>
      <Drawer.Screen name="Noticias" component={News} />
      <Drawer.Screen name="Programa" component={Program} />
      <Drawer.Screen name="Ponentes" component={Speakers} />
      <Drawer.Screen name="Sobre nosotros" component={AboutUs}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}  

export default MyDrawer;