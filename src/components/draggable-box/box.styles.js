import { css } from '@emotion/react';

const boxStyles = (theme) => css`
  &.drag-box {
      clip-path: inset(0 100% 0 0);
  }
`;

export default boxStyles;
