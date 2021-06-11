import { css } from '@emotion/react';

const styles = (theme) => css`
  .top-bar {
    background-color: #ffe8e1;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;

    p {
      margin-left: 3rem;
    }
  }

  .main {
    background-color: ${theme.palette.supply.cream.main};
  }

  .intro-copy {
    text-align: center;
    ${theme.breakpoints.up('md')} {
      max-width: 83%;
      margin: 4rem auto;
    }
    h4 {
      line-height: 2;
    }
  }

  .intro-two {
    text-align: center;
    margin-bottom: 5rem;
  }

  .portfolio-item {
    line-height: 1;
  }
`;

export default styles;
