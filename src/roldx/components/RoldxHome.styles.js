import { css } from '@emotion/react';

const styles = (theme) => css`
  text-align: center;
  background-color: ${theme.palette.supply.cream.main};
  padding-top: 4rem;

  .top-container {
    position: relative;
    z-index: 3;
    padding-top: 5rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
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
    width: 100%;
    left: 0;
  }

  .green-bg {
    padding: 4rem;
    margin-bottom: 4rem;
    background-color: ${theme.palette.supply.seaGreen.main};
    ${theme.breakpoints.up('sm')} {
      padding: 8rem;
    }
  }

  .below-img-text {
    ${theme.breakpoints.up('sm')} {
      font-size: 2.2rem;
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
