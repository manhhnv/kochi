import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const UserTypeItem = (props: any) => {
    const { image, label, labelColor, selected, ...attributes } = props;
    return (
        <TouchableOpacity {...attributes}>
            <View
                style={[
                    styles.userTypeItemContainer,
                    selected && styles.userTypeItemContainerSelected,
                ]}
            >
                <Text style={[styles.userTypeLabel, { color: labelColor }]}>
                    {label}
                </Text>
                <Image
                    source={image}
                    style={[
                        styles.userTypeMugshot,
                        selected && styles.userTypeMugshotSelected,
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    userTypeItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    userTypeItemContainerSelected: {
        opacity: 1,
    },
    userTypeMugshot: {
        margin: 4,
        height: 70,
        width: 70,
    },
    userTypeLabel: {
        color: 'yellow',
        fontSize: 11,
    },
    userTypeMugshotSelected: {
        height: 100,
        width: 100,
    }
});