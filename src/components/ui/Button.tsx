import React, { ReactNode, useMemo } from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Colors } from '../../styles/Colors';

import { AgEnum, Text } from './Text';

export enum ButtonType {
  Filled = 'filled',
}

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  size?: 'large' | 'medium' | 'small';
  textColor?: string;
  disabled?: boolean;
}

export const Button = (props: IButtonProps) => {
  const {
    title,
    startIcon,
    endIcon,
    type = ButtonType.Filled,
    style,
    loading,
    size = 'large',
    textColor,
    disabled,
  } = props;

  const color = useMemo(() => {
    return textColor || Colors.white;
  }, [textColor]);

  const buttonStyles = useMemo(() => {
    return [styles.default, disabled ? styles[`${type}_Disabled`] : styles[type], styles[size], style];
  }, [style, type, size, disabled]);

  return (
    <TouchableOpacity
      onPress={loading || disabled ? undefined : props.onPress}
      style={buttonStyles}
      activeOpacity={props.activeOpacity}
    >
      {!loading && startIcon}
      {!loading ? (
        <Text
          Ag={AgEnum.Description}
          color={color}
          style={{ marginLeft: startIcon ? 8 : 0, marginRight: endIcon ? 8 : 0 }}
        >
          {title.toUpperCase()}
        </Text>
      ) : (
        <ActivityIndicator color={color} />
      )}
      {!loading && endIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  [ButtonType.Filled]: {
    backgroundColor: Colors.primary,
  },
  [`${ButtonType.Filled}_Disabled`]: {
    backgroundColor: Colors.primary05,
  },
  [`${ButtonType.Filled}_Text`]: {
    color: Colors.white,
  },

  large: {
    height: 48,
  },
  medium: {
    height: 40,
  },
  small: {
    height: 32,
  },
});
