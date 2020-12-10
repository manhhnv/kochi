import { Button, Text, View, Icon } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import Question from '../Question'
import { Audio } from 'expo-av';
const { width, height } = Dimensions.get("screen");
const soundObject = new Audio.Sound();
const FragmentListening = ({
    questions,
    answers,
    setAnswers,
    answerStateIndex,
    timeoutFlag,
    route,
}: any) => {
    const [playing, setPlaying]: any = useState(false);
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
    return (
        <ScrollView style={{ backgroundColor: "white", marginTop: 10 }}>
            <Text style={styles.required}>
                まずCDを聞いて、以下の質問に答えてください。
            </Text>
            <Button onPress={playAudioHandle}>
                {playing === true ? (
                    <Icon type="AntDesign" name="pausecircle" />
                ) : (
                        <Icon type="AntDesign" name="caretright" />
                    )}
            </Button>
            <Question
                questions={questions}
                answers={answers}
                setAnswers={setAnswers}
                answerStateIndex={answerStateIndex}
                timeoutFlag={timeoutFlag}
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    required: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",
        color: "red"
    },
});
export default FragmentListening
