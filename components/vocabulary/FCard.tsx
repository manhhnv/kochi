import React from 'react';
import { VocabularyFCardProps } from "../../types";
import FlipCard from 'react-native-flip-card';
import { Body, Card, CardItem, Text, View } from 'native-base';
const FCard = ({ kanji, hiragana, vnjp, marked, mean }: VocabularyFCardProps) => {
    return (
        <FlipCard>
            <View style={{ backgroundColor: "white", borderStyle: "solid", borderColor: "black", height: 100, }}>
                <Text>被害</Text>
            </View>
            <View style={{ backgroundColor: "white", borderStyle: "solid", borderColor: "black", height: 100, }}>
                <Text>Back</Text>
            </View>
        </FlipCard>
    )
}
export default FCard;