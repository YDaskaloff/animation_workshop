import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {usePositionAnimation} from './app/hooks/usePositionAnimation';

function App(): JSX.Element {
  const {animatedStyle, trigger, isMoving} = usePositionAnimation();

  return (
    <SafeAreaView style={styles.screen}>
      <Animated.View style={[styles.square, animatedStyle]} />
      <TouchableOpacity onPress={trigger} style={styles.trigger}>
        <Text style={styles.triggerText}>{isMoving ? 'STOP' : 'TRIGGER'}</Text>
      </TouchableOpacity>
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
  trigger: {
    position: 'absolute',
    bottom: 50,
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  triggerText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default App;
