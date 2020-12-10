import { View, Text, Radio, Grid, Row, Col, Root, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { readingQuestions } from '../data/readingQuestions';
const { width, height } = Dimensions.get('screen');
const Question = ({questions}: any) => {
    const [userAnswer, setUserAnswer]: any = useState(null);
    const [arrayUserAnswer, setArrayUserAnswer]: any = useState([]);
    const updateUserAnswers = (questionId: number, answer: any, score: number) => {
        let index = arrayUserAnswer.findIndex((q: any) => q?.questionId === questionId)
        if (index !== -1) {
            let temporaryArray = arrayUserAnswer.slice();
            temporaryArray[index]['answer'] = answer;
            setArrayUserAnswer(temporaryArray)
        }
        else {
            setArrayUserAnswer([...arrayUserAnswer, { 'questionId': questionId, 'answer': answer, score: score}])
        }
        console.log(arrayUserAnswer)
    }
    return (
        <React.Fragment>
            {questions.map((q: any, i: number) => (
                <View key={i} style={{marginTop: 0.02*height, marginBottom: 0.05*height}}>
                    <Text style={styles.lessonDetail}>
                        <Text style={[{ fontWeight: "bold", color: 'red' }, styles.lessonDetail]}>
                            問題{ ' ' + (1+i)}：
                        </Text>
                        {q.content}
                    </Text>
                    {q.answers.map((a: any, k: number) => (
                        <View key={k} style={styles.answerRadio}>
                            <Radio
                                color="gray"
                                selectedColor="green"
                                onPress={() => updateUserAnswers(q.id, a, q.score)}
                                selected={arrayUserAnswer.some((e: any) => JSON.stringify(e) === JSON.stringify({ "questionId": q.id, "answer": a, score: q.score}))}
                            ></Radio>
                            <Text style={{ fontSize: 20 }}>{a.text}</Text>
                        </View>
                    ))}
                </View>
            ))}
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
