import axios from 'axios';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View,Pressable } from 'react-native';
import { Card,Icon } from 'react-native-elements'
import { useIsFocused } from "@react-navigation/native";

import {
    SharedElement,
    createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

import New from '../components/New';

const Stack = createSharedElementStackNavigator();

export default function MainScreen ({navigation}) {
    return(
        <Stack.Navigator
        mode="modal"
        screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="List" component={News} />
        
            <Stack.Screen
                name="Detail"
                component={New}
                sharedElements={(route) => {
                return [route.params.newItem.postId];
                }}
            />
        </Stack.Navigator>
    )
}

 function News({navigation}) {
    const [loading, setLoading] = React.useState(true);
    const [news, setNews] = React.useState([]);
    const isFocused = useIsFocused();

    React.useEffect(async() => {
        if(isFocused){ 
            const url = `http://${process.env.API_HOST||'192.168.1.77'}:${process.env.API_PORT||'5000'}/api/v1/posts`;
            await axios.get(url)
                .then(res => {
                    setNews(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
                setLoading(false);
        }
    }, [isFocused])
        
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#54aaff" />
            </View>
        )
    }

    return (
        news && news.length?
        <ScrollView>
            {news.map((newItem) => (
                <Pressable
                    key={newItem.postId}
                    onPress={() =>
                        navigation.push('Detail', {
                            newItem,
                        })
                    }
                >
                    <Card key={newItem.postId}>
                        <SharedElement id={newItem.postId}>
                            <Card.Title>
                                    <Text style={{color:'#2C4365'}}>
                                        {newItem.postTitle}
                                    </Text>
                            </Card.Title>
                        </SharedElement>
                        <View style={{flex:1,flexDirection:'row',margin:10,marginTop:-5,display:'flex',alignItems:"center"}}>
                            <Icon
                                name='event'
                                type='material'
                                color='#D0D0D0'/>
                            <Text style={{display:'flex',color:'#D0D0D0', right:0,alignItems:"center"}}>
                                {new Date(newItem.postDateTime).toLocaleDateString()}
                            </Text>
                        </View>
                    </Card>
                </Pressable>
            ))}
        </ScrollView>
             : 
        <View style={styles.container}>
            <Text style={{fontSize:20,color:"#cccccc"}}>
                No hay noticias
            </Text>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
})