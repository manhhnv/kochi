import { Button, Content, Radio, Text, View } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
const ReadingDetail = ({ route, navigation }: any) => {
    console.log("LESSON", route.params.lesson)
    const { lesson } = route.params;
    const [userAnswer, setUserAnswer]: any = useState(null);
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <Animatable.View animation="fadeIn" style={styles.container} duration={1000}>
                <Text style={styles.lessonTitle}>
                    {lesson.title}
                </Text>
                <Text style={styles.lessonDetail}>
                    {lesson.paragraph}
                </Text>
                <Text style={styles.lessonDetail}>
                    <Text style={[{ fontWeight: "bold" }, styles.lessonDetail]}>
                        問題：
                    </Text>
                    {lesson.question}
                </Text>
                {lesson.answers.map((answer: any, i: number) => (
                    <View key={i} style={styles.answerRadio}>
                        <Radio color="gray" selected={userAnswer === i+1} selectedColor="green" onPress={() => setUserAnswer(answer.id)}/>
                        <Text style={{ fontSize: 20 }}>{answer.text}</Text>
                    </View>
                ))}
                <View style={{flexDirection: "row", alignSelf: "center"}}>
                    <Button success>
                        <Text>Đáp án</Text>
                    </Button>
                    <Button primary>
                        <Text>Bài tiếp theo</Text>
                    </Button>
                </View>
            </Animatable.View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    lessonTitle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
    },
    lessonDetail: {
        lineHeight: 30,
        padding: 10,
        fontSize: 20
    },
    answerRadio: {
        flexDirection: "row",
        marginTop: 0.01 * height,
        padding: 10,
        marginBottom: 0.01 * height,
    }
})
export default ReadingDetail;