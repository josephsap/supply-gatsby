import { css } from "@emotion/react";

const styles = (theme, props) => css`
  background-color: ${theme.palette.supply.pink.main};

  .tab-indicator-override {
    background: none;
  }

  .partner-tabs {
    border: 3px solid;
    text-align: center;
    display: table;
    margin: 0 auto;
    border-radius: 32px;
    line-height: 0;
  }

  .single-tab-item {
    text-transform: capitalize;
  }
  .Mui-selected {
    background-color: ${theme.palette.text.primary};
  }
`;

export default styles;