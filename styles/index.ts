import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
    thumbnailHistoryItem: {
        maxWidth: 45,
        maxHeight: 45
    },
    titleHistoryItem: {
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold"
    },
    scoreHistoryItem: {
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold"
    },
    headerContainer: {
        backgroundColor: "#00CE9F",
    },
    headerBodyTitle: {
        //textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        paddingTop: 15
    },
    bannerImage: {
        height: 130,
        flex: 1,
        borderRadius: 20
    },
    category: {
        fontSize: 18,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
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
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold"
    },
    cardBody: {
        backgroundColor: "transparent",
        padding: 45
    },
    testingTitle: {
        fontSize: 20,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold"
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
        fontFamily: "sans-serif-condensed",
        padding: 5,
        fontWeight: "bold"
    },
    segmentStyle: {
        backgroundColor: '#00CE9F',
        width: 400,
    }
});

export const CourseOverViewStyles = StyleSheet.create({
    title: {
    },
    overViewContent: {
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 10
    },
    forwardIconList: {
        color: "#fff",
        fontSize: 25
    }
})