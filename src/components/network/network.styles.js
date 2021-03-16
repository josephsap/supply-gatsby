import { css } from '@emotion/react';

const styles = (theme) => css`
  .network-title {
    ${theme.breakpoints.down('md')} {
      text-align: center;
      margin-top: 3.2rem;
    }
  }

  .network-desc {
    ${theme.breakpoints.down('md')} {
      text-align: center;
      padding: 0 2.4rem;
    }
  }
`;

export const networkItemStyles = (imgUrl) => css`
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-size: 250px;
`;

export default styles;
