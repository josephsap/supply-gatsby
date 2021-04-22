import { css } from '@emotion/react';

const styles = (theme) => css`
  text-align: center;
  background-color: ${theme.palette.supply.cream.main};

  .top-container {
    position: relative;
    z-index: 3;
  }
  .desc {
    ${theme.breakpoints.up('sm')} {
      max-width: 82%;
      margin: 4rem auto;
    }
  }

  .bg-dots {
    top: 0;
    z-index: -1;
    height: 100%;
  }

  .green-bg {
    padding: 4rem;
    margin: 3rem 0 4rem;
    background-color: ${theme.palette.supply.seaGreen.main};
    ${theme.breakpoints.up('sm')} {
      padding: 8rem;
    }
  }

  .footer-logo {
    width: 154px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 14rem;
  }
`;

export default styles;
