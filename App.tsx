import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from 'react-native-flash-message';

import Navigator from './src/navigation/Navigator';

enableScreens();

const App = observer(() => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigator />
      <FlashMessage position="bottom" />
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
