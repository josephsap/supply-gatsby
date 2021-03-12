import { css } from '@emotion/react';
import { pr4, pl4 } from './layout/margin-padding-utils.styles';

const styles = css`
  padding: 6rem;

  .giving-back-section {
    ${pr4};
  }

  .pushing-diversity {
    margin-left: auto;
    ${pl4};
  }

  .badges-container {
    text-align: right;
  }

  .diversity-header-section {
    position: relative;
  }

  .title-right {
    text-align: right;

    img {
      margin-bottom: -1rem;
      margin-right: 45px;
    }
  }
`;

export default styles;
