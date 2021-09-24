import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AgEnum, Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import Navigation from '../../../base/Navigation';
import { screens } from '../../../navigation/consts/screens';

export const ProfileScreen = () => {
  const handleNavigateToQuoteScreen = () => {
    // Navigation.navigate(screens.tab.TAB_QUOTES);
  };

  return (
    <View style={styles.container}>
      <Text Ag={AgEnum.H1}>Профиль</Text>

      <Button onPress={() => handleNavigateToQuoteScreen()} style={styles.btn} title={'Просмотреть'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    marginTop: 16,
    textAlign: 'center',
  },
  btn: {
    marginTop: 16,
  },
});
