import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.goldLeather.main};

  //pre-animated in styles
  .hww-title,
  .hww-description,
  .service-item {
    opacity: 0;
    transform: translateY(50px);
  }

  .hww-title {
    margin-bottom: 4rem;
    div {
      display: inline-block;
    }
  }

  .line-separator {
    span {
      letter-spacing: -10px;
      margin: 0 2.5rem;
      font-family: helvetica, sans-serif;
      ${theme.breakpoints.down(theme.breakpoints.values.lg - 14)} {
        font-size: 0;
        margin: 0 1.5rem;
      }
    }
  }

  .items-container {
    border-top: 3px solid;
    padding: 4rem;
  }

  .service-item {
    padding: 4rem 0;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      padding-left: 6rem;
      padding-right: 6rem;
      text-align: left;
    }
    h4 {
      margin: 1rem 0 1.5rem;
    }
  }

  .service-item-copy {
    max-width: 43.5rem;
    color: ${theme.palette.supply.cream.main};
    ${theme.breakpoints.down('md')} {
      max-width: 100%;
    }
  }

  .services-section-top {
    text-align: center;
    margin: 7rem 0 6rem;
    padding: 0 2.4rem;
  }
`;

export default styles;
