import { Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const GrammarDetail = (
    {
        route,
    }: any
) => {
    const { grammarId } = route.params;
    console.log(route.params)
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Title of grammar</Text>
            <Text style={styles.content}>Content of grammar 1. jndsjdnfsmdnf sdfnjsdnfjsdnfjndsjfnsdjnfsdnfdsnmdsnfsdnfjdsn</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 0.03 * width,
        paddingLeft: 0.05 * width
    },
    title: {
        color: "#4f8a8b",
        fontSize: 0.08 * width,
        marginBottom: 0.03 * width,
        marginTop: 0.01 * width
    },
    content: {
        paddingTop: 0.03 * width,
        color: "#000"
    }   
})

export default GrammarDetail;