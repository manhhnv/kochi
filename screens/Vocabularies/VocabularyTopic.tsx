import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch, Thumbnail
}
  from 'native-base';
import CourseOverview from '../../components/CourseOverview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated, Dimensions, Image, ImageBackground } from 'react-native';
import {styles} from "./styles";
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
      <List>
          {data.map((item,index) => <TouchableOpacity activeOpacity={0.85} key={item.id} >
            <ListItem style={[
                        {paddingVertical:20,},
                        activeTopic == item.id ? {borderRadius:10,backgroundColor:"#00CE9F",marginRight:0.045*width,shadowOpacity:10}: null,
                        ]} 
                     onPress={() => handleOpenTopic(item.id)}  >
                <Left style={{}}>
            
                        {/* <Icon active name="airplane" /> */}
                        <Thumbnail 
                            source={{uri:"https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/leaf.png"} }
                            style={{width:40,height:40,marginTop:0.02*height}}
                            large
                        />   
                   
                    <View style={{marginLeft:10}}>
                        <Text>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                </Left>
                <Right>
                        <Icon name="arrow-forward" style={[activeTopic == item.id ?{color:"#FFFFF"} : {color:"orange"} ]}/>
                </Right>
            </ListItem>
        </TouchableOpacity>)
        
        }
      </List>
    </Content>
  </Container>
  );
}
