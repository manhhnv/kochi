import React, { useEffect, useState } from 'react';
import {
  Body, Container, Header, Left, Right, Title,
  List, ListItem, Content, Card, CardItem, Thumbnail,
  Grid, Col, Row, Text, Icon, Button, View, Fab,
  Segment
}
from 'native-base';
import { Animated, Dimensions, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'
import { HomeStyles } from '../styles/index';
import { API_URL } from '../env';
const {width, height} = Dimensions.get('screen');
const Home = ({navigation}: any) => {
  const [showFAB, setShowFAB] = useState(false)
  const [segmentIndex, setSegmentIndex] = useState(1);
  // console.log(API_URL)
  const _renderComponentBySegment = () => {
    if (segmentIndex == 1) {
      return (
        <List style={{paddingBottom: 70}}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={ HomeStyles.thumbnailHistoryItem } source={require('../assets/images/history/practicing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Từ vựng JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>30/30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={ HomeStyles.thumbnailHistoryItem } source={require('../assets/images/history/practicing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Từ vựng JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>30/30</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={ HomeStyles.thumbnailHistoryItem } source={require('../assets/images/history/practicing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Từ vựng JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>30/30</Text>
            </Right>
          </ListItem>
        </List>
      )
    }
    else {
      return (
        <List style={{paddingBottom: 70}}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={HomeStyles.thumbnailHistoryItem} source={require('../assets/images/history/testing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Thi thử JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>160/180</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={HomeStyles.thumbnailHistoryItem} source={require('../assets/images/history/testing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Thi thử JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>160/180</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail style={HomeStyles.thumbnailHistoryItem} source={require('../assets/images/history/testing.png')}></Thumbnail>
            </Left>
            <Body>
              <Text style={HomeStyles.titleHistoryItem}>Thi thử JLPT N3</Text>
            </Body>
            <Right>
              <Text note style={HomeStyles.scoreHistoryItem}>160/180</Text>
            </Right>
          </ListItem>
        </List>
      )
    }
  }
  return (
    <Container>
      <Animated.View>
        <Header noLeft style={HomeStyles.headerContainer}>
          <Left />
          <Body>
            <Title style={HomeStyles.headerBodyTitle}>
              JLPT N3
            </Title>
          </Body>
          <Right />
        </Header>
      </Animated.View>
      
      <ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }} style={{width: 1000}}></ImageBackground>
      
      <Content style={{ marginHorizontal: 5 }}>
        <ScrollView>
          <Content>
            <Card style={{ borderRadius: 20 }}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/images/banner.png')}
                  style={HomeStyles.bannerImage}
                ></Image>
              </CardItem>
            </Card>
            <Grid>
              <Text style={HomeStyles.category}>Danh mục</Text>
              <Row>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity onPress={() => {navigation.navigate("VocabularyTopic"); window.alert("Tính năng đang được phát triển...")}}>
                    <Card style={HomeStyles.cardStyle}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={require('../assets/images/courses/vocabulary.jpg')}></Thumbnail>
                          <Body>
                            <Text style={HomeStyles.courseTitle}>Từ vựng</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={HomeStyles.cardBody}>
                        <Body>
                          <ProgressCircle
                            percent={50}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                            children={<Text>50%</Text>}
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={HomeStyles.cardStyle}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={require('../assets/images/courses/grammar.jpg')}></Thumbnail>
                          <Body>
                            <Text style={HomeStyles.courseTitle}>Ngữ pháp</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={HomeStyles.cardBody}>
                        <Body>
                          <ProgressCircle
                            percent={30}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                            children={<Text>30%</Text>}
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={HomeStyles.cardStyle}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={require('../assets/images/courses/reading.jpg')}></Thumbnail>
                          <Body>
                            <Text style={HomeStyles.courseTitle}>Đọc hiểu</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={HomeStyles.cardBody}>
                        <Body>
                          <ProgressCircle
                            percent={10}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                            children={<Text>10%</Text>}
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={HomeStyles.cardStyle}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={require('../assets/images/courses/listening.png')}></Thumbnail>
                          <Body>
                            <Text style={HomeStyles.courseTitle}>Nghe hiểu</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={HomeStyles.cardBody}>
                        <Body>
                          <ProgressCircle
                            percent={40}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                            children={<Text>40%</Text>}
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
            <Row>
              <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                <Text style={HomeStyles.category}>Đề xuất thi thử</Text>
                <TouchableOpacity>
                  <Card style={HomeStyles.cardStyle}>
                    <CardItem>
                      <Left style={{ borderWidth: 0 }}>
                        <Thumbnail borderRadius={1} source={require('../assets/images/history/testing.png')}></Thumbnail>
                        <Body>
                          <Text style={HomeStyles.testingTitle}>JLPT N3</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody style={HomeStyles.cardBody}>
                      <Body>
                        <View style={HomeStyles.testingNoteContainer}>
                          <Icon name="alarm" style={HomeStyles.testingNoteIcon}></Icon>
                          <Text style={HomeStyles.testingNoteTitle}>140 phút</Text>
                        </View>
                        <View style={HomeStyles.testingNoteContainer}>
                          <Icon name="book" style={HomeStyles.testingNoteIcon}></Icon>
                          <Text style={HomeStyles.testingNoteTitle}>180 điểm</Text>
                        </View>
                      </Body>
                      <Right>
                        <Thumbnail square source={require('../assets/images/logo.png')}></Thumbnail>
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </Col>
            </Row>
            <Text style={HomeStyles.category}>Lịch sử gần đây</Text>
            <Segment style={HomeStyles.segmentStyle}>
              <Button style={{width: 150}} onPress={() => setSegmentIndex(1)} active={segmentIndex == 1 ? true : false} first >
                <Text style={{textAlign: "center", paddingLeft: 0.1*width}}>Luyện tập</Text>
              </Button>
              <Button style={{width: 150}} onPress={() => setSegmentIndex(2)} active={segmentIndex == 2 ? true : false} last >
                <Text style={{textAlign: "center", paddingLeft: 0.1*width}}>Thi thử</Text>
              </Button>
            </Segment>
            <Content padder>
              {_renderComponentBySegment()}
            </Content>
          </Content>
        </ScrollView>
        <View style={{ flex: 1 }}>
          <Fab
            active={showFAB}
            direction="up"
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => setShowFAB(!showFAB)}
          >
            <Icon name="ios-share-alt" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Content>
    </Container>
  );
}
export default React.memo(Home)