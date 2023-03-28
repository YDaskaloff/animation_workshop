import {ViewStyle} from 'react-native';

type AnimationHookReturnType = {
  animatedStyle: ViewStyle;
  trigger: () => void;
  isMoving: boolean;
};

export type AnimationHookType = () => AnimationHookReturnType;
