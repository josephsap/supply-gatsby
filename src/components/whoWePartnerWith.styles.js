import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.pink.main};

  .tab-indicator-override {
    background: none;
  }

  .partner-section-container {
    text-align: center;
  }

  .partner-tabs {
    border: 3px solid;
    text-align: center;
    display: table;
    margin: 3rem auto 4rem;
    border-radius: 32px;
    line-height: 0;
  }

  .single-tab-item {
    text-transform: capitalize;
  }

  .Mui-selected {
    background-color: ${theme.palette.text.primary};
  }

  .info-tooltip {
    height: 35px;
    display: block;
  }

  .tooltip-container {
    display: table;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const tabStyles = (value) => css`
  ${value === 0
    ? `
    .Mui-selected {
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
    }
  `
    : `
    .Mui-selected {
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
    }
  `}
`;

export default styles;
