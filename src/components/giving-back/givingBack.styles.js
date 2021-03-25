import { css } from '@emotion/react';
import { pr4, pl4 } from '../layout/margin-padding-utils.styles';

const styles = (theme) => css`
  padding: 3rem;
  ${theme.breakpoints.up('md')} {
    padding: 6rem;
  }

  .giving-back-section {
    text-align: center;
    ${theme.breakpoints.up('md')} {
      ${pr4};
    }
    h2 {
      padding: 1rem 0;
      ${'' /* ${theme.breakpoints.down('md')} {
        ${pb4};
        padding-top: 1.8rem;
      } */}
    }
  }

  .pushing-diversity {
    margin-bottom: 3rem;
    ${theme.breakpoints.up('md')} {
      margin-left: auto;
      ${pl4};
    }
  }

  .badges-container {
    display: flex;
    margin: 5.5rem 0 1rem;
    ${theme.breakpoints.up('md')} {
      text-align: right;
      display: block;
      margin: 3rem 0;
    }
    img:nth-of-type(1) {
      width: 63%;
    }
    img:nth-of-type(2) {
      width: 40%;
    }
  }

  .diversity-header-section {
    position: relative;
    margin-bottom: 1rem;
    ${theme.breakpoints.up('sm')} {
      margin-bottom: 3rem;
    }
  }

  .title-right {
    text-align: center;
    ${theme.breakpoints.up('sm')} {
      text-align: right;
    }

    img {
      margin-bottom: -1rem;
      margin-right: 45px;
    }
  }

  .copy-right {
    ${theme.breakpoints.down('md')} {
      text-align: center;
    }
  }
`;

export default styles;
