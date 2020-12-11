import React,{useEffect,useState} from 'react';
import { VocabularyFCardProps } from "../../types";
import FlipCard from 'react-native-flip-card';
import { Button, Col, Container, Content, Thumbnail, View,Card, CardItem,Body,Text } from 'native-base';
import { ImageBackground, Dimensions,StyleSheet } from 'react-native';
const { width, height } = Dimensions.get("screen");
import {VocabularyTestProps} from "../../types";
import {getAllAnswer,shuffle} from "../../data/vocabulary/getVocabularyContent";


const Question = ({dataQuestion,nextTest,currentIndex,categoryId} :VocabularyTestProps) => {

        const [correct,setCorrect] = useState([false, false, false, false]);
        const [groupAnswser, setGroupAnswer] = useState<any[]>([]);
        const [choose,setChoose] = useState(false)
        const [answer,setAnswer] = useState('');
        const dataAnswer = getAllAnswer(categoryId,currentIndex );
        const getAnswer = () => {
            for(let i = 0 ; i < dataAnswer.length; i++) {
                if(dataAnswer[i].correct) {
                    return dataAnswer[i].text;
                }
            }
        }
        const getFourAnswer = () => {
            let data = [];
            for(let i = 0 ; i < dataAnswer.length; i++){
                data.push(Object.assign({},{text:dataAnswer[i].text,id:i +1}));
            }
            shuffle(data);
            return data;
        }

        useEffect(() => {
            setGroupAnswer(getFourAnswer());
            setAnswer(getAnswer());
        }, [currentIndex])

        // const answer_ = getAnswer();
        const checkAnswer =(item :any, idx: number) => {
            setChoose(true)
            if(item.text === answer) {
                
                
               setCorrect(prev => {
                   return [
                       ...prev.slice(0, idx),
                       true,
                       ...prev.slice(idx + 1)
                   ]
               });
            }
        }
        


        const nextQuestion = () => {
            setChoose(false);
            setCorrect([false, false, false, false]);
            nextTest();
        }
        
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
                                <Text style={[{textAlign:"center"}, !choose ? {display: "none"} : {} ]}>{answer}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={{marginTop:10}}>
                    {groupAnswser.map((item,index) => (
                        <Button 
                            info  full key ={index} 
                            style={[{marginBottom:2}, (choose && correct[index]) ? {backgroundColor:"#5cb85c"} : choose ? {backgroundColor:"#d9534f"} : {}]} 
                            onPress={() => checkAnswer(item,index)}
                        >
                                <Text>{item.text}</Text>
                        
                        </Button> 
                    ))}
                    </View>
                    
                </View>

            </View>
            <Button 
                primary full
                onPress={() => nextQuestion()}
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