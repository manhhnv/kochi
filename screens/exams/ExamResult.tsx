import { Text } from 'native-base';
import React from 'react'
import { ScrollView } from 'react-native';
import VocabularyResult from '../../components/exam/VocabularyResult';

const ExamResult = ({route}: any) => {
    const {
        vocabulary, answersVocabulary,
        grammar, answersGrammar,
        listening, answersListening,
        reading, answerReading
    } = route.params;
    console.log(answerReading)
    console.log(reading)
    return (
        <React.Fragment>
            <ScrollView>
            <Text>文字</Text>
            <VocabularyResult
                answers={answersVocabulary}
                problems={{questions: vocabulary}}
            />
            <Text>文法</Text>
            <VocabularyResult
                answers={answersGrammar}
                problems={{questions: grammar}}
            />
            <Text>聴解</Text>
            <VocabularyResult
                answers={answersListening}
                problems={{questions: listening}}
            />
            <Text>読解</Text>
            <VocabularyResult
                answers={answerReading}
                problems={{questions: reading}}
            />
            </ScrollView>
        </React.Fragment>
    )
}

export default ExamResult
