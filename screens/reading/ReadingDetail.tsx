import {
    Button, Col, Content, Grid, Radio, Row, Text, View,
    ActionSheet,
    Container,
    Root,
    Icon,
    Thumbnail,
    Spinner
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('screen');
const ReadingDetail = ({ route, navigation, reading }: any) => {
    const { lessonId, readingCategory } = route.params;
    const [userAnswer, setUserAnswer]: any = useState(null);
    const [resultCheck, setResultCheck]: any = useState(false);
    const scrollRef: any = useRef();
    const showResultCheck = () => {
        scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
        setResultCheck(true);
    }
    const [lesson, setLesson]: any = useState(null);
    useEffect(() => {
        if (reading) {
            let length: number;
            if (readingCategory == 1) {
                length = reading.short.length;
                for (let i: number = 0; i < length; i++) {
                    if (reading.short[i].id == lessonId) {
                        setLesson(reading.short[i])
                        break;
                    }
                }
            }
            else if (readingCategory == 2) {
                length = reading.medium.length;
                for (let i: number = 0; i < length; i++) {
                    if (reading.medium[i].id == lessonId) {
                        setLesson(reading.medium[i])
                        break;
                    }
                }
            }
            else if (readingCategory == 3) {
                length = reading.long.length;
                for (let i: number = 0; i < length; i++) {
                    if (reading.long[i].id == lessonId) {
                        setLesson(reading.long[i])
                        break;
                    }
                }
            }
        }
    }, [lessonId, readingCategory])
    return (
        <React.Fragment>
            {lesson !== null ? (
                <ScrollView ref={scrollRef} style={{ backgroundColor: "white" }} scrollEnabled={!resultCheck}>
                <Animatable.View animation="fadeIn" style={styles.container} duration={1000}>
                    <Text style={styles.lessonTitle}>
                        {lesson.title}
                    </Text>
                    <View style={{ borderWidth: 3, margin: 5 }}>
                        <Text style={[styles.lessonDetail]}>
                            {lesson.paragraph}
                        </Text>
                        <Image source={require('../../assets/images/illustration.jpg')} style={{ resizeMode: "cover", maxWidth: 0.956 * width, height: 0.3 * height }} />
                    </View>
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
                                <Text></Text>
                            </Button>
                        </View>
                    ) : null}
                </Animatable.View>
            </ScrollView>
            ): (
                <Spinner/>
            )}
        </React.Fragment>
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
        height: 0.6 * height,
        backgroundColor: 'green',
        position: "absolute",
        top: 0.1 * height,
        margin: 15,
        borderRadius: 15,
        width: 0.92 * width
    }
})
const mapStateToProps = (state: any) => {
    return {
        reading: state.reading,
    }
}
export default connect(mapStateToProps, null)(React.memo(ReadingDetail));