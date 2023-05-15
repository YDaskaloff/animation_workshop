import {useState} from 'react';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {AnimationHookType} from '../types/animationHookTypes';

export const useRotationAnimation: AnimationHookType = () => {
  const [isMoving, setIsMoving] = useState(false);
  const position = useSharedValue('0deg');

  const animatedStyle = useAnimatedStyle(() => ({
    // scale: 1,
    transform: [
      {
        rotate: position.value,
      },
    ],
  }));

  const run = () => {
    position.value = withRepeat(
      withSequence(
        withTiming('0deg', {duration: 100}),
        withTiming('360deg', {duration: 1500}),
      ),
      -1,
    );
    runOnJS(() => {
      setIsMoving(true);
    })();
  };

  const stop = () => {
    position.value = withSpring('0deg');
    runOnJS(() => {
      setIsMoving(false);
    })();
  };

  return {animatedStyle, trigger: isMoving ? stop : run, isMoving};
};
