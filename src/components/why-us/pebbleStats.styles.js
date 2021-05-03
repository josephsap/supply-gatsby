import { css } from '@emotion/react';

const styles = ({ winHeight }) => css`
  position: relative;
  height: ${winHeight}px;
  margin-top: 10rem;
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
