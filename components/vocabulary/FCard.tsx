import React from 'react';
import { VocabularyFCardProps } from "../../types";
import FlipCard from 'react-native-flip-card';
import { Button, Col, Container, Content, Grid, Icon, Row, Thumbnail, View, } from 'native-base';
import { ImageBackground, Dimensions, Text } from 'react-native';
const { width, height } = Dimensions.get("screen");
const FCard = ({
    kanji, hiragana, vnjp, marked, mean, currentIndex,
    previousWord, nextWord
}: VocabularyFCardProps) => {
    return (
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
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>{kanji}</Text>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 30, flexWrap: "wrap", paddingTop: 20 }}>{vnjp}</Text>
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
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>{hiragana}</Text>
                    <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap", paddingTop: 20 }}>{mean}</Text>
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
                            <Icon type="MaterialCommunityIcons" name="star" style={marked == true ? {color: "#fccb00"}: null}></Icon>
                        </Button>
                    </Col>
                    <Col>
                        <Button large bordered success onPress={() => previousWord()} disabled={currentIndex === 1 ? true : false}>
                            <Icon type="MaterialCommunityIcons" name="skip-previous"></Icon>
                        </Button>
                    </Col>
                    <Col>
                        <Button large bordered success onPress={() => nextWord()} disabled={currentIndex === 120 ? true : false}>
                            <Icon type="MaterialCommunityIcons" name="skip-next"></Icon>
                        </Button>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}
export default FCard;