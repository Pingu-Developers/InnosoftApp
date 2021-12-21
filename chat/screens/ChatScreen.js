import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Alert, SafeAreaView } from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
import { database } from '../Firebase';

const ChatScreen = () => {
    const [messages, setMessages] = React.useState([]);


    useEffect(() => {
        setMessages([
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
            }
        ]);
    }, []);
    return (
      <GiftedChat  messages={messages}  onSend={console.log("AAAA")}/>
    )
  }

export default ChatScreen;