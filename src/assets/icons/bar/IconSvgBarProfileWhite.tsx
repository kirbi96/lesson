import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarProfileWhite = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={21} height={27} viewBox="0 0 21 27" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.338 7.418a6.812 6.812 0 01-6.838 6.835 6.813 6.813 0 01-6.838-6.835A6.812 6.812 0 0110.5.583a6.811 6.811 0 016.838 6.835zM10.5 26.417c-5.603 0-10.333-.911-10.333-4.424 0-3.515 4.76-4.393 10.333-4.393 5.604 0 10.333.91 10.333 4.424 0 3.514-4.76 4.393-10.333 4.393z"
        fill="#fff"
      />
    </Svg>
  );
};
