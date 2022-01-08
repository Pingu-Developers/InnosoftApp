import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import io from "socket.io-client";


import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Image } from 'react-native-elements';

const ChatScreen = (props) => {

    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState({});
    const [incomingMessage, setIncomingMessage] = React.useState(undefined);
    const [fetchUUID, setFetchUUID] = React.useState('');
    
    /* Obtenemos el nombre de usuario y la sala de chat */
    let name = props.route.params.name;
    let room = props.route.params.room;
    const avatar = '../../assets/logo-innosoft.png';

    const socket = io(`${process.env.API_HOST}:${process.env.SOCKET_PORT}`, {
        transports: ["websocket"],
    });

    useFocusEffect(
        React.useCallback(() => {
            async function fetchData() {
                let uuid = await SecureStore.getItemAsync('secure_deviceid') || await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuidv4()));
                setFetchUUID(uuid.replace(/\"/g, ''));
            }
            fetchData();

            socket.on('connect', (msg) => {
                socket.emit("chatConnection", {user:name, room:room});
            });
            
            socket.on('chatMessages', (msg) => {
                setMessages(msg);
            })
            
            socket.on('chatMessage', (msg) => {
                setIncomingMessage(msg);
            })

            socket.on('newMember', (msg) => {
                setIncomingMessage({_id:new Date(),text:msg,system:true,datetime:new Date()});
            })
            socket.on('disconnect', (msg) => {
                console.log(msg);
            });

            socket.connect();

            return () => {
                socket.emit("chatDisconnect", {user:name,room});
                socket.disconnect();
                setMessages([]);
            }
        },[props.route])
    );

    React.useEffect(() => {
        if(message.text) socket.emit("chatMessage", message);
    }, [message]);

    React.useEffect(() => {
        let temp = [ ...messages]
        temp.unshift(incomingMessage)
        if(incomingMessage) setMessages(temp);
    }, [incomingMessage]);
    
    function sendMessage(message) {
        const newMessage = {
            text:message[0].text,
            datetime: new Date(),
            room: room,
            user: { _id: fetchUUID, name: name, avatar: avatar }
        };
        setMessage(newMessage);
    }

    /* Hay que revisar el event de OnSend para que en el sendMessage envíe el valor
    del texto que ha escrito el usuario */
    return (
            <GiftedChat messages={messages} user={{ _id: fetchUUID, name: name, avatar: avatar }} onSend={(e) => sendMessage(e)} renderUsernameOnMessage 
                renderAvatar={() => {
                    return <Image source={require(avatar)} style={{width: 40, height: 40}} />
                }} />
    )
}

export default ChatScreen;

