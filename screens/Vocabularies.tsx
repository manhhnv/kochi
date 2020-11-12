import React, { useState } from 'react'
import FCard from '../components/vocabulary/FCard';
import { ImageBackground, Dimensions, Text } from 'react-native';
import { Container, Content, Thumbnail, View, } from 'native-base';
import FlipCard from 'react-native-flip-card';
const { width, height } = Dimensions.get("screen");
const Vocabularies = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <Container>
            <Content>
                <Text style={{ textAlign: "center", position: "relative", top: 0.1 * height, fontSize: 30, flexWrap: "wrap" }}>{currentIndex} / 120</Text>
                <FlipCard style={{ marginTop: 0.12 * height }}>
                    <View style={{
                        margin: 20, backgroundColor: "white", borderStyle: "solid",
                        height: 0.4 * height, borderWidth: 0,
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                    }}>
                        <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>被害</Text>
                        <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 30, flexWrap: "wrap", paddingTop: 20 }}>BỊ, HẠI</Text>
                        <Thumbnail square style={{marginLeft: 0.07*width}} source={require('../assets/images/logo.png')}></Thumbnail>
                    </View>
                    <View style={{
                        margin: 20, backgroundColor: "white", borderStyle: "solid",
                        height: 0.4 * height, borderWidth: 0,
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                    }}>
                        <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap" }}>ひがい</Text>
                        <Text style={{ textAlign: "center", position: "relative", top: 0.12 * height, fontSize: 35, flexWrap: "wrap", paddingTop: 20 }}>Thiệt hại</Text>
                        <Thumbnail square style={{marginLeft: 0.07*width}} source={require('../assets/images/logo.png')}></Thumbnail>
                    </View>
                </FlipCard>
            </Content>
        </Container>
    )
}

export default Vocabularies;
