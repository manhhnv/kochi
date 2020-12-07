import { Content, Text, Thumbnail, View } from 'native-base';
import React, { useEffect } from 'react';
import { Alert, Animated, Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen');
const ReadingCategory = ({navigation}: any) => {

    return (
        <ImageBackground
            source={require('../../assets/images/background2.jpg')}
            style={{
                width: width,
                height: 0.9 * height
            }}
        >
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("ReadingLessons", {readingCategory: 1})}>
                    <Animatable.View animation="bounceInLeft" style={styles.readingCategory} duration={1000} >
                        <Content contentContainerStyle={styles.titleContainer}>
                            <Thumbnail source={require('../../assets/images/logo.png')} />
                            <View>
                                <Text style={styles.title}>Đọc hiểu đoạn văn ngắn</Text>
                            </View>
                        </Content>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ReadingLessons", {readingCategory: 2})}>
                    <Animatable.View animation="bounceInRight" style={styles.readingCategory}>
                        <Content contentContainerStyle={styles.titleContainer}>
                            <Thumbnail source={require('../../assets/images/logo.png')} />
                            <View>
                                <Text style={styles.title}>Đọc hiểu đoạn văn trung</Text>
                            </View>
                        </Content>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ReadingLessons", {readingCategory: 3})}>
                    <Animatable.View animation="bounceInLeft" style={styles.readingCategory}>
                        <Content contentContainerStyle={styles.titleContainer}>
                            <Thumbnail source={require('../../assets/images/logo.png')} />
                            <View>
                                <Text style={styles.title}>Đọc hiểu đoạn văn dài</Text>
                            </View>
                        </Content>
                    </Animatable.View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Animatable.View animation="bounceInRight" style={styles.readingCategory}>
                        <Content contentContainerStyle={styles.titleContainer}>
                            <Thumbnail source={require('../../assets/images/history/testing.png')} />
                            <View>
                                <Text style={styles.title}>Kiểm tra</Text>
                            </View>
                        </Content>
                    </Animatable.View>
                </TouchableOpacity>
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
        height: 0.14 * height,
        marginTop: 0.05 * height,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#00CE9F',
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
export default ReadingCategory;