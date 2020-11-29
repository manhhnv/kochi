import React, { useEffect, useState } from 'react'
import FCard from '../components/vocabulary/FCard';
import { Dimensions, Text } from 'react-native';
import { Button, Container, Content, View, Icon } from 'native-base';
import { getVocabularyLesson } from '../redux/actions/coursesAction';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get("screen");
const Vocabularies = ({ route, navigation, getVocabularyLesson, courses }: any) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPlay, setIsPlay] = useState(false);
    const nextWord = () => {
        setCurrentIndex((prevState) => prevState + 1);
    }
    const previousWord = () => {
        setCurrentIndex((prevState) => prevState - 1);
    }
    const { lessonId } = route.params;
    useEffect(() => {
        console.log(lessonId)
        getVocabularyLesson(lessonId);
    }, [])
    return (
        <Container>
            <Content>
                {courses && courses.vocabularies && courses.totalWords > 0 ? (
                    <React.Fragment>
                        <Text style={{ textAlign: "center", position: "relative", top: 0.05 * height, fontSize: 30, flexWrap: "wrap" }}>{courses.from + currentIndex-1} / {courses.to}</Text>
                        <FCard
                            previousWord={previousWord} nextWord={nextWord}
                            currentIndex={currentIndex} kanji={courses.vocabularies[currentIndex - 1].kanji} vnjp={courses.vocabularies[currentIndex - 1].vnjp}
                            hiragana={courses.vocabularies[currentIndex - 1].hiragana} marked={true} mean={courses.vocabularies[currentIndex - 1].mean}
                        />
                    </React.Fragment>
                ) : null}
                <View style={{ marginLeft: 0.23 * width, marginTop: 0.05 * height }}>
                    <Button large bordered success>
                        <Text style={{ color: "#007bff", fontWeight: "bold", fontSize: 20, paddingLeft: 10, paddingBottom: 10, paddingTop: 10 }}>Hoàn thành bài học</Text>
                        <Icon name='checkmark-circle' />
                    </Button>
                </View>
            </Content>
        </Container>
    )
}
const mapStateToProps = (state: any) => {
    return {
        courses: state.courses,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getVocabularyLesson: (lessonId: number) => {
            dispatch(getVocabularyLesson(lessonId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Vocabularies));
