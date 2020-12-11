import React from 'react';
import { VocabularyFCardProps } from "../../types";
import FlipCard from 'react-native-flip-card';
import { Button, Col, Container, Content, Thumbnail, View,Card, CardItem,Body,Text } from 'native-base';
import { ImageBackground, Dimensions,StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("screen");
import {VocabularyTestProps} from "../../types";
import {getAllAnswer} from "../../data/vocabulary/getVocabularyContent";

const Question = ({dataQuestion,nextTest,currentIndex,categoryId} :VocabularyTestProps) => {
    const dataAnswer = getAllAnswer(categoryId,currentIndex);
    const getAnswer = () => {
        for(let i = 0 ; i < dataAnswer.length; i++) {
            if(dataAnswer[i].correct) {
                return dataAnswer[i].text;
            }
        }
    }
    const answer_ = getAnswer();
    return (    
        <Content>
     
            <View style={styles.front}>
                <Text style={styles.text}>Question</Text> 
                <View style={styles.card}>
                    <Card >
                        <CardItem header bordered>

                            <Body  style={{alignItems:"center",justifyContent:"center"}}>
                                <Text style ={{color:"red",fontSize:20,textAlign:"center",}}>
                                    {dataQuestion[currentIndex -1].kanji}   
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={{alignItems:"center",justifyContent:"center"}}>
                                <Text style={{textAlign:"center"}}>{answer_}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={{marginTop:10}}>
                    <Button info full ><Text> Light </Text></Button>
                    </View>
                    
                </View>

            </View>
            <Button 
                primary full
                onPress={() => nextTest()}
                disabled={currentIndex == dataQuestion.length? true: false}
            ><Text style={{fontSize:25}}> NEXT </Text></Button>
            
        </Content>
    )
}
const styles = StyleSheet.create({
    front:{
        margin: 20, backgroundColor: "white", borderStyle: "solid",
        height: 0.5 * height, borderWidth: 0,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        position:"relative",
    },
    card:{
        paddingHorizontal:20,
        
    },
    text:{
        marginTop:5,
        marginLeft:10,
        
    },
    thumbnail:{
         marginLeft: 0.07 * width,
         position:"absolute",
         top:10,
         left:3,

    },

})

export default Question;