import { css } from '@emotion/react';

const styles = (theme) => css``;

export const networkItemStyles = (imgUrl) => css`
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-size: 250px;
  ${'' /* position: absolute;
  right: -150px;
  top: -85%;
  width: 250px;
  height: 155px; */}
`;

export default styles;
