import Svg, { Mask, Path, G } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarProfile = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={24} height={29} viewBox="0 0 24 29" fill="none">
      <Mask id="prefix__a" x={0} y={18} width={24} height={11}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M.76 18.469h22.366v10.412H.759V18.47z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.944 20.587c-6.017 0-9.067 1.034-9.067 3.074 0 2.059 3.05 3.102 9.067 3.102 6.015 0 9.064-1.033 9.064-3.074 0-2.058-3.049-3.102-9.064-3.102zm0 8.294c-2.766 0-11.185 0-11.185-5.22 0-4.654 6.384-5.192 11.185-5.192 2.766 0 11.182 0 11.182 5.22 0 4.654-6.383 5.192-11.182 5.192z"
          fill="#fff"
        />
      </G>
      <Mask id="prefix__b" x={4} y={0} width={16} height={16}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M4.444.824H19.44v14.994H4.444V.824z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.944 2.84A5.488 5.488 0 006.46 8.322a5.469 5.469 0 005.442 5.481l.04 1.008v-1.008c3.023 0 5.48-2.46 5.48-5.481a5.487 5.487 0 00-5.48-5.482zm0 12.978h-.046c-4.125-.012-7.468-3.377-7.454-7.5 0-4.13 3.364-7.494 7.5-7.494 4.134 0 7.496 3.363 7.496 7.498 0 4.134-3.362 7.496-7.496 7.496z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
