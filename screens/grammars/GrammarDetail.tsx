import { Button, Left, ListItem, Right, Spinner, Text, View } from 'native-base';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import { getGrammarById } from "../../redux/actions/grammarAction";
const { width, height } = Dimensions.get('window');


const GrammarDetail = (
    {
        route,
        navigation
    }: any
) => {
    const { grammarId, total } = route.params;
    console.log(route.params)
    const [grammar, setGrammar]: any = useState(null);
    const scrollRef: any = useRef();
    useEffect(() => {
        getGrammarById(grammarId)
            .then(res => {
                setGrammar(res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [route])
    const previousHandle = () => {
        navigation.navigate("GrammarDetail", {grammarId: grammarId-1})
    }
    return(
        <ScrollView style={styles.container}>
            {grammar !== null ? (
                <React.Fragment>
                    <Text style={styles.title}>{grammar.title}</Text>
                    <View style={{paddingBottom: 0.1*height}}>
                        <Text style={{fontSize: 20, color: "red", paddingBottom: 0.03*height, paddingTop: 0.03*height}}>Cấu trúc:</Text>
                        {grammar.structure.map((s: any, i: number) => (
                            <Text key={i} style={styles.structure}>➤{s}</Text>
                        ))}
                        <Text style={{fontSize: 20, color: "red", paddingBottom: 0.03*height, paddingTop: 0.03*height}}>Ý nghĩa:</Text>
                        <Text style={styles.structure}>{grammar.meaning}</Text>
                        <Text style={{fontSize: 20, color: "red", paddingBottom: 0.03*height, paddingTop: 0.03*height}}>Ví dụ:</Text>
                        {grammar.examples.map((ex: any, i: number) => (
                            <React.Fragment key={i}>
                                <Text style={styles.structure}>➣{ex.text}</Text>
                                <Text style={styles.structure}>{ex.trans}</Text>
                            </React.Fragment>
                        ))}
                        <ListItem noBorder>
                            <Left>
                                <Button
                                    danger
                                    disabled={grammarId == 1 ? true : false}
                                    onPress={previousHandle}
                                >
                                    <Text>Trước</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button
                                    success
                                    disabled={grammarId == 14 ? true : false}
                                    onPress={() => navigation.navigate("GrammarDetail", {grammarId: grammarId+1})}
                                >
                                    <Text>Sau</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </View>
                </React.Fragment>
            ): (
                <Spinner/>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 0.03 * width,
        paddingLeft: 0.05 * width,
    },
    title: {
        color: "#4f8a8b",
        fontSize: 0.08 * width,
        marginBottom: 0.03 * width,
        marginTop: 0.01 * width,
        textDecorationLine: "underline"
    },
    content: {
        paddingTop: 0.03 * width,
        color: "#000"
    },
    structure: {
        fontSize: 20,
        lineHeight: 0.05*height
    }
})

export default GrammarDetail;