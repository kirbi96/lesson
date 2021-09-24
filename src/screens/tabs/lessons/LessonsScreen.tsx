import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AgEnum, Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import Navigation from '../../../base/Navigation';
import { screens } from '../../../navigation/consts/screens';

export const LessonsScreen = () => {
  const handleNavigateToQuoteScreen = () => {
    // Navigation.navigate(screens.tab.TAB_QUOTES);
  };

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },

});
