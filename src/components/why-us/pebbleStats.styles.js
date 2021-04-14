import { css } from '@emotion/react';

const styles = (theme) => css`
  position: relative;
  height: 800px;
`;

export const backgroundDotStyles = (theme) => css`
  background-image: radial-gradient(
    #e8e8e8 10%,
    ${theme.palette.supply.lightPeach.main} 10%
  );
  background-position: 0 0;
  background-size: 60px 60px;
  height: 100%;
  width: 100%;
  max-width: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default styles;
