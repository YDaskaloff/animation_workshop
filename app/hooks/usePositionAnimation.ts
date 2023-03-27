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

export const usePositionAnimation = () => {
  const [isMoving, setIsMoving] = useState(false);
  const position = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: position.value,
      },
    ],
  }));

  const run = () => {
    position.value = withRepeat(
      withSequence(
        withTiming(400, {duration: 1500}),
        withTiming(0, {duration: 1500}),
      ),
      -1,
    );
    runOnJS(() => {
      setIsMoving(true);
    })();
  };

  const stop = () => {
    position.value = withSpring(0);
    runOnJS(() => {
      setIsMoving(false);
    })();
  };

  return {animatedStyle, trigger: isMoving ? stop : run, isMoving};
};
