import { css } from '@emotion/react';

const styles = (theme) => css`
  position: relative;
  .MuiDialog-paper {
    border-radius: 20px;
    border: 3px solid;
    background-color: ${theme.palette.supply.cream.main};
  }

  .grid-img {
    display: block;
    width: 100%;
  }

  .grid-img-grid {
    padding: 2rem 4rem;
    width: 100%;
    &:nth-of-type(even) {
      ${theme.breakpoints.up('md')} {
        width: 50%;
        padding: 0 4.8rem 4.8rem 2.4rem;
      }
    }

    &:nth-of-type(odd) {
      ${theme.breakpoints.up('md')} {
        width: 50%;
        padding: 0 2.4rem 4.8rem 4.8rem;
      }
    }
  }

  .inner-top {
    padding: 4rem 1em 2rem;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      padding: 8rem 10rem 4rem;
    }
  }

  .images-container {
    margin-bottom: 8rem;
    display: flex;
    flex-wrap: wrap;
  }

  .modal-title {
    margin-bottom: 1rem;
    ${theme.breakpoints.up('sm')} {
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .modal-desc {
    max-width: 90%;
    margin: 0 auto;
    ${theme.breakpoints.up('sm')} {
      max-width: 500px;
    }
  }
`;

export default styles;
