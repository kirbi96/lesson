import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../base/types/BaseTypes';

export const IconSvgArrowLeft = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 16} height={sizeY || 12} viewBox="0 0 16 12" fill="none">
      <Path d="M3.83 5l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H16V5H3.83z" fill={color || '#212121'} />
    </Svg>
  );
};
