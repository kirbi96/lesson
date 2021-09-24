import Svg, { Mask, Path, G } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarSearch = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 29} height={sizeY || 31} viewBox="0 0 29 31" fill="none">
      <Mask id="prefix__a" x={0} y={0} width={28} height={29}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M.195.824h27.502v27.502H.195V.824z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.947 2.942c-6.415 0-11.634 5.218-11.634 11.633 0 6.414 5.219 11.633 11.633 11.633 6.414 0 11.633-5.219 11.633-11.633 0-6.415-5.219-11.633-11.633-11.633zm0 25.384C6.364 28.326.195 22.157.195 14.574.195 6.993 6.364.825 13.947.825c7.582 0 13.75 6.168 13.75 13.75 0 7.583-6.168 13.752-13.75 13.752z"
          fill="#fff"
        />
      </G>
      <Mask id="prefix__b" x={21} y={23} width={8} height={8}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M21.714 23.003h7.094v7.08h-7.094v-7.08z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.75 30.084c-.27 0-.541-.103-.75-.31l-4.975-4.961a1.06 1.06 0 011.497-1.501l4.976 4.963a1.058 1.058 0 01-.749 1.809z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
