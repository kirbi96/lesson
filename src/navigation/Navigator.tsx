import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabsStack } from './stacks/TabsStack';

import Navigation from '../base/Navigation';
import { Colors } from '../styles/Colors';
import { IQuotes } from '../modules/quotes/types/Quotes';

export type RootStackParamList = {
  QUOTES_IN: { quotes: IQuotes };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={AppTheme} ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>{TabsStack}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
