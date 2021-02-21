import { css } from "@emotion/react";

const styles = theme => css`
  margin-top: ${theme.spacing(4)};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

export const bgStyles = css`
  .bgChange {
    background-color: aqua;
  }
`;

export default styles;