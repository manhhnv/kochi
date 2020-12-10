import { Body, Button, Container, Header, Icon, Left, Spinner, Text, Title, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av';
import Question from '../../components/Question';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('screen')
const soundObject = new Audio.Sound();
const ListeningDetail = ({ route, navigation, listening }: any) => {
    const { lessonId, category } = route.params;
    const [playing, setPlaying]: any = useState(false);
    const [answers, setAnswers]: any = useState([]);
    const [lesson, setLesson]: any = useState(null);
    const [check, setCheck] = useState(false);
    const playAudioHandle = async () => {
        try {
            if (playing == false) {
                if (!soundObject._loaded) {
                    await soundObject.loadAsync(require('../../assets/audio/audio.mp3'))
                }
                await soundObject.setVolumeAsync(1)
                await soundObject.playAsync();
                setPlaying(true)
            }
            else {
                await soundObject.pauseAsync()
                setPlaying(false)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    const pauseAudioHandle = async () => {
        try {
            if (soundObject._loaded == true) {
                await soundObject.pauseAsync()
                setPlaying(false)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        try {
            if (soundObject._loaded == true) {
                soundObject.pauseAsync()
                soundObject.unloadAsync()
            }
        }
        catch (e) {
            console.log(e)
        }
    }, [route])
    useEffect(() => {
        if (listening !== null) {
            const arrayLessonsByCategory = listening[category];
            for (let i: number = 0; i < arrayLessonsByCategory.length; i++) {
                if (arrayLessonsByCategory[i]?.id === lessonId) {
                    setLesson(arrayLessonsByCategory[i])
                    break;
                }
            }
        }
    }, [listening])
    const checkAnswerHandle = () => {

    }
    return (
        <Container style={{ paddingTop: 20 }}>
            <Header style={{ backgroundColor: "#00CE9F" }}>
                <Left>

                    <Icon
                        name="arrowleft" type="AntDesign" style={{ color: "black" }}
                        onPress={() => { pauseAudioHandle(); navigation.goBack() }}
                    ></Icon>

                </Left>
                <Body>
                    <Title>Luyện tập</Title>
                </Body>
            </Header>
            <View style={{paddingBottom: 0.2*height}}>
                {lesson !== null ? (
                    <React.Fragment>
                        <Button onPress={playAudioHandle} full>
                            {playing === true ? (
                                <Icon type="AntDesign" name="pausecircle" />
                            ) : (
                                    <Icon type="AntDesign" name="caretright" />
                                )}
                        </Button>
                        <ScrollView>
                            <Text style={styles.require}>{lesson?.require}</Text>
                            <Question
                                questions={lesson.questions}
                                answerStateIndex={0}
                                answers={answers}
                                setAnswers={setAnswers}
                                timeoutFlag={false}
                            />
                            <Button success onPress={() => console.log(answers)}>
                                <Text>Kiểm tra đáp án</Text>
                            </Button>
                        </ScrollView>
                    </React.Fragment>
                ): (
                    <Spinner />
                )}
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    require: {
        fontSize: 20,
        padding: 10,
        color: "red",
    }
});
const mapStateToProps = (state: any) => {
    return {
        listening: state.listening
    }
}
export default connect(mapStateToProps, null)(React.memo(ListeningDetail))
