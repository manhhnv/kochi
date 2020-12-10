import { Text, View, Tabs, Tab, Button, Spinner } from 'native-base'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Alert } from 'react-native';
import CountDown from '../../components/CountDown';
import Question from '../../components/Question';
import { generateTestingSet } from '../../redux/actions/grammarAction';

const TestingGrammar = ({ navigation, route }: any) => {
    const [problems, setProblems]: any = useState(null);
    const [timeoutFlag, setTimeoutFlag] = useState(false);
    const [finished, setFinished]: any = useState(false);
    const [answers, setAnswers]: any = useState([]);
    useEffect(() => {
        generateTestingSet()
            .then(res => {
                setProblems(res)
            })
    }, [])
    const submitAnswer = () => {
        let totalQuestions = 0;
        problems.map((problem: any, i: number) => {
            totalQuestions += problem?.questions.length
        })
        let answersTotal = 0
        answers.map((answer: any, i: number) => {
            answersTotal += answer.length;
        })
        console.log("AHAHA", answersTotal)
        if (timeoutFlag == true) {
            setFinished(true)
            navigation.navigate("GrammarTestingResult", {answers: answers, problems: problems})
            // console.log("ANSWERS", answers)
            // console.log("DATA-QUESTION", data)
        }
        else {
            if (answersTotal < totalQuestions) {
                Alert.alert("Bạn phải điền đủ tất cả câu hỏi 😢")
            }
            else {
                setFinished(true)
                navigation.navigate("GrammarTestingResult", {answers: answers, problems: problems})
                console.log("ANSWERS", answers)
                console.log("DATA-QUESTION", problems)
            }
        }
    }
    return (
        <React.Fragment>
            {problems !== null ? (
                <React.Fragment>
                    <CountDown time={1200} timeoutFlag={timeoutFlag} setTimeoutFlag={setTimeoutFlag} finished={finished} />
                    <Tabs>
                        <Tab heading="問題 1" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                            <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
                                <Question
                                    questions={problems[0].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={0}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="問題 2" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                            <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
                                <Question
                                    questions={problems[1].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={1}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="問題 3" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                            <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
                                <Question
                                    questions={problems[2].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={2}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="Kết thúc" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                            <View style={styles.finish}>
                                <Button
                                    success
                                    onPress={submitAnswer}
                                >
                                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>Nộp bài và kết thúc</Text>
                                </Button>
                            </View>
                        </Tab>
                    </Tabs>
                </React.Fragment>
            ) : (
                    <Spinner />
                )}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    required: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",
        color: "red"
    },
    finish: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})
export default TestingGrammar
