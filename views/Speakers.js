import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, RefreshControl, ActivityIndicator, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import { Card } from 'react-native-elements';

export default function Speakers({ navigation }) {

    const [speakers, setSpeakers] = React.useState([]);
    const isFocused = useIsFocused();
    const carouselItems = [];
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const API_HOST = process.env.API_HOST;
    const API_PORT = process.env.API_PORT;
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const refreshButton = require('../assets/Speakers/refresh.png')
    const url = `${API_HOST}:${API_PORT}/api/v1/speakers`;

    //Load when is focus
    React.useEffect(() => {
        if (isFocused) {
            getSpeakers()
        }
    }, [isFocused])
    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    //Get Speakers
    const getSpeakers = () => {

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
                    setSpeakers(res.data);
                    setSuccess(true);
                    wait(3000).then(() => setSuccess(false));
                    setLoading(false);

                }
            })
            .catch(err => {
                clearTimeout(timeout);
                Alert.alert('Error', 'Error fetching speakers');
            });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getSpeakers();
        setRefreshing(false);
    }, []);

    const populateSpeakers = (speakers) => {
        speakers.map(element => {
            carouselItems.push({ id: element.speakerId, name: element.speakerName, job: element.speakerJobTitle, description: element.speakerDescription })
        });
        return carouselItems
    }

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
            <View testID='speakers' style={styles.container}>
                <ActivityIndicator size="large" color="#54aaff" />
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <ScrollView style={{
                backgroundColor: 'white',
                borderRadius: 20,
                height: windowHeight,
                padding: 50,
                marginTop: 90,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: windowHeight / 8,
            }}
                showsVerticalScrollIndicator={false}
            >
                <Card.Title style={styles.title}>{item.name}</Card.Title>
                <Card.Divider />
                <Text style={styles.job}>{item.job != null ? item.job : 'Ponente'}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </ScrollView>
        );
    }

    return (

        speakers && speakers.length ?
            <View testID='loadedWithData' style={styles.main}>
                <Carousel
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    layout={"stack"}
                    useRef={'carousel'}
                    data={populateSpeakers(speakers)}
                    sliderWidth={200}
                    itemWidth={windowWidth}
                    renderItem={renderItem}
                    loop={true}
                />
                {flashMessagesSucces()}
                {flashMessagesFail()}
            </View> :
            <View testID='loadedWithoutData' style={styles.container}>
                <Text style={{ fontSize: 20, color: "#cccccc" }}>
                    No hay ponentes
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
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#dedede'
    },
    carousel: {
        backgroundColor: 'floralwhite',
        borderRadius: 5
    },
    title: {
        alignSelf: 'center',
        fontSize: 30
    },
    job: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20,
        fontStyle: 'italic'
    },
    description: {
        textAlign: 'justify',
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 70
    }, container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, flashMessageSuccess: {
        position: 'absolute',
        backgroundColor: 'green',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        top: 0
    }, flashMessageFail: {
        position: 'absolute',
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        top: 0
    }

})