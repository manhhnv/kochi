import { Spinner, Tab, Tabs, Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import CountDown from '../../components/CountDown';
import Question from '../../components/Question';
import { generateReadingTesting } from '../../data/readingQuestions';
const { width, height } = Dimensions.get('screen')
const ReadingTest = () => {
    const [problems, setProblems]: any = useState(null);
    useEffect(() => {
        setTimeout(() => {
            const response = generateReadingTesting();
            if (response !== null) {
                setProblems(response)
            }
        }, 500)
    }, [])
    return (
        <React.Fragment>
            {problems != null ? (
                <>
                    <CountDown time={600} />
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
                                <Question questions={problems[0].questions} />
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
                                <Question questions={problems[1].questions} />
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
                                <Question questions={problems[2].questions} />
                            </ScrollView>
                        </Tab>
                        <Tab heading="Kết thúc" tabStyle={{ backgroundColor: "#00CE9F" }} textStyle={{ color: "white" }} />
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
    }
});
export default ReadingTest;