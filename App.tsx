import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {usePositionAnimation} from './app/hooks/usePositionAnimation';
import {useOrientationAnimation} from './app/hooks/useOrientationAnimation';
import {useRotationAnimation} from './app/hooks/useRotationAnimation';
import {useBorderRadiusAnimation} from './app/hooks/useBorderRadiusAnimation';

import {Button} from './app/components/Button/Button';

function App(): JSX.Element {
  const {animatedStyle, trigger, isMoving} = usePositionAnimation();
  const scale = useOrientationAnimation();
  const rotate = useRotationAnimation();
  const borderRadius = useBorderRadiusAnimation();

  return (
    <SafeAreaView style={styles.screen}>
      <Animated.View
        style={[
          styles.square,
          animatedStyle,
          scale.animatedStyle,
          rotate.animatedStyle,
          borderRadius.animatedStyle,
        ]}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={trigger} title={isMoving ? 'STOP' : 'MOVE'} />
        <Button
          onPress={scale.trigger}
          title={scale.isMoving ? 'STOP' : 'SCALE'}
        />
        <Button
          onPress={borderRadius.trigger}
          title={borderRadius.isMoving ? 'STOP' : 'CHANGE RADIUS'}
        />
        <Button
          onPress={rotate.trigger}
          title={rotate.isMoving ? 'STOP' : 'ROTATE'}
        />
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
    backgroundColor: 'rgb(40, 49, 255)',
    height: 80,
    width: 80,
    borderRadius: 20,
    marginTop: 40,
    opacity: 1,
  },
  buttonsContainer: {
    width: '90%',
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
