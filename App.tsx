import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {usePositionAnimation} from './app/hooks/usePositionAnimation';

import {Button} from './app/components/Button/Button';

function App(): JSX.Element {
  const {animatedStyle, trigger, isMoving} = usePositionAnimation();

  return (
    <SafeAreaView style={styles.screen}>
      <Animated.View style={[styles.square, animatedStyle]} />
      <View style={styles.buttonsContainer}>
        <Button onPress={trigger} title={isMoving ? 'STOP' : 'MOVE'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    backgroundColor: 'blue',
    height: 120,
    width: 120,
    borderRadius: 20,
    marginTop: 40,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
