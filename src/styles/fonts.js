import { css } from 'styled-components';

import PoppinsRegular from '@fonts/Poppins/Poppins-Regular.ttf'
import PoppinsItalic from '@fonts/Poppins/Poppins-Italic.ttf'
import PoppinsMedium from '@fonts/Poppins/Poppins-Medium.ttf';
import PoppinsSemiBold from '@fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from '@fonts/Poppins/Poppins-SemiBoldItalic.ttf';
import PoppinsBold from '@fonts/Poppins/Poppins-Bold.ttf';
import PoppinsBoldItalic from '@fonts/Poppins/Poppins-BoldItalic.ttf';

const poppinsNormalStyles = {
  400: [PoppinsRegular],
  500: [PoppinsMedium],
  600: [PoppinsSemiBold],
  700: [PoppinsBold]
}

const poppinsItalicStyles = {
  400: [PoppinsItalic],
  600: [PoppinsSemiBoldItalic],
  700: [PoppinsBoldItalic]
}

const poppins = {
  name: 'poppins',
  normal: poppinsNormalStyles,
  italic: poppinsItalicStyles
}

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const tff = formats[0];

    styles += `
        @font-face {
          font-family: '${family.name}';
          src: url(${tff}) format('.tff');
          font-weight: ${weight}; 
          font-style: ${style};
          font-display: auto;
        }
      `;
  }

  return styles;
};

const poppinsNormal = createFontFaces(poppins);
const poppinsItalic = createFontFaces(poppins, 'italic');

const Fonts = css`
    ${poppinsNormal + poppinsItalic}
  `;

export default Fonts;
