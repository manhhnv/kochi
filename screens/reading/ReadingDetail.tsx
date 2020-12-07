import {
    Button, Col, Content, Grid, Radio, Row, Text, View,
    ActionSheet,
    Container,
    Root,
    Icon
} from 'native-base';
import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
const ReadingDetail = ({ route, navigation }: any) => {
    console.log("LESSON", route.params.lesson)
    const { lesson } = route.params;
    const [userAnswer, setUserAnswer]: any = useState(null);
    const [resultCheck, setResultCheck]: any = useState(false);
    const scrollRef: any = useRef();
    const showResultCheck = () => {
        scrollRef.current.scrollTo({x: 0, y: 0, animated: true})
        setResultCheck(true);
    }
    return (
        <ScrollView ref={scrollRef} style={{ backgroundColor: "white" }} scrollEnabled={!resultCheck}>
            <Animatable.View animation="fadeIn" style={styles.container} duration={1000}>
                <Text style={styles.lessonTitle}>
                    {lesson.title}
                </Text>
                <Text style={styles.lessonDetail}>
                    {lesson.paragraph}
                </Text>
                <Text style={styles.lessonDetail}>
                    <Text style={[{ fontWeight: "bold", color: 'red' }, styles.lessonDetail]}>
                        問題：
                    </Text>
                    {lesson.question}
                </Text>
                {lesson.answers.map((answer: any, i: number) => (
                    <View key={i} style={styles.answerRadio}>
                        <Radio color="gray" selected={userAnswer === i + 1} selectedColor="green" onPress={() => setUserAnswer(answer.id)} />
                        <Text style={{ fontSize: 20 }}>{answer.text}</Text>
                    </View>
                ))}
                <Grid>
                    <Root>
                        <Row style={{ marginTop: 0.1 * width, marginLeft: 0.17 * width, marginBottom: 0.18 * width }}>
                            <Col>
                                <Button success onPress={showResultCheck} disabled={userAnswer !== null ? false : true}>
                                    <Text
                                    >
                                        Đáp án
                                </Text>
                                </Button>
                            </Col>
                            <Col>
                                <Button primary>
                                    <Text>Tiếp theo</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Root>
                </Grid>
                {resultCheck == true ? (
                    <View style={styles.result}>
                        <Button iconLeft danger onPress={() => setResultCheck(false)}>
                            <Icon name='close' />
                            <Text>Close</Text>
                        </Button>
                    </View>
                ): null}
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
        color: 'blue'
    },
    lessonDetail: {
        lineHeight: 30,
        padding: 10,
        fontSize: 20,
    },
    answerRadio: {
        flexDirection: "row",
        marginTop: 0.01 * height,
        padding: 10,
        marginBottom: 0.01 * height,
    },
    result: {
        height: 0.6*height,
        backgroundColor: 'green',
        position: "relative",
        top: -1.1*height,
        margin: 15,
        borderRadius: 15
    }
})
export default React.memo(ReadingDetail);