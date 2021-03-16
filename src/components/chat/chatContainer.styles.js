import { css } from '@emotion/react';

const styles = (theme) => css`
  position: absolute;
  z-index: 10;
  background: ${theme.palette.supply.salmon.main};
  right: 0;
`;

export default styles;
