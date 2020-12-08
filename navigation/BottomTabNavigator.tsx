import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotificationScreen from '../screens/extensions/NotificationScreen';
import GrammarDetail from '../screens/grammars/GrammarDetail';
import ListLessons from '../screens/grammars/ListLessons';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import ReadingCategory from '../screens/reading/ReadingCategory';
import ReadingDetail from '../screens/reading/ReadingDetail';
import ReadingLessons from '../screens/reading/ReadingLessons';
import ReadingStartTesting from '../screens/reading/ReadingStartTesting';
import Register from '../screens/Register';
import TabTwoScreen from '../screens/TabTwoScreen';
import Vocabularies from '../screens/Vocabularies';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabStackParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabStack = createStackNavigator<TabStackParamList>();
export function TabStackNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Login"
        component={Login}
        options = {{
          headerTitle: '',
          headerLeft: () => null,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="Register"
        component={Register}
        options = {{
          headerTitle: '',
          headerLeft: () => null,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="HomeApp"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <TabStack.Screen
        name="VocabularyOverview"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Từ vựng',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home'
        }}
      />
      <TabStack.Screen
        name="Lesson"
        component={Vocabularies}
        options={{
          headerTitle: 'Bài học',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="GrammarLessons"
        component={ListLessons}
        options={{
          headerTitle: 'Ngữ pháp',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="GrammarDetail"
        component={GrammarDetail}
        options={{
          headerTitle: 'Học Ngữ Pháp',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingCategory"
        component={ReadingCategory}
        options={{
          headerTitle: 'Đọc hiểu N3',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingLessons"
        component={ReadingLessons}
        options={{
          headerTitle: 'Bài học',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingDetail"
        component={ReadingDetail}
        options={{
          headerTitle: 'Luyện tập',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Bắt đầu',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
    </TabStack.Navigator>
  )
}
