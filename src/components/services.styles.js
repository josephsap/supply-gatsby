import { css } from "@emotion/react";

const styles = theme => css`
  background-color: ${theme.palette.supply.goldLeather.main};

  .items-container {
    border-top: 3px solid;
    padding: 4rem;
  }

  .service-item {
    padding: 4rem 0;
    ${theme.breakpoints.up('md')} {
      padding-left: 6rem;
      padding-right: 6rem;
    };
  }

  .service-item-copy {
    max-width: 43.5rem;
  }

  .services-section-top {
    text-align: center;
    margin: 4rem 0 6rem;
  }
`;

export default styles;