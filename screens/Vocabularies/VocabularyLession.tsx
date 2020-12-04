import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch
}
  from 'native-base';
import CourseOverview from '../../components/CourseOverview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated, Dimensions, Image, ImageBackground } from 'react-native';
import {styles} from "./styles";
import data from "../../data/vocabularyTopic";
const {width,height}= Dimensions.get('window');

export default function VocabularyLession({navigation,route}: any) {
    const son = route.params;
    console.log(son);
    
  return (
    <Container>

    <Content>
        <Text>Hello</Text>
    </Content>
  </Container>
  );
}
