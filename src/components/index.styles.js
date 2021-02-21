import { css } from "@emotion/react";

const styles = ({ activeSection, index }) => css`
  ${activeSection && index === 'section2' ? (
    `
      background-color: red;
      transition: 0.5s ease-in-out;
    `
    ) : ''}
`;

export default styles;