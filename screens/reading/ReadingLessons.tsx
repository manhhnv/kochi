import { Text, View } from 'native-base';
import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';

const ReadingLessons = () => {
    return (
        <ImageBackground
            source={require('../../assets/images/background2.jpg')}
            style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height
            }}
        >

        </ImageBackground>
    )
}
export default ReadingLessons;