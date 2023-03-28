import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonType} from '../../types/components/buttonTypes';

import styles from './styles';

export const Button: ButtonType = ({onPress, title, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.trigger, style]}>
      <Text style={styles.triggerText}>{title}</Text>
    </TouchableOpacity>
  );
};
