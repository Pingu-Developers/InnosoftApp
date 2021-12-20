import React from "react";
import { ScrollView ,Text } from "react-native";
import { Card } from 'react-native-elements'
import { TouchableOpacity } from "react-native-gesture-handler";
import RenderHTML from "react-native-render-html";

import {
  SharedElement,
} from 'react-navigation-shared-element';

export default function New({ route, navigation }) {

  const { newItem } = route.params;
  let content = newItem.postContent;

  let tags = content.match(/<a href="https:\/\/institucional[^>]+>/g);
  let contentDivided = content.split(/<a href=\"https:\/\/institucional[^>]+>/g);

  contentDivided = contentDivided.map((item, index) => {
    let subDivided = item
    if (index > 0) {
      subDivided = item.split('<\/a>');
      subDivided = [subDivided[0],item.split('<\/a>').slice(1).join('<\/a>')];
    }
    return subDivided;
  })

  contentDivided = contentDivided.reduce((acc, val) => acc.concat(val), []);
  
  return (
    <ScrollView style={{margin:10}}>
      <SharedElement id={newItem.postId}>
          <Text style={{color:'#2C4365',fontSize:20,fontWeight:'bold',textAlign:'center'}}>
              {newItem.postTitle}
          </Text>
      </SharedElement>

      {contentDivided.map((item, index) => { 
        if(index % 2 === 0){
          return <RenderHTML key={index} style={{margin:0}} contentWidth={300} source={{html:`<p style=\"text-align: justify;\ margin=0;" >${item}</p>`}}/>
        }else {
          let indexOfA = Math.floor(index / 2);
          let itemWithoutTags = item.replace(/<[^>]+>/g, '');
          let vista = 'Inicio'
          
          if (/.*ponentes/.test(tags[indexOfA])) {
            vista = 'Ponentes'
          } else if(/.*programa/.test(tags[indexOfA])){
            vista = 'Programa'
          }
          return (
            <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center',margin:10,padding:10,backgroundColor:'#6da8ba'}} key={index} onPress={() => navigation.navigate(vista)}>
              <Text style={{color:'white'}}>{itemWithoutTags.replace('.','')}</Text>
            </TouchableOpacity>
          )
        }
      })}
    </ScrollView>
  )
}