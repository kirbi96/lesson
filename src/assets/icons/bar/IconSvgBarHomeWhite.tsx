import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarHomeWhite = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 28} height={sizeY || 30} viewBox="0 0 28 30" fill="none">
      <Path
        d="M9.953 27.441v-4.344a2.01 2.01 0 012.005-2.003h4.071a2.01 2.01 0 012.017 2.003v4.332c0 .955.776 1.73 1.738 1.738h2.778a4.902 4.902 0 003.461-1.416 4.83 4.83 0 001.435-3.433V11.977c0-1.04-.464-2.028-1.268-2.695l-9.438-7.493a4.413 4.413 0 00-5.606.1L1.91 9.282a3.505 3.505 0 00-1.37 2.695v12.329c0 2.684 2.193 4.86 4.897 4.86h2.714c.463.004.909-.176 1.237-.5a1.72 1.72 0 00.514-1.225h.05z"
        fill={color || '#fff'}
      />
    </Svg>
  );
};
