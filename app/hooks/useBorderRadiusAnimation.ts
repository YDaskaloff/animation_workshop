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

export const useBorderRadiusAnimation: AnimationHookType = () => {
  const [isMovingOrientation, setIsMovingOrientation] = useState(false);
  // const marginTop = useSharedValue(40);
  const borderRadius = useSharedValue(10);

  const animatedStyleOrientation = useAnimatedStyle(() => ({
    // marginTop: marginTop.value,
    borderRadius: borderRadius.value,

    // transform: [{}],
  }));

  const run = () => {
    // marginTop.value = withSpring(140);
    borderRadius.value = withRepeat(
      withSequence(
        withTiming(100, {duration: 1500}),
        withTiming(10, {duration: 1500}),
      ),
      -1,
    );
    runOnJS(() => {
      setIsMovingOrientation(true);
    })();
  };

  const stop = () => {
    // marginTop.value = withSpring(40);
    borderRadius.value = withSpring(20);
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
