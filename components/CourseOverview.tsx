import { Body, Card, CardItem, Left, Thumbnail, Text, Right } from 'native-base';
import React from 'react';
import { CourseOverviewType } from '../types';
import { CourseOverViewStyles } from '../styles/index';
const CourseOverview = ({totalUnits, completedUnits, completedTest, thumbnail}: CourseOverviewType) => {
    return (
        <Card style={{borderRadius: 10}}>
            <CardItem style={{borderRadius: 10}}>
                <Left>
                    <Thumbnail source={thumbnail}></Thumbnail>
                </Left>
                <Body>
                    <Text style={CourseOverViewStyles.overViewContent}>Tổng số bài học: {totalUnits}</Text>
                    <Text style={CourseOverViewStyles.overViewContent}>Đã hoàn thành: {completedUnits ? completedUnits : 0}</Text>
                    <Text style={CourseOverViewStyles.overViewContent}>Số lần kiểm tra: {completedTest ? completedTest : 0}</Text>
                </Body>
                <Right></Right>
            </CardItem>
        </Card>
    )
}
export default CourseOverview;