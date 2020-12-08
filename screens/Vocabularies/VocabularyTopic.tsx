import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch, Thumbnail
}
  from 'native-base';
  import * as Animatable from 'react-native-animatable';
import CourseOverview from '../../components/CourseOverview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated, Dimensions, Image, ImageBackground,StyleSheet } from 'react-native';

import data from "../../data/vocabularyTopic";
const {width,height}= Dimensions.get('window');

export default function VocabularyTopic({navigation}: any) {
    const [activeTopic,setActiveTopic] = useState(0);
    
    const handleOpenTopic = (id:number):any => {
        navigation.navigate("VocabularyLession", {topicId:id});
        setActiveTopic(id);
    };
  return (
    <Container>

    <Content>
      <List style={styles.container}>
          {data.map((item,index) => <TouchableOpacity activeOpacity={0.85} key={item.id} >
          <Animatable.View animation="bounceInRight">
            <ListItem style={[
                        {paddingVertical:20,},
                        activeTopic == item.id ? styles.active: null,
                        ]} 
                     onPress={() => handleOpenTopic(item.id)}  >
                <Left style={{}}>
                
                        <Image source={require("../../assets/images/vocabularies/leaf.png")}
                               style={{width:30,height:30,marginTop:0.02*height}}
                        />
                    <View style={{marginLeft:10,width:width*0.7,overflow:"hidden",}}>
                        <Text>{item.title}</Text>
                        <Text style={[styles.desc,]}>{item.description}</Text>
                    </View>
                    
                </Left>
                <Right>
                      <Icon name="arrow-forward" style={[activeTopic == item.id ?{color:"#FFFFF"} : {color:"orange"} ]}/>
                </Right>
            </ListItem>
            </Animatable.View>
        </TouchableOpacity>)
        
        }
      </List>
    </Content>
  </Container>
  );
}
const styles = StyleSheet.create({
  container: {
      paddingBottom: 0.03 * width,
      paddingTop: 0.03 * width
  },
  grammarForm: {
      fontSize: 19,
      color: 'blue',
      paddingTop: 0.015 * height,
      paddingBottom: 0.015 * height,
  },
  itemContainer: {
      
  },
  active: {
      backgroundColor: '#00CE9F',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 10,
      marginRight: 0.02 * width,
      paddingLeft: 0.01 * width,
      overflow:"hidden",
  },
  desc:{
    color:"#0275d8",
    paddingVertical:10,
    textAlign:"left",
    marginLeft:15,
  }
})


