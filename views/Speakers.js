import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import {Card } from 'react-native-elements';
import { Dimensions } from 'react-native';

export default function Speakers({navigation}) {

    const [speakers, setSpeakers] = React.useState([]);
    const isFocused = useIsFocused();
    const carouselItems = [];
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    React.useEffect(async()=> {
        if(isFocused){
            const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/v1/speakers`;
            await axios.get(url)
            .then( res=> {
                setSpeakers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [isFocused])
  
    const renderItem = ({item, index}) => {
        return (
            <ScrollView style={{
                backgroundColor:'white',
                borderRadius: 20,
                height: windowHeight,
                padding: 50,
                marginTop:90,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: windowHeight/8,
                 }}
                showsVerticalScrollIndicator={false}
            >
                <Card.Title style={styles.title}>{item.name}</Card.Title>
                <Card.Divider/>
                <Text style={styles.job}>{item.job !=null? item.job:'Ponente'}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </ScrollView>
        );
    }

    const populateSpeakers = (speakers) => {
        speakers.map(element => {
            carouselItems.push({id:element.speakerId,name:element.speakerName,job:element.speakerJobTitle,description:element.speakerDescription})
        }); 
        return carouselItems
    }
    return (
        <View style={styles.main}>
                <Carousel
                layout={"stack"}
                useRef={'carousel'}
                data={populateSpeakers(speakers)}
                sliderWidth={200}
                itemWidth={windowWidth}
                renderItem={renderItem}
                loop={true}
                />
            </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        backgroundColor:'#dedede'
    },
    carousel:{
        backgroundColor:'floralwhite',
        borderRadius: 5
    },
    title:{
        alignSelf:'center',
        fontSize:30
    },
    job:{
        textAlign:'center',
        paddingBottom:10,
        fontSize:20,
        fontStyle:'italic'
    },
    description:{
        textAlign:'justify',
        fontSize:15,
        paddingTop:10,
        paddingBottom:70
    }
    
})