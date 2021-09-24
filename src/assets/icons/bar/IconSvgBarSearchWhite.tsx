import Svg, { Ellipse, Path } from "react-native-svg"
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarSearchWhite = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg
      width={sizeX || 32}
      height={sizeY || 32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Ellipse cx={13.615} cy={13.701} rx={13.615} ry={13.701} fill="#fff" />
      <Path
        opacity={0.4}
        d="M29.568 31.596a2.091 2.091 0 01-1.408-.61l-3.224-3.768a1.722 1.722 0 01-.127-2.409 1.544 1.544 0 012.197 0l4.055 3.244c.584.598.764 1.486.46 2.266a2.113 2.113 0 01-1.868 1.348l-.085-.071z"
        fill="#fff"
      />
    </Svg>
  );
};
