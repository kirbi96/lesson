import React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { Colors } from '../../styles/Colors';

export enum AgEnum {
  H1 = 'h1',
  H2 = 'h2',
  TEXT14 = 'text14',
  Subtitle = 'subtitle',
  Body = 'body',
  Description = 'description',
}

interface IText extends TextProps {
  Ag: AgEnum;
  children?: string | React.ReactNode[];
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
}

export const Text = (props: IText) => {
  const { Ag, color, align } = props;

  return (
    <RNText
      {...props}
      style={[
        styles[Ag],
        {
          color: color || Colors.primary05,
          textAlign: align || 'auto',
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  [AgEnum.H1]: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '600',
  },
  [AgEnum.H2]: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.38,
    fontWeight: '600',
  },
  [AgEnum.TEXT14]: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
  },
  [AgEnum.Subtitle]: {
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.24,
  },
  [AgEnum.Body]: {
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: -0.41,
  },
  [AgEnum.Description]: {
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.08,
  },
});
