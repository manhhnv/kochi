import { Spinner, Text, Tabs, Tab, ScrollableTab, View, Button } from 'native-base'
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CountDown from '../../components/CountDown';
import Question from '../../components/Question';
import { generateGrammar, generateListening, generateReading, generateVocabulary } from "../../redux/actions/examAxtion";

const Exam = ({navigation}: any) => {
    const [vocabulary, setVocabulary]: any = useState(null);
    const [grammar, setGrammar]: any = useState(null);
    const [listening, setListening]: any = useState(null);
    const [reading, setReading]: any = useState(null);
    const [answers, setAnswers]: any = useState([]);
    const [finished, setFinished]: any = useState(false);
    const [timeoutFlag, setTimeoutFlag] = useState(false);
    const submitAnswers = () => {
        setFinished(true)
        navigation.navigate("ExamResult", {
            vocabulary: vocabulary,
            answersVocabulary: answers[0],
            grammar: grammar,
            answersGrammar: answers[1],
            listening: listening[0],
            answersListening: answers[2],
            reading: reading[0].questions.concat(reading[1].questions.concat(reading[2].questions)),
            answerReading: answers[3]
        })
    }
    useEffect(() => {
        generateVocabulary()
            .then(res => {
                setVocabulary(res)
                console.log("RES1", res)
            })
            .catch(e => {
                console.log(e)
            })
        generateGrammar()
            .then(res => {
                setGrammar(res)
            })
            .catch(e => {
                console.log(e)
            })
        generateListening()
            .then(res => {
                setListening(res)
                console.log("RES1", res)
            })
            .catch(e => {
                console.log(e)
            })
        generateReading()
            .then(res => {
                setReading(res)
                console.log("Reading", res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <React.Fragment>
            {vocabulary !== null && grammar !== null && reading !== null && listening !== null ? (
                <React.Fragment>
                    <CountDown time={8400} timeoutFlag={timeoutFlag} setTimeoutFlag={setTimeoutFlag} finished={finished} />
                    <Tabs renderTabBar={() => <ScrollableTab />}>
                        <Tab heading="文字">
                            <ScrollView style={{ backgroundColor: "#fff" }}>
                                <Question
                                    questions={vocabulary}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={0}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="文法">
                            <ScrollView style={{ backgroundColor: "#fff" }}>
                                <Question
                                    questions={grammar}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={1}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="聴解">
                            <ScrollView style={{ backgroundColor: "#fff" }}>
                                <Question
                                    questions={listening[0]}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={2}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="読解">
                            <ScrollView style={{ backgroundColor: "#fff" }}>
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {reading[0].paragraph}
                                    </Text>
                                </View>
                                <Question
                                    questions={reading[0].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={3}
                                    timeoutFlag={timeoutFlag}
                                />
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {reading[1].paragraph}
                                    </Text>
                                </View>
                                <Question
                                    questions={reading[1].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={3}
                                    timeoutFlag={timeoutFlag}
                                />
                                <Text style={styles.required}>
                                    文章を読んで、以下の質問に答えてください。
                                </Text>
                                <View style={{ borderWidth: 3, margin: 5 }}>
                                    <Text style={styles.lessonDetail}>
                                        {reading[2].paragraph}
                                    </Text>
                                </View>
                                <Question
                                    questions={reading[2].questions}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                    answerStateIndex={3}
                                    timeoutFlag={timeoutFlag}
                                />
                            </ScrollView>
                        </Tab>
                        <Tab heading="Kết thúc">
                            <View style={styles.finish}>
                                <Button
                                    success
                                    onPress={submitAnswers}
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
export default Exam
