import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch,Thumbnail,
}
  from 'native-base';
import CourseOverview from '../../components/CourseOverview';
import { Alert, Animated, Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import data from "../../data/vocabularyList";
import ProgressCircle from 'react-native-progress-circle'
const {width,height}= Dimensions.get('window');

export default function VocabularyList({navigation,route}: any) {
    const son = route.params;
    const renderRow = (item : any,index:number): any  => {
        return (
            <View style={[styles.row, item.id % 2 == 0 ? {backgroundColor:"#e8fcf7"} : null]} key={`item:${item.id}`}>
                <View style={styles.left}>
                    <Icon type="FontAwesome" name="volume-up" style={styles.icon} ></Icon>
                    <View style={styles.contentLeft}>
                        <Text style={styles.id}>{item.id}</Text>
                        <Text style={{color:"red",fontSize:22,marginTop:10}}>{item.kanji}</Text>
                        <Text >{item.hiragana}</Text>
                        <Text style={{color:"#00CE9F",fontStyle:"italic"}}>{item.meaning}</Text>               
                    </View>
                    
                </View>
                <View style={styles.right}>
                    <View style={styles.contentRight}>
                        <Text style={{marginBottom:20}}>{item.example}</Text>
                        <Text style={{color:"#00CE9F",fontStyle:"italic"}}>{item.example_meaning}</Text>
                    </View>
                    
                </View>
               
            </View>
        )
    }

  return (

            <ScrollView>
                {data.map((item,index) => {return renderRow(item,index)})}

            </ScrollView>

  );
}
const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-start",
    flex:1,

  },
  row:{
    
    
    flex:1,
    flexDirection:"row",
    position:"relative",

    width:width,
    height:height*0.2,
 
    backgroundColor:"white",
    
  },
  left:{
    flex:1,

    borderBottomColor:"lightgray",
    borderRightColor:"lightgray",
    borderBottomWidth:1,
    borderRightWidth:1,

  },
  contentLeft:{
    marginTop:width*0.02,
    marginLeft:width*0.02,
    
  },
  
  right:{
    flex:1,

    borderBottomColor:"lightgray",
    borderBottomWidth:1,

    paddingLeft:width*0.02,
  },
  contentRight:{
    marginTop:width*0.02,
    marginRight:width*0.02,
  },

  id:{
    backgroundColor:"lightgray",

    borderRadius:3,
    width:width*0.05,
    
  
    textAlign:"center"
  },
  icon:{

    color:"#00CE9F",
    fontSize:25,

    position:"absolute",
    right:width*0.02,
    top:width*0.02,
    




  },


});
