import axios from 'axios';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Pressable, RefreshControl,TouchableOpacity, Image,Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { useIsFocused } from "@react-navigation/native";

import {
    SharedElement,
    createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

import New from '../components/New';

const Stack = createSharedElementStackNavigator();

export default function MainScreen({ navigation }) {
    return (
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

function News({ navigation }) {
    const [loading, setLoading] = React.useState(true);
    const [news, setNews] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const isFocused = useIsFocused();
    const refreshButton = require('../assets/News/refresh.png')
    const API_HOST = process.env.API_HOST;
    const API_PORT = process.env.API_PORT;
    const url = `http://${API_HOST}:${API_PORT}/api/v1/posts`;

    React.useEffect(() => {
        if (isFocused) {
            getNews()
        }
    }, [isFocused])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const getNews = () => {

        const source = axios.CancelToken.source();
        const timeout = setTimeout(() => {
            setFail(true);
            wait(3000).then(() => setFail(false));
            Alert.alert('Error', 'API Request timed out')
            source.cancel();
        }, 5000);
        axios.get(url)
            .then(res => {
                if (res.status === 200) {
                    clearTimeout(timeout);
                    setNews(res.data);
                    setSuccess(true);
                    wait(3000).then(() => setSuccess(false));
                    setLoading(false);
                }
            })
            .catch(err => {
                clearTimeout(timeout);
                console.log('Error fetching news:', error);
                Alert.alert('Error', 'Error fetching news');
            });
    }

    const onRefresh = React.useCallback(() => {
        console.log('Refreshing...')
        setRefreshing(true);
        getNews();
        setRefreshing(false);
    }, []);

    const flashMessagesSucces = () => {
        return (
            success == true ?
                <View style={styles.flashMessageSuccess}>
                    <Text style={{ color: 'white' }}>¡Recargado con éxito!</Text>
                </View>
                :
                null

        );
    }
    const flashMessagesFail = () => {
        return (
            fail == true ?
                <View style={styles.flashMessageFail}>
                    <Text style={{ color: 'white' }}>¡Error al cargar!</Text>
                </View>
                :
                null
        );
    }

    if (loading) {
        wait(5000).then(() => setLoading(false));
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#54aaff" />
            </View>
        )
    }

    return (
        news && news.length ?
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                {flashMessagesSucces()}
                {flashMessagesFail()}
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
                                    <Text style={{ color: '#2C4365' }}>
                                        {newItem.postTitle}
                                    </Text>
                                </Card.Title>
                            </SharedElement>
                            <View style={{ flex: 1, flexDirection: 'row', margin: 10, marginTop: -5, display: 'flex', alignItems: "center" }}>
                                <Icon
                                    name='event'
                                    type='material'
                                    color='#D0D0D0' />
                                <Text style={{ display: 'flex', color: '#D0D0D0', right: 0, alignItems: "center" }}>
                                    {new Date(newItem.postDateTime).toLocaleDateString()}
                                </Text>
                            </View>
                        </Card>
                    </Pressable>
                ))}
            </ScrollView>
            :
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: "#cccccc" }}>
                    No hay noticias
                </Text>
                <TouchableOpacity styles={{ alignItem: 'center' }} onPress={() => onRefresh()}>
                    <Image style={{ width: 50, height: 50 }} source={refreshButton} />
                </TouchableOpacity>
                {flashMessagesSucces()}
                {flashMessagesFail()}
            </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, flashMessageSuccess: {
        zIndex:1,
        position: 'absolute',
        backgroundColor: 'green',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        top: 0
    }, flashMessageFail: {
        zIndex:1,
        position: 'absolute',
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        top: 0
    }
})