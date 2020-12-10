import { Container, Text, View, Header, Content, List, ListItem, Left, Right, Icon, Thumbnail, Row, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { grammarLesson } from '../../data/grammarLesson';
import * as Animatable from 'react-native-animatable';
import { getAllGrammar } from "../../redux/actions/grammarAction";
import { connect } from "react-redux";
const lessons = grammarLesson();
const { width, height } = Dimensions.get('window');
const ListLessons = ({ navigation, getAllGrammar, grammar, user }: any) => {
    const [activeGrammar, setActiveGrammar]: any = useState(0);
    const grammarDetailHandle = (grammarId: number) => {
        setActiveGrammar(grammarId);
        navigation.navigate("GrammarDetail", { grammarId: grammarId, total: grammar.totalGrammars})
    }
    useEffect(() => {
        if (user !== null) {
            getAllGrammar(user.token);
        }
    }, [])
    return (
        <Container>
            {grammar != null && grammar.list != null? (
                <Content>
                <List style={styles.container}>
                    {grammar.list.map((l: any, i: number) => (
                        <TouchableOpacity
                            key={i}
                            style={[styles.itemContainer]}

                        >
                            <ListItem
                                onPress={() => grammarDetailHandle(l.id)}
                                style={activeGrammar == l.id ? styles.active : null}
                            >
                                
                                    <Left>
                                        <Animatable.View animation="bounceInRight" duration={700}>
                                            <Content contentContainerStyle={styles.titleContainer}>
                                            <Thumbnail square small source={require('../../assets/images/grammar.png')} />
                                                <View>
                                                    <Text style={[styles.grammarForm, activeGrammar == l.id ? styles.active : null]}>
                                                        {l.title}
                                                    </Text>
                                                </View>
                                            </Content>
                                        </Animatable.View>
                                    </Left>
                                    <Right>
                                        <Animatable.View animation="bounceInLeft" duration={700}>
                                            {activeGrammar === l.id ? <Thumbnail source= {activeGrammar === l.id ? require('../../assets/images/user-hp.png') : null}  /> 
                                            : <Icon type="AntDesign" name="right" style={activeGrammar == l.id ? styles.active : null} />}
                                        </Animatable.View>
                                    </Right>
                                
                            </ListItem>
                            
                        </TouchableOpacity>

                    ))}
                </List>
                <TouchableOpacity onPress={() => navigation.navigate("TestingGrammar")} style={styles.titleContainer}>
                    <Left>
                        <Animatable.View animation="bounceInRight" duration={700}>
                            <Content contentContainerStyle={[styles.titleContainer, {paddingLeft: 0.02*width}]}>
                                <Thumbnail source={require('../../assets/images/history/testing.png')} />
                                <View>
                                    <Text style={[styles.title]}>Kiểm tra</Text>
                                </View>
                            </Content>
                        </Animatable.View>
                    </Left>
                    <Right>
                        <Icon type="AntDesign" name="right" />
                    </Right>
                </TouchableOpacity>
            </Content>
            ):(
                <Spinner/>
            )}
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingBottom: 0.03 * width,
        paddingTop: 0.03 * width
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
        backgroundColor: '#00CE9F',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10,
        marginRight: 0.02 * width,
        paddingLeft: 0.01 * width
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 19,
        color: "blue"
    }
})
const mapStateToProps = (state: any) => {
    return {
        grammar: state.grammar,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllGrammar: (token: string, callback?: any) => dispatch(getAllGrammar(token, callback))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListLessons));
