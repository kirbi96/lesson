import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../base/types/BaseTypes';

export const IconSvgFavorites = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg width={sizeX || 12} height={sizeY || 16} viewBox="0 0 12 16" fill="none">
      <Path
        d="M2.265 14.988l-.312-.39.312.39zm3.891-2.863l.313-.39-.313.39zm-.312 0l-.313-.39.313.39zm3.89 2.863l-.312.39.313-.39zM10.75.5h-9.5v1h9.5v-1zm.75 14.293V1.25h-1v13.543h1zm-1.61.75h.86v-1h-.86v1zm-4.046-3.027l3.578 2.862.625-.78-3.578-2.863-.625.78zm-3.266 2.862l3.578-2.863-.625-.78-3.578 2.862.625.781zm-1.328.165h.86v-1h-.86v1zM.5 1.25v13.543h1V1.25h-1zm.75 13.293a.25.25 0 01.25.25h-1c0 .414.336.75.75.75v-1zm.703.054a.25.25 0 01.156-.054v1a.75.75 0 00.469-.165l-.625-.78zm4.516-2.862a.75.75 0 00-.938 0l.625.78a.25.25 0 01-.312 0l.625-.78zm3.422 2.808a.25.25 0 01.156.054l-.625.781a.75.75 0 00.469.165v-1zm.609.25a.25.25 0 01.25-.25v1a.75.75 0 00.75-.75h-1zM1.25.5a.75.75 0 00-.75.75h1a.25.25 0 01-.25.25v-1zm9.5 1a.25.25 0 01-.25-.25h1a.75.75 0 00-.75-.75v1z"
        fill={color || '#333'}
      />
    </Svg>
  );
};
