import React, { useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios';

const ChatScreen = (props) => {
    const [messages, setMessages] = React.useState([]);

    /* Obtenemos el nombre de usuario y la sala de chat */
    const name = props.route.params.name;
    const room = props.route.params.room;

    React.useEffect(async()=> {
        // Mock data
        setMessages(mockMessages);
        // getMessages();
    });

    function getUser() {
        /* Genera un id único (hay formas mejores de hacerlo) */
        return {
            _id: Math.floor(Math.random() * 100000),
            name: name
        }
    }

    const getMessages = async() => {
        /* Obtenemos los mensajes de la BD, dando como parámetro el código de la sala de chat */
        const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/v1/messages/${room}`;
        await axios.get(url)
        .then( response => {
            setMessages(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function sendMessage(text){
        const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/v1/messages/${room}`;
        const message = {
            _id: Math.floor(Math.random() * 100000),
            text: text,
            createdAt: Date.now(),
            user: getUser(),
        }
        axios.post(url, message)
        .then(response => {
        })
        .catch(error => {
            console.log(error);
        });
    }

    /* Hay que revisar el event de OnSend para que en el sendMessage envíe el valor
    del texto que ha escrito el usuario */
    return (
      <GiftedChat messages={messages} user={getUser()} onSend={(e) => sendMessage(e)}/>
    )
}

export default ChatScreen;

/* Mock de datos de ejemplo de messages */
export const mockMessages = [
    {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
];