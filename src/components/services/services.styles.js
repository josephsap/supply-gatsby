import { css } from '@emotion/react';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.eraser.main};

  //pre-animated in styles
  .hww-description,
  .service-item {
    ${initiallyHidden}
  }

  .hww-title {
    margin-bottom: 2rem;
    padding: 0 4.5rem;
    ${theme.breakpoints.up('md')} {
      margin-bottom: 4rem;
      padding: 0;
    }
    div {
      display: inline-block;
    }
  }

  .line {
    height: 3px;
    width: 0px;
    display: inline-block;
    vertical-align: middle;
    background-color: #000;
    overflow: hidden;
    opacity: 0;
    margin: 0 1rem;
    transition: all 0.5s ease;
    transform: translate(0%, 0);
  }

  .line-animate {
    .line {
      height: 5px;
      width: 200px;
      opacity: 1;
      background-color: #000;
      color: #000;
      -webkit-transition: all 0.8s ease;
      -moz-transition: all 0.8s ease;
      transition: all 0.8s ease;
    }
  }

  ${'' /* .line-separator {
    span {
      letter-spacing: -15px;
      margin: 0 2.5rem;
      font-family: helvetica, sans-serif;
      ${theme.breakpoints.down(theme.breakpoints.values.lg - 14)} {
        font-size: 0;
        margin: 0 1.5rem;
      }
    }
  } */}

  .items-container {
    border-top: 3px solid;
    padding: 4rem;
  }

  .service-item {
    padding: 2rem 0;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      text-align: left;
      padding: 4rem 6rem;
    }
    h4 {
      margin: 1rem 0 1.5rem;
    }
  }

  .service-item-copy {
    max-width: 43.5rem;
    color: ${theme.palette.supply.cream.main};
    ${theme.breakpoints.down('md')} {
      max-width: 100%;
    }
  }

  .services-section-top {
    text-align: center;
    margin: 2rem 0 4rem;
    padding: 0 2.4rem;
    ${theme.breakpoints.up('sm')} {
      margin-top: 7rem;
      margin-bottom: 6rem;
    }
  }
`;

export default styles;
