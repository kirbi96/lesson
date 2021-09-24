import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../consts/screens';
import Navigation from '../../base/Navigation';
import { HomeScreen } from '../../screens/tabs/home/HomeScreen';
import { IconSvgBarHome } from '../../assets/icons/bar/IconSvgBarHome';
import { Colors } from '../../styles/Colors';

import { IconSvgBarSearch } from '../../assets/icons/bar/IconSvgBarSearch';
import { IconSvgBarLesson } from '../../assets/icons/bar/IconSvgBarLesson';
import { IconSvgBarProfileWhite } from '../../assets/icons/bar/IconSvgBarProfileWhite';
import { IconSvgBarLessonWhite } from '../../assets/icons/bar/IconSvgBarLessonWhite';
import { IconSvgBarHomeWhite } from '../../assets/icons/bar/IconSvgBarHomeWhite';
import { IconSvgBarProfile } from '../../assets/icons/bar/IconSvgBarProfile';
import { IconSvgBarSearchWhite } from '../../assets/icons/bar/IconSvgBarSearchWhite';
import { SearchScreen } from "../../screens/tabs/search/SearchScreen";
import { LessonsScreen } from "../../screens/tabs/lessons/LessonsScreen";
import { ProfileScreen } from "../../screens/tabs/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: Colors.primary,
          paddingVertical: 15,
        },
      }}
      initialRouteName={Navigation.initialRoute}
    >
      <Tab.Screen
        name={screens.tab.TAB_HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (focused ? <IconSvgBarHomeWhite /> : <IconSvgBarHome />),
        }}
      />

      <Tab.Screen
        name={screens.tab.TAB_SEARCH}
        component={SearchScreen}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (focused ? <IconSvgBarSearchWhite /> : <IconSvgBarSearch />),
        })}
      />

      <Tab.Screen
        name={screens.tab.TAB_LESSONS}
        component={LessonsScreen}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (focused ? <IconSvgBarLessonWhite /> : <IconSvgBarLesson />),
        })}
      />

      <Tab.Screen
        name={screens.tab.TAB_PROFILE}
        component={ProfileScreen}
        options={({ route }) => ({
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (focused ? <IconSvgBarProfileWhite /> : <IconSvgBarProfile />),
        })}
      />
    </Tab.Navigator>
  );
};
