import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Button} from './app/components/Button/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.screen}>
      <Animated.View style={styles.square} />
      <View style={styles.buttonsContainer}>
        <Button onPress={() => undefined} title="TRIGGER" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: 'blue',
    height: 120,
    width: 120,
    borderRadius: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
