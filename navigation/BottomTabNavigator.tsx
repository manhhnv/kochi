import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Login from '../screens/Login';
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
        component={Login}
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
        name="Register"
        component={Register}
        options = {{
          headerTitle: '',
          headerLeft: () => null,
          headerShown: false
        }}
      />
    </TabStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
