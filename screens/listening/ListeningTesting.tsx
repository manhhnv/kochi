import { Tab, Tabs, Text, View, Button, Spinner } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native';
import CountDown from '../../components/CountDown';
import FragmentListening from '../../components/listening/FragmentListening';
import Question from '../../components/Question';
import { generateListeningTest } from '../../data/generateListeningTest';
const ListeningTesting = ({navigation, route}: any) => {
    const [timeoutFlag, setTimeoutFlag] = useState(false);
    const [answers, setAnswers]: any = useState([]);
    const [finished,setFinished]: any = useState(false);
    const [data, setData]: any = useState(null);
    useEffect(() => {
        const res = generateListeningTest();
        setData(res)
    }, [])
    const submitAnswer = () => {
        let totalQuestions = 0;
        data.map((problem: any, i: number) => {
            totalQuestions += problem?.questions.length
        })
        let answersTotal = 0
        answers.map((answer: any, i: number) => {
            answersTotal += answer.length;
        })
        if (timeoutFlag == true) {
            setFinished(true)
            navigation.navigate("TestingResult", {answers: answers, problems: data})
            // console.log("ANSWERS", answers)
            // console.log("DATA-QUESTION", data)
        }
        else {
            if (answersTotal < totalQuestions) {
                Alert.alert("Bạn phải điền đủ tất cả câu hỏi 😢")
            }
            else {
                setFinished(true)
                navigation.navigate("TestingResult", {answers: answers, problems: data})
                console.log("ANSWERS", answers)
                console.log("DATA-QUESTION", data)
            }
        }
    }
    return (
        <React.Fragment>
            {data !== null ? (
                <React.Fragment>
                    <CountDown time={60} timeoutFlag={timeoutFlag} setTimeoutFlag={setTimeoutFlag} finished={finished}/>
            <Tabs>
                <Tab heading="問題 1" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                    <FragmentListening
                        questions={data[0].questions}
                        answers={answers}
                        setAnswers={setAnswers}
                        answerStateIndex={0}
                        timeoutFlag={timeoutFlag}
                        route={route}
                        finished={finished}
                        
                    />
                </Tab>
                <Tab heading="問題 2" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                    <FragmentListening
                        questions={data[1].questions}
                        answers={answers}
                        setAnswers={setAnswers}
                        answerStateIndex={1}
                        timeoutFlag={timeoutFlag}
                        route={route}
                        finished={finished}
                       
                    />
                </Tab>
                <Tab heading="問題 3" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }}>
                    <FragmentListening
                        questions={data[2].questions}
                        answers={answers}
                        setAnswers={setAnswers}
                        answerStateIndex={2}
                        timeoutFlag={timeoutFlag}
                        route={route}
                        finished={finished}
                       
                    />
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
            ): (
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

export default ListeningTesting
