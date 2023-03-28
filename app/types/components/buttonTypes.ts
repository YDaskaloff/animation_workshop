import {FC} from 'react';
import {ViewStyle} from 'react-native';

type ButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
};

export type ButtonType = FC<ButtonProps>;
