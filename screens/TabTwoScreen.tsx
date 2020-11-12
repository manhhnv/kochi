import * as React from 'react';
import {
  Body, Container, Content, Icon, Left, List,
  ListItem, Right, Text, View
}
  from 'native-base';
import CourseOverview from '../components/CourseOverview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated, Dimensions, Image, ImageBackground } from 'react-native';

export default function TabTwoScreen({navigation}: any) {
  const thumbnail = require('../assets/images/courses/vocabulary.jpg');
  // style={{ backgroundColor: "#ECEDED" }}
  return (
    <Container >
      <Content>
        <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: Dimensions.get('screen').width }}>
        <CourseOverview totalUnits={6} thumbnail={thumbnail}></CourseOverview>
          <List>
            <TouchableOpacity onPress={() => navigation.navigate("Lesson")}>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Bai 1:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>1 - 120</Text>
                </Body>
                <Right>
                  <Icon name="ios-arrow-dropright" style={{ fontSize: 25, }}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem style={{ marginRight: 12 ,backgroundColor: "white", marginTop: 50, paddingLeft: 10, borderRadius: 5, height: 80, opacity: 0.9, marginBottom: 50 }}>
                <Left>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Kiểm tra:</Text>
                </Left>
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Cách đọc Kanji, Hiragana</Text>
                </Body>
                <Right>
                  <Icon name="checkmark-circle" style={{ fontSize: 25, color: "#04F268"}}></Icon>
                </Right>
              </ListItem>
            </TouchableOpacity>
          </List>
        </ImageBackground>
        
      </Content>
    </Container>
  );
}
