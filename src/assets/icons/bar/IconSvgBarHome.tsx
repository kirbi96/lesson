import Svg, { Mask, Path, G } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarHome = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 30} height={sizeY || 31} viewBox="0 0 30 31" fill="none">
      <Mask id="prefix__a" x={0} y={0} width={30} height={31}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M.824.412H29.77v30.366H.824V.412z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.369 20.592c1.7 0 3.084 1.374 3.084 3.063v4.343c0 .363.29.654.663.662h2.692c2.12 0 3.844-1.703 3.844-3.795V12.546a2.367 2.367 0 00-.941-1.848L17.4 3.273a3.411 3.411 0 00-4.252.003l-9.246 7.419a2.366 2.366 0 00-.961 1.875v12.295c0 2.092 1.724 3.795 3.845 3.795h2.717a.686.686 0 00.693-.676c0-.082.01-.164.027-.242v-4.087c0-1.68 1.375-3.052 3.062-3.063h4.083zm6.439 10.186H21.09c-1.556-.036-2.757-1.258-2.757-2.78v-4.343a.957.957 0 00-.965-.945h-4.076a.956.956 0 00-.951.945v4.329c0 .106-.014.207-.044.303a2.809 2.809 0 01-2.794 2.491H6.787c-3.289 0-5.963-2.653-5.963-5.913V12.56A4.453 4.453 0 012.6 9.026L11.83 1.62a5.524 5.524 0 016.89-.003l9.295 7.413a4.459 4.459 0 011.756 3.5v12.335c0 3.26-2.674 5.913-5.962 5.913z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
