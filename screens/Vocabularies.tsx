import React, { useEffect, useState } from 'react'
import FCard from '../components/vocabulary/FCard';
import { ImageBackground, Dimensions, Text } from 'react-native';
import { Button, Col, Container, Content, Grid, Icon, Row, Thumbnail, View, } from 'native-base';
const { width, height } = Dimensions.get("screen");
const Vocabularies = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPlay, setIsPlay] = useState(false);
    const nextWord = () => {
        setCurrentIndex((prevState) => prevState + 1);
    }
    const previousWord = () => {
        setCurrentIndex((prevState) => prevState - 1);
    }
    
    return (
        <Container>
            <Content>
                <Text style={{ textAlign: "center", position: "relative", top: 0.05 * height, fontSize: 30, flexWrap: "wrap" }}>{currentIndex} / 120</Text>
                {currentIndex == 1 ? (
                    <FCard
                        previousWord={previousWord} nextWord={nextWord}
                        currentIndex={currentIndex} kanji="被害" vnjp="BỊ HẠI"
                        hiragana="ひがい" marked={true} mean="Thiệt hại"
                    />
                ):
                (
                    <FCard
                        previousWord={previousWord} nextWord={nextWord}
                        currentIndex={currentIndex} kanji="掃除" vnjp="TẢO, TRỪ"
                        hiragana="そうじ" mean="Dọn dẹp"
                    />
                )}
            </Content>
        </Container>
    )
}

export default Vocabularies;
