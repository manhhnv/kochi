import { View, Text, Radio, Grid, Row, Col, Root, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { readingQuestions } from '../data/readingQuestions';
const { width, height } = Dimensions.get('screen');
const Question = ({questions}: any) => {
    const [userAnswer, setUserAnswer]: any = useState(null);
    const [arrayUserAnswer, setArrayUserAnswer]: any = useState([]);
    const updateUserAnswers = (questionId: number, answer: any) => {
        let index = arrayUserAnswer.findIndex((q: any) => q?.questionId === questionId)
        if (index !== -1) {
            let temporaryArray = arrayUserAnswer.slice();
            temporaryArray[index]['answer'] = answer;
            setArrayUserAnswer(temporaryArray)
        }
        else {
            setArrayUserAnswer([...arrayUserAnswer, { 'questionId': questionId, 'answer': answer }])
        }
        console.log(arrayUserAnswer)
    }
    return (
        <React.Fragment>
            {questions.map((q: any, i: number) => (
                <View key={i} style={{marginTop: 0.02*height}}>
                    <Text style={styles.lessonDetail}>
                        <Text style={[{ fontWeight: "bold", color: 'red' }, styles.lessonDetail]}>
                            問題：
                        </Text>
                        {q.content}
                    </Text>
                    {q.answers.map((a: any, k: number) => (
                        <View key={k} style={styles.answerRadio}>
                            <Radio
                                color="gray"
                                selectedColor="green"
                                onPress={() => updateUserAnswers(q.id, a)}
                                selected={arrayUserAnswer.some((e: any) => JSON.stringify(e) === JSON.stringify({ "questionId": q.id, "answer": a }))}
                            ></Radio>
                            <Text style={{ fontSize: 20 }}>{a.text}</Text>
                        </View>
                    ))}
                </View>
            ))}
            <Grid>
                <Root>
                    <Row style={{ marginTop: 0.1 * width, marginLeft: 0.17 * width, marginBottom: 0.18 * width }}>
                        <Col>
                            <Button success disabled={userAnswer !== null ? false : true}>
                                <Text
                                >
                                    Đáp án
                                            </Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                primary
                                onPress={() => console.log(arrayUserAnswer)}
                            >
                                <Text>Tiếp theo</Text>
                            </Button>
                        </Col>
                    </Row>
                </Root>
            </Grid>
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    answerRadio: {
        flexDirection: "row",
        marginTop: 0.01 * height,
        padding: 10,
        marginBottom: 0.01 * height,
    },
    lessonDetail: {
        lineHeight: 30,
        padding: 10,
        fontSize: 20,
    },
})
export default Question
