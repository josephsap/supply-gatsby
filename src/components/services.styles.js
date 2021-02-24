import { css } from "@emotion/react";

const styles = theme => css`
  background-color: ${theme.palette.supply.goldLeather.main};
  padding-top: 12rem;
  padding-bottom: 12rem;
  
  .services-container {
    border: 3px solid;
    border-radius: 20px;
  }

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