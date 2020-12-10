import { Body, Button, Container, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
const {width, height} = Dimensions.get("screen");
const ListeningResult = ({ navigation, route, listening }: any) => {
    const { lessonId, answers, category, questions } = route.params;
    console.log(answers)
    const correctAnswer = (result: any, answer: any) => {
        if (result.correct == true) {
            return "#0fc33b";
        }
        else if (result.id == answer.answer.id && result.correct == false) {
            return "red";
        }
        return "#939393";
    }
    return (
        <React.Fragment>
            <Container>
                <List>
                    {questions.map((question: any, i: number) => (
                        <ListItem key={i}>
                            <Left>
                                <Text style={{fontSize: 20}}>問題 {i + 1}</Text>
                            </Left>
                            <Body style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                {question.answers.map((answer: any, j: number) => {
                                    const rgb = correctAnswer(answer, answers[i]);
                                    return (
                                        <React.Fragment key={j}>
                                            <Button key={j} style={{backgroundColor: rgb}}>
                                                <Text>{j + 1}</Text>
                                            </Button>
                                        </React.Fragment>
                                    )
                                })}
                            </Body>
                        </ListItem>
                    ))}
                    <ListItem style={{marginLeft: 0.12*width, justifyContent: "center"}}>
                        <Left>
                            <Button danger onPress={() => navigation.navigate("ListeningLessons", {category: category})}>
                                <Text>Menu</Text>
                                <Icon type="AntDesign" name="menu-unfold" />
                            </Button>
                        </Left>
                        <Body>
                        <Button success onPress={() => navigation.goBack()}>
                            <Text>Làm lại</Text>
                            <Icon type="AntDesign" name="reload1"/>
                            </Button>
                        </Body>
                    </ListItem>
                </List>
            </Container>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        listening: state.listening
    }
}
export default connect(mapStateToProps, null)(React.memo(ListeningResult));