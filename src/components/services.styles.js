import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.goldLeather.main};

  .hww-title {
    margin-bottom: 4rem;
  }

  .line-separator {
    display: inline-block;
    span {
      letter-spacing: -10px;
      margin: 0 2.5rem;
      font-family: helvetica, sans-serif;
    }
  }

  .items-container {
    border-top: 3px solid;
    padding: 4rem;
  }

  .service-item {
    padding: 4rem 0;
    ${theme.breakpoints.up('md')} {
      padding-left: 6rem;
      padding-right: 6rem;
    }
    h4 {
      margin: 1rem 0 1.5rem;
    }
  }

  .service-item-copy {
    max-width: 43.5rem;
    color: ${theme.palette.supply.cream.main};
  }

  .services-section-top {
    text-align: center;
    margin: 7rem 0 6rem;
  }
`;

export default styles;
