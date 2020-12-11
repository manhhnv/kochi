import { Body, Container, Left, ListItem, Separator, Text, Button } from 'native-base'
import React from 'react'
import { ScrollView, View } from 'react-native'

function VocabularyResult({ answers, problems }: any) {
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
        <>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                {problems.questions.map((question: any, j: number) => (
                    <ListItem key={j}>
                        <Left>
                            <Text style={{ fontSize: 20 }}>問題 {j + 1}</Text>
                        </Left>
                        <Body style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            {question.answers.map((answer: any, k: number) => {
                                let rgb;
                                try {
                                    if (answers[j] !== undefined) {
                                        rgb = correctAnswer(answer, answers[j]);
                                    }
                                    else {
                                        rgb = "#939393"
                                    }
                                }
                                catch (e) {
                                    // console.log(e)
                                    if (answer.correct != true) {
                                        rgb = "#939393";
                                    }
                                }
                                return (
                                    <React.Fragment key={k}>
                                        <Button key={j} style={{ backgroundColor: rgb }}>
                                            <Text>{k + 1}</Text>
                                        </Button>
                                    </React.Fragment>
                                )
                            })}
                        </Body>
                    </ListItem>
                ))}
            </ScrollView>
        </>
    )
}

export default VocabularyResult
