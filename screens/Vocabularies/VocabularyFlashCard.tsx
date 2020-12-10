import * as React from 'react';
import {useState} from "react";
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View,Header,Button,Switch, Thumbnail,Grid,Row,Col
}
  from 'native-base';
  import * as Animatable from 'react-native-animatable';
import CourseOverview from '../../components/CourseOverview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated, Dimensions, Image, ImageBackground,StyleSheet } from 'react-native';

import data from "../../data/vocabularyTopic";
import FCard from '../../components/vocabulary/FCard';
import FlipCard from 'react-native-flip-card';
const {width,height}= Dimensions.get('window');

export default function VocabularyFlashCard({navigation}: any) {
    const [activeTopic,setActiveTopic] = useState(0);
    
    const handleOpenTopic = (id:number):any => {
        navigation.navigate("VocabularyLession", {topicId:id});
        setActiveTopic(id);
    };
  return (
    <Container>

        <Content>
            <FlipCard style={{ marginTop: 0.08 * height }}>
                <View style={{
                    margin: 20, backgroundColor: "white", borderStyle: "solid",
                    height: 0.4 * height, borderWidth: 0,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                }}>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>家族</Text>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 30, flexWrap: "wrap", paddingTop: 20 }}>Gia đình</Text>
                    <Thumbnail square style={{ marginLeft: 0.07 * width }} source={require('../../assets/images/logo.png')}></Thumbnail>
                </View>
                <View style={{
                    margin: 20, backgroundColor: "white", borderStyle: "solid",
                    height: 0.4 * height, borderWidth: 0,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                }}>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>かぞうく</Text>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap", paddingTop: 20 }}>Gia đình</Text>
                    <Thumbnail square style={{ marginLeft: 0.07 * width }} source={require('../../assets/images/logo.png')}></Thumbnail>
                </View>
            </FlipCard>
            <Grid>
                <Row style={{ marginLeft: 0.1 * width, marginTop: 0.01 * height }}>
                    <Col>
                        <Button large bordered success>
                            <Icon type="MaterialCommunityIcons" name="volume-high"></Icon>
                        </Button>
                    </Col>
                    <Col>
                        <Button large bordered success>
                            <Icon type="MaterialCommunityIcons" name="star" ></Icon>
                        </Button>
                    </Col>
                    <Col>
                        <Button large bordered success  >
                            <Icon type="MaterialCommunityIcons" name="skip-previous"></Icon>
                        </Button>
                    </Col>
                    <Col>
                        <Button large bordered success  >
                            <Icon type="MaterialCommunityIcons" name="skip-next"></Icon>
                        </Button>
                    </Col>
                </Row>
            </Grid>
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


