import * as React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import s from './style';

//Import Views
import Home from '../views/Home';
import News from '../views/News';
import Program from '../views/Program';
import Speakers from '../views/Speakers';
import AboutUs from '../views/AboutUs';


function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon color='white' size={20} name={props.iconName} type='material-icons'/>
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Inicio')}>
                    <View style={s.titleContainer}>
                        <Image style={s.titleImagen} source={require('../assets/logo-innosoft.png')}/>
                        <Text style={s.title}>Innosoft Days</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenu iconName='home' titleName='Inicio' navigation={()=>props.navigation.navigate('Inicio')}/>
            <DrawerMenu iconName='article' titleName='Noticias' navigation={()=>props.navigation.navigate('Noticias')}/>
            <DrawerMenu iconName='schedule' titleName='Programa' navigation={()=>props.navigation.navigate('Programa')}/>
            <DrawerMenu iconName='people' titleName='Ponentes' navigation={()=>props.navigation.navigate('Ponentes')}/>
            <DrawerMenu iconName='call' titleName='Sobre nosotros' navigation={()=>props.navigation.navigate('Sobre nosotros')}/>
        </View>
    )
}
//Slide Navigation Menu
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#2C4365',
        }}} drawerContent={(props) => <Menu {...props}/>}>
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Noticias" component={News} />
        <Drawer.Screen name="Programa" component={Program} />
        <Drawer.Screen name="Ponentes" component={Speakers} />
        <Drawer.Screen name="Sobre nosotros" component={AboutUs}/>
    </Drawer.Navigator>
  );
}  

export default MyDrawer;