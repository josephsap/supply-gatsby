import { css } from "@emotion/react";

const styles = theme => css`
  background-color: ${theme.palette.supply.goldLeather.main};

  .items-container {
    border-top: 3px solid;
  }

  .service-item {
    padding: 4rem 6rem;
  }

  .service-item-copy {
    max-width: 43.5rem;
  }
`;

export default styles;