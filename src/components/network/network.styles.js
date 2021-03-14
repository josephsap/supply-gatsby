import { css } from '@emotion/react';

const styles = (theme) => css``;

export const networkItemStyles = (imgUrl) => css`
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-size: 250px;
`;

export default styles;
