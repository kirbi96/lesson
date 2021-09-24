import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../base/types/BaseTypes';

export const IconSvgQuotes = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 24} height={sizeY || 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 21H4a1 1 0 01-1-1V3h2v16h16v2zM8.373 16L7 14.656 11.856 9.9a.985.985 0 011.373 0l2.227 2.181L19.627 8 21 9.344 16.144 14.1a.985.985 0 01-1.373 0l-2.228-2.182L8.374 16h-.001z"
        fill={color || '#161B25'}
      />
    </Svg>
  );
};
