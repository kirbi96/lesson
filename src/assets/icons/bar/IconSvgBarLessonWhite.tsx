import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IIcon } from '../../../base/types/BaseTypes';

export const IconSvgBarLessonWhite = ({ sizeX, sizeY, color }: IIcon) => {
  return (
    <Svg
      width={sizeX || 33}
      height={sizeY || 33}
      viewBox="0 0 33 33"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16.51C0 7.402 7.406 0 16.5 0 25.594 0 33 7.402 33 16.51 33 25.598 25.594 33 16.5 33 7.406 33 0 25.598 0 16.51zm22.552 1.67a6.57 6.57 0 00.446-.51c.255-.334.382-.748.382-1.16a2.01 2.01 0 00-.414-1.244c-.022-.022-.065-.07-.122-.131-.106-.115-.258-.28-.403-.426-1.306-1.4-4.714-3.693-6.498-4.394-.271-.11-.956-.35-1.322-.366-.35 0-.685.08-1.004.239a2.065 2.065 0 00-.892.987c-.111.286-.286 1.146-.286 1.162-.175.94-.27 2.468-.27 4.155 0 1.61.095 3.072.238 4.027.004.004.018.073.039.179.065.322.2.994.343 1.27a2.005 2.005 0 001.768 1.082h.064c.478-.015 1.48-.43 1.48-.445 1.69-.7 5.018-2.881 6.356-4.33l.095-.096z"
        fill="#fff"
      />
    </Svg>
  );
};