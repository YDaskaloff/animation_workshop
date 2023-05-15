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

export const useOrientationAnimation: AnimationHookType = () => {
  const [isMovingOrientation, setIsMovingOrientation] = useState(false);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const marginTop = useSharedValue(40);
  const backgroundColor = useSharedValue('blue');
  const rotate = useSharedValue('0deg');

  const animatedStyleOrientation = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
    marginTop: marginTop.value,
    opacity: opacity.value,
    rotate: rotate.value,
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  const run = () => {
    marginTop.value = withSpring(140);
    scale.value = withRepeat(
      withSequence(
        withTiming(3, {duration: 1500}),
        withTiming(1, {duration: 1500}),
      ),
      -1,
    );
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.1, {duration: 1500}),
        withTiming(1, {duration: 1500}),
      ),
      -1,
    );
    backgroundColor.value = withRepeat(
      withSequence(
        withTiming('rgb(139,89,255)', {duration: 1500}),
        withTiming('rgb(40, 49, 255)', {duration: 1500}),
      ),
      -1,
    );
    rotate.value = withRepeat(
      withSequence(
        withTiming('380deg', {duration: 1500}),
        withTiming('0deg', {duration: 1500}),
      ),
      -1,
    );
    runOnJS(() => {
      setIsMovingOrientation(true);
    })();
  };

  const stop = () => {
    rotate.value = withSpring('0deg');
    scale.value = withSpring(1);
    opacity.value = withSpring(1);
    marginTop.value = withSpring(40);
    backgroundColor.value = withSpring('blue');
    runOnJS(() => {
      setIsMovingOrientation(false);
    })();
  };

  return {
    animatedStyle: animatedStyleOrientation,
    trigger: isMovingOrientation ? stop : run,
    isMoving: isMovingOrientation,
  };
};
