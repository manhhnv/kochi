import { Button, Spinner, Tab, Tabs, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import CountDown from '../../components/CountDown';
import Question from '../../components/Question';
import { generateReadingTesting } from '../../data/readingQuestions';
const { width, height } = Dimensions.get('screen')
const ReadingTest = ({navigation}: any) => {
    const [problems, setProblems]: any = useState(null);
    const [answers, setAnswers]: any = useState([]);
    const [timeoutFlag, setTimeoutFlag] = useState(false)
    const [finished,setFinished]: any = useState(false);
    useEffect(() => {
        setTimeout(() => {
            const response = generateReadingTesting();
            if (response !== null) {
                setProblems(response)
            }
        }, 500)
    }, [])
    const submitAnswers = () => {
        let totalQuestions = 0;
        problems.map((problem: any, i: number) => {
            totalQuestions += problem?.questions.length
        })
        let answersTotal = 0
        answers.map((answer: any, i: number) => {
            answersTotal += answer.length;
        })
        if (timeoutFlag == true) {
            setFinished(true)
            navigation.navigate("ReadingResult", {
                answers: answers,
                problems: problems
            })
            console.log("ANSWERS", answers)
            console.log("QUESTION", problems)
        }
        else {
            if (answersTotal < totalQuestions) {
                Alert.alert("Bạn phải điền đủ tất cả câu hỏi 😢")
            }
            else {
                setFinished(true)
                navigation.navigate("ReadingResult", {
                    answers: answers,
                    problems: problems
                })
                console.log("ANSWERS", answers)
                console.log("QUESTION", problems)
            }
        }
    }
    return (
        <React.Fragment>
            {problems != null ? (
                <>
                    <CountDown time={600} timeoutFlag={timeoutFlag} setTimeoutFlag={setTimeoutFlag} finished={finished}/>
                    <Tabs>
                        <Tab heading="問題 1" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                            <ScrollView style={{ backgroundColor: "white", marginTop: 10 }}>
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {problems[0].paragraph}
                                    </Text>
                                    <Image source={require('../../assets/images/illustration.jpg')} style={{ resizeMode: "cover", maxWidth: 0.956 * width, height: 0.3 * height }} />
                                </View>
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
                            <ScrollView style={{ backgroundColor: "white", marginTop: 10 }}>
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {problems[1].paragraph}
                                    </Text>
                                </View>
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
                            <ScrollView style={{ backgroundColor: "white", marginTop: 10 }}>
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {problems[2].paragraph}
                                    </Text>
                                </View>
                                <Question
                                    questions={problems[2].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={2}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab
                            heading="Kết thúc"
                            tabStyle={{ backgroundColor: "#00CE9F" }}
                            textStyle={{ color: "white" }}
                        >
                            <View style={styles.finish}>
                                <Button
                                    success onPress={submitAnswers}
                                >
                                    <Text style={{fontWeight: "bold", fontSize: 17}}>Nộp bài và kết thúc</Text>
                                </Button>
                            </View>
                        </Tab>
                    </Tabs>
                </>
            ) : (
                    <Spinner />
                )}
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    lessonDetail: {
        lineHeight: 30,
        padding: 7,
        fontSize: 20,
    },
    required: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold"
    },
    finish: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
});
export default ReadingTest;