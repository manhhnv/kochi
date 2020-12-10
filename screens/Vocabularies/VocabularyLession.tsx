import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch,Thumbnail
}
  from 'native-base';
import CourseOverview from '../../components/CourseOverview';
import { Alert, Animated, Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import {getVocabularyLesson} from "../../data/vocabulary/getVocabularyContent";
import ProgressCircle from 'react-native-progress-circle'
const {width,height}= Dimensions.get('window');

export default function VocabularyLession({navigation,route}: any) {
    const {categoryId} = route.params;
    const data:any = getVocabularyLesson(categoryId);

    
  return (
    <ImageBackground
            source={require('../../assets/images/background4.jpg')}
            style={{
                width: width,
                height: 0.9 * height
            }}
        >
            <ScrollView style={{marginBottom:20}}>
              {data.map((item :any,index:number) => (
              <TouchableOpacity style={styles.container} 
                                onPress={()=> navigation.navigate("VocabularyList",{listId:item.id,categoryId:categoryId})}
                                key={item.id}
              >
                <Animatable.View animation="bounceInRight" style={styles.readingCategory}>
                  <Content contentContainerStyle={styles.titleContainer}>
                    <View style={styles.index}>
                      <Text>{item.id}</Text>  
                    </View>  
                    <View style={styles.content}> 
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.desc}>{item.desc}</Text>
                    </View>
                    <View style={styles.progress}>
                    <ProgressCircle
                            percent={0}
                            radius={25}
                            borderWidth={6}
                            color="#00CE9F"
                            shadowColor="lightgray"
                            bgColor="#fff"
                            children={<Text>0%</Text>}
                          />
                    </View>
                  </Content>
                </Animatable.View>
              </TouchableOpacity>))}
            </ScrollView>
        </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-start",
    flex:1,

  },
  readingCategory: {
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      height: 0.14 * height,
      marginTop: 0.05 * height,
      borderRadius: 15,
      borderBottomWidth: 5,
      borderBottomColor: '#00CE9F',
      marginHorizontal: 0.03 * width,
      justifyContent:"center",
      flex:1,
  },
  titleContainer: {
      flexDirection: 'row',
      alignItems:"center",
      justifyContent: 'flex-start',
      marginTop: 0.02*height,
      position:"relative",
      flex:1,
  },
  title:{
    fontWeight: "bold",
     color: 'red'
  },
  title1: {
      fontWeight: "bold",
      fontSize: 18,
      marginLeft: 0.05 * width,
  },
  desc:{
    fontStyle:"italic",
    color:"#00CE9F",

  },
  index:{
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    width:width*0.1,
    backgroundColor:"#00CE9F",
    marginBottom:width*0.04,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
 
  },
  content:{
    marginLeft:width*0.04,
    marginBottom:width*0.04,
    
  },
  progress:{
    position:"absolute",
    right:20,
    bottom:width*0.04,
    

  },
 
});
