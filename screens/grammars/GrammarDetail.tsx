import { Text } from 'native-base';
import React from 'react';

const GrammarDetail = (
    {
        route,
    }: any
) => {
    const { grammarId } = route.params;
    return(
        <Text>
            {grammarId}
        </Text>
    )
}
export default GrammarDetail;