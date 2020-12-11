import React, { useEffect, useState } from 'react'
import FCard from "../../components/vocabulary/FCard";
import { Dimensions, Text } from 'react-native';
import { Button, Container, Content, View, Icon } from 'native-base';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get("screen");
import Question  from "../../components/vocabulary/Question";
import {getAllQuestion,getAllAnswer} from "../../data/vocabulary/getVocabularyContent";
const VocabularyTest = ({  navigation,route }: any) => {
    const {categoryId,listId} = route.params;
    const [currentIndex, setCurrentIndex] = useState(1);
    const dataQuestion = getAllQuestion(categoryId);
    // const dataAnswer = getAllAnswer()
    const nextTest = () => {
        setCurrentIndex((prevState) => prevState + 1);
    }
    const previousTest = () => { 
        setCurrentIndex((prevState) => prevState - 1);
    }

    return (
        <Container>
            <Content>
                <Question 
                    dataQuestion = {dataQuestion} nextTest={nextTest}
                    currentIndex = {currentIndex} categoryId = {categoryId}
                
                ></Question>
            </Content>
        </Container>
    )
}
const mapStateToProps = (state: any) => {
    return {
       
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VocabularyTest));
