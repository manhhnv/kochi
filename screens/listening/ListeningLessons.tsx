import { Content, Spinner, Text, Thumbnail, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getReadingByCategory } from '../../data/getReadingByCategory'
import * as Animatable from 'react-native-animatable';
import { getAllReadingLessons } from '../../redux/actions/readingAction';
import { getLessons } from '../../redux/actions/listeningAction';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('screen');


const ListeningLessons = ({
    navigation, route, user,
    getAllReadingLessons, reading,
    listening, getLessons
}: any) => {
    const { readingCategory, category } = route.params;
    console.log(category)
    const [loading, setLoading] = useState(true);
    const [lessons, setLessons]: any = useState(null);
    const [listeningLessons, setListeningLessons]: any = useState(null);
    useEffect(() => {
        getLessons(user?.token, category, () => {
            console.log("listening")
            if (category == "topic") {
                setListeningLessons(listening.topic)
            }
            else if (category == "conversation") {
                setListeningLessons(listening.conversation)
            }
            else if (category == "reply") {
                setListeningLessons(listening.reply)
            }
            setLoading(false)
        })
    }, [category])
    return (
        <React.Fragment>
            {loading == false && listeningLessons != null && listeningLessons.length > 0? (
                <ScrollView>
                    {listeningLessons.map((lesson: any, i: number) => (
                        <TouchableOpacity
                            key={i}
                            onPress={
                                () => navigation.navigate("ReadingDetail", {
                                    readingCategory: readingCategory,
                                    lessonId: lesson.id,
                                    currentIndex: i
                                })
                            }
                        >
                            <Animatable.View animation="bounceInLeft" duration={700} style={styles.readingCategory}>
                                <Content contentContainerStyle={styles.titleContainer}>
                                    <Thumbnail source={require('../../assets/images/history/dokkai.jpg')} />
                                    <View>
                                        <Text style={styles.title}>
                                            {lesson?.title}
                                        </Text>
                                    </View>
                                </Content>
                            </Animatable.View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            ) : null}
            {loading == true ? (
                <Spinner />
            ) : null}
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    readingCategory: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        height: 0.14 * height,
        marginTop: 0.05 * height,
        borderRadius: 15,
        borderLeftWidth: 10,
        borderLeftColor: '#ecba0c',
        marginHorizontal: 0.03 * width,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0.02*height,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 0.05 * width,
    }
});
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
        reading: state.reading,
        listening: state.listening,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllReadingLessons: (
            token: string, readingCategory: number, callback?: any
            ) => dispatch(getAllReadingLessons(token, readingCategory, callback)),
        getLessons: (
            token: string, category: string, callback?: any
        ) => dispatch(getLessons(token, category, callback))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ListeningLessons))
