import { Content, Spinner, Text, Thumbnail, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getReadingByCategory } from '../../data/getReadingByCategory'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen');


const ReadingLessons = ({ navigation, route }: any) => {
    const { readingCategory } = route.params;
    const [loading, setLoading] = useState(true);
    const [lessons, setLessons]: any = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            const data = getReadingByCategory(readingCategory, () => { setLoading(false) });
            setLessons(data);
            console.log("DATA", data)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <React.Fragment>
            {loading == false && lessons != null && lessons.length > 0? (
                <ScrollView>
                    {lessons.map((lesson: any, i: number) => (
                        <TouchableOpacity key={i}>
                            <Animatable.View animation="bounceInLeft" duration={1000} style={styles.readingCategory}>
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
        borderBottomWidth: 5,
        borderBottomColor: '#ecba0c',
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
export default ReadingLessons
