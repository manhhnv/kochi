
import {
  Body, Container, Header, Left, Right, Title,
  List, ListItem, Content, Card, CardItem, Thumbnail,
  Grid, Col, SwipeRow, Row, Text, Icon, Button, View, Fab
}
  from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Animated, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'

export default function TabOneScreen() {
  const [showFAB, setShowFAB] = useState(false)
  return (
    <Container>
      <Animated.View>
        <Header noLeft style={{ backgroundColor: "#00CE9F", height: 30 }}>
          <Left />
          <Body>
            <Title style={{ textAlign: 'center', fontWeight: "bold", color: "white", fontSize: 20 }}>
              N3
            </Title>
          </Body>
          <Right />
        </Header>
      </Animated.View>
      <Content style={{ marginHorizontal: 5 }}>
        <ScrollView>
          <Content>
            <Card style={{ borderRadius: 20 }}>
              <CardItem cardBody>
                <Image
                  source={require('../assets/images/banner.png')}
                  style={{ height: 130, flex: 1, borderRadius: 20 }}
                ></Image>
              </CardItem>
            </Card>
            <Grid>
              <Text style={{ fontSize: 18, fontFamily: "AmericanTypewriter-Bold", padding: 10 }}>Danh mục</Text>
              <Row>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                      height: 200,
                      borderRadius: 10
                    }}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={{ uri: 'https://kanjiart.net/wp/wp-content/uploads/2015/01/logo1.jpg' }}></Thumbnail>
                          <Body>
                            <Text style={{ fontSize: 20, fontFamily: "AmericanTypewriter-Bold" }}>Từ vựng</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={{ backgroundColor: "transparent", padding: 45 }}>
                        <Body>
                          <ProgressCircle
                            percent={50}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                      height: 200,
                      borderRadius: 10
                    }}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={{ uri: 'https://lh3.googleusercontent.com/proxy/hNlZAh16rcetjMJudyA-cNUhrrXII9rMaaPZNxis14f9umtC48z1hkSHo2Hh7DmAvXCLpfZh5TrGqSrsLykuMekEpurxnBZDfQDNll-Z_-3S-rMRywcOZZIXXMMZwQLsg29YvKunykVIwaXGeD4PksuEXX0GCCd5ilVthcW7KvuUMw' }}></Thumbnail>
                          <Body>
                            <Text style={{ fontSize: 20, fontFamily: "AmericanTypewriter-Bold" }}>Ngữ pháp</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={{ backgroundColor: "transparent", padding: 45 }}>
                        <Body>
                          <ProgressCircle
                            percent={30}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
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
                    <Card style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                      height: 200,
                      borderRadius: 10
                    }}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={{ uri: 'https://thumbs.dreamstime.com/b/read-newspaper-icon-logo-read-newspaper-icon-logo-white-background-137904119.jpg' }}></Thumbnail>
                          <Body>
                            <Text style={{ fontSize: 20, fontFamily: "AmericanTypewriter-Bold" }}>Đọc hiểu</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={{ backgroundColor: "transparent", padding: 45 }}>
                        <Body>
                          <ProgressCircle
                            percent={10}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
                          />
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col style={{ backgroundColor: '#fff', margin: 10 }}>
                  <TouchableOpacity>
                    <Card style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,
                      elevation: 9,
                      height: 200,
                      borderRadius: 10
                    }}>
                      <CardItem>
                        <Left style={{ borderWidth: 0 }}>
                          <Thumbnail borderRadius={1} source={{ uri: 'data:image/png;base64,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' }}></Thumbnail>
                          <Body>
                            <Text style={{ fontSize: 20, fontFamily: "AmericanTypewriter-Bold" }}>Nghe hiểu</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody style={{ backgroundColor: "transparent", padding: 45 }}>
                        <Body>
                          <ProgressCircle
                            percent={40}
                            radius={45}
                            borderWidth={8}
                            color="#00CE9F"
                            shadowColor="#939393"
                            bgColor="#fff"
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
                <Text style={{ fontSize: 18, fontFamily: "AmericanTypewriter-Bold", padding: 10 }}>Đề xuất thi thử</Text>
                <TouchableOpacity>
                  <Card style={{
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,
                    elevation: 9,
                    height: 200,
                    borderRadius: 10
                  }}>
                    <CardItem>
                      <Left style={{ borderWidth: 0 }}>
                        <Thumbnail borderRadius={1} source={{ uri: 'https://logodix.com/logo/1961524.png' }}></Thumbnail>
                        <Body>
                          <Text style={{ fontSize: 20, fontFamily: "AmericanTypewriter-Bold" }}>JLPT N3</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody style={{ backgroundColor: "transparent", padding: 45 }}>
                      <Body>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Icon name="alarm" style={{ fontSize: 25, color: '#fccb00' }}></Icon>
                          <Text style={{ fontSize: 15, fontFamily: "AmericanTypewriter-Bold", padding: 5 }}>140 phút</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <Icon name="book" style={{ fontSize: 25, color: '#fccb00' }}></Icon>
                          <Text style={{ fontSize: 15, fontFamily: "AmericanTypewriter-Bold", padding: 5 }}>180 điểm</Text>
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
          </Content>
        </ScrollView>
        <View style={{ flex: 1 }}>
          <Fab
            active={showFAB}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => setShowFAB(!showFAB)}
          >
            <Icon name="share" />
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
