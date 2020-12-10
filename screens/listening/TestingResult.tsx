import { Body, Container, Left, ListItem, Separator, Text, Button } from 'native-base'
import React from 'react'
import { ScrollView, View } from 'react-native'

function TestingResult({navigation, route}: any) {
    const {answers, problems} = route.params;
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
        
            <ScrollView style={{backgroundColor: "#fff"}}>
                {problems.map((problem: any, i: number) => (
                    <React.Fragment key={i}>
                        <Separator bordered>
                            <Text style={{fontSize: 25, fontWeight: "bold", color: "red"}}>問題 {i+1}</Text>
                        </Separator>
                        {problem.questions.map((question: any, j: number) => (
                            <ListItem>
                                <Left>
                                    <Text style={{fontSize: 20}}>問題 {j + 1}</Text>
                                </Left>
                                <Body style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    {question.answers.map((answer: any, k: number) => {
                                        let rgb;
                                        try {
                                            if (answers[i][j] !== undefined) {
                                                rgb = correctAnswer(answer, answers[i][j]);
                                            }
                                            else {
                                                rgb="#939393"
                                            }
                                        }
                                        catch(e) {
                                            // console.log(e)
                                            rgb="#939393"
                                        }
                                        return (
                                            <React.Fragment key={k}>
                                                <Button key={j} style={{backgroundColor: rgb}}>
                                                    <Text>{k + 1}</Text>
                                                </Button>
                                            </React.Fragment>
                                        )
                                    })}
                                </Body>
                            </ListItem>
                        ))}
                    </React.Fragment>
                ))}
            </ScrollView>
    )
}

export default TestingResult
