import { Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

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
        padding: 10,
        margin: 10,
        borderRadius: 15
    },
    title: {
        color: "#4f8a8b",
        fontSize: 30,
        marginBottom: 15,
        marginTop: 5
    },
    content: {
        paddingTop: 15,
        color: "#000"
    }   
})

export default GrammarDetail;