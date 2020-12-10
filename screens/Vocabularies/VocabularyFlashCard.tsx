import React, { useEffect, useState } from 'react'
import FCard from "../../components/vocabulary/FCard";
import { Dimensions, Text } from 'react-native';
import { Button, Container, Content, View, Icon } from 'native-base';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get("screen");
const VocabularyFlashCard = ({  navigation, courses,data }: any) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [marked,setMarked] = useState(false);

    const handleMarked = () => {
        setMarked(!marked);
    }
    const nextWord = () => {
        setCurrentIndex((prevState) => prevState + 1);
    }
    const previousWord = () => { 
        setCurrentIndex((prevState) => prevState - 1);
    }

    useEffect(() => {
       
    }, [])
    return (
        <Container>
            <Content>
                {data ? (
                    <React.Fragment>
                        <FCard
                            previousWord={previousWord} nextWord={nextWord}
                            currentIndex={currentIndex} kanji={data[currentIndex - 1].kanji}
                            hiragana={data[currentIndex - 1].hiragana} marked={marked} mean={data[currentIndex - 1].meaning}
                            amount={data.length} onMarked = {handleMarked}
                        />
                    </React.Fragment>
                ) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(VocabularyFlashCard));
