import { Container, Text, View, Header, Content, List, ListItem, Left, Right, Icon } from 'native-base';
import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { grammarLesson } from '../../data/grammarLesson';
const lessons = grammarLesson();
const { width, height } = Dimensions.get('window');
const ListLessons = ({ navigation }: any) => {
    const [activeGrammar, setActiveGrammar]: any = useState(0);
    const grammarDetailHandle = (grammarId: number) => {
        setActiveGrammar(grammarId);
        navigation.navigate("GrammarDetail", { grammarId: grammarId })
    }
    return (
        <Container>
            <Content>
                <List style={styles.container}>
                    {lessons.map((l: any, i: number) => (
                        <TouchableOpacity
                            key={i}
                            style={[styles.itemContainer]}

                        >
                            <ListItem
                                onPress={() => grammarDetailHandle(l.id)}
                                style={activeGrammar == l.id ? styles.active : null}
                            >
                                <Left>
                                    <Text style={[styles.grammarForm, activeGrammar == l.id ? styles.active : null]}>
                                        {l.id + ' .'} {l.form}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon type="AntDesign" name="right" style={activeGrammar == l.id ? styles.active : null} />
                                </Right>
                            </ListItem>
                        </TouchableOpacity>
                    ))}
                </List>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingTop: 20
    },
    grammarForm: {
        fontSize: 19,
        color: 'blue',
        paddingTop: 0.015 * height,
        paddingBottom: 0.015 * height,
    },
    itemContainer: {
        
    },
    active: {
        backgroundColor: '#7ea04d',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
        marginRight: 0.02 * width,
        paddingLeft: 3.8
    }
})
export default ListLessons;