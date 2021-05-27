import { css } from '@emotion/react';

const styles = (theme) => css`
  position: relative;
  .MuiDialog-paper {
    border-radius: 20px;
    border: 3px solid;
    background-color: ${theme.palette.supply.cream.main};
  }

  .grid-img-grid {
    padding: 2rem 4rem;
    width: 100%;
    &:nth-of-type(even) {
      ${theme.breakpoints.up('md')} {
        width: 40%;
      }
    }

    &:nth-of-type(odd) {
      ${theme.breakpoints.up('md')} {
        width: 40%;
      }
    }
  }

  .inner-top {
    padding: 0rem 1rem 5rem;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      padding: 0rem 10rem 8rem;
    }
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .orgs-copy {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
`;

export default styles;
