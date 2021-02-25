import { css } from "@emotion/react";

const styles = theme => css`
  background-color: ${theme.palette.supply.cream.main};
  .content {
    position: relative;
    z-index: 2;
  }
`;

export const backgroundDotStyles = theme => css`
  background-image: radial-gradient(#e8e8e8 10%, ${theme.palette.supply.cream.main} 10%);
  background-position: 0 0;
  background-size: 45px 45px;
  height: 60%;
  width: 100%;
  position: absolute;
  top: 100px;
`;

export const backgroundStyles = theme => css`
  background-color: ${theme.palette.supply.cream.main};
  position: relative;
`;

export default styles;