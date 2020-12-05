import { Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { Animated, Dimensions, ImageBackground, ScrollView, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('screen');
const ReadingLessons = () => {
    
    return (
        <ImageBackground
            source={require('../../assets/images/background2.jpg')}
            style={{
                width: width,
                height: 0.9 * height
            }}
        >
            <ScrollView>
                <View style={styles.readingCategory}>

                </View>
            </ScrollView>
        </ImageBackground>
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
        height: 0.14*height,
        marginTop: 0.1*height,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#00CE9F',
        marginHorizontal: 0.03*width
    }
});
export default ReadingLessons;