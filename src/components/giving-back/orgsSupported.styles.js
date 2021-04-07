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
      ${theme.breakpoints.up('sm')} {
        width: 40%;
        ${'' /* padding: 0 4.8rem 4.8rem 2.4rem; */}
      }
    }

    &:nth-of-type(odd) {
      ${theme.breakpoints.up('sm')} {
        width: 40%;
        ${'' /* padding: 0 2.4rem 4.8rem 4.8rem; */}
      }
    }
  }

  .inner-top {
    padding: 0rem 10rem 8rem;
    text-align: center;
  }

  .images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .modal-title {
    margin-bottom: 1rem;
  }
`;

export default styles;
