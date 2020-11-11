import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
    thumbnailHistoryItem: {
        maxWidth: 45,
        maxHeight: 45
    },
    titleHistoryItem: {
        fontFamily: "AmericanTypewriter-Bold"
    },
    scoreHistoryItem: {
        fontFamily: "AmericanTypewriter-Bold",
        fontWeight: "bold"
    },
    headerContainer: {
        backgroundColor: "#00CE9F",
        height: 30
    },
    headerBodyTitle: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    },
    bannerImage: {
        height: 130,
        flex: 1,
        borderRadius: 20
    },
    category: {
        fontSize: 18,
        fontFamily: "AmericanTypewriter-Bold",
        padding: 10
    },
    cardStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        height: 200,
        borderRadius: 10,
    },
    courseTitle: {
        fontSize: 20,
        fontFamily: "AmericanTypewriter-Bold"
    },
    cardBody: {
        backgroundColor: "transparent",
        padding: 45
    },
    testingTitle: {
        fontSize: 20,
        fontFamily: "AmericanTypewriter-Bold",
    },
    testingNoteContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    testingNoteIcon: {
        fontSize: 25,
        color: "#fccb00"
    },
    testingNoteTitle: {
        fontSize: 15,
        fontFamily: "AmericanTypewriter-Bold",
        padding: 5
    }
})