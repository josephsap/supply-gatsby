import { css } from '@emotion/react';
import { pl4 } from '../layout/margin-padding-utils.styles';
import { initiallyHidden } from '../shared/shared.styles';

export const baseStyles = (theme) => css`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  ${theme.breakpoints.up('md')} {
    padding: 6rem;
  }
`;

export const drawStyles = css`
  transition: all 0.5s ease-in-out;
  &::before,
  &::after {
    border: 3px solid transparent;
    width: 0;
    height: 0;
    z-index: -1;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }
`;

const styles = (theme) => css`
  .draw {
    &::before,
    &::after {
      border: 3px solid transparent;
      width: 0;
      height: 0;
      border-radius: 20px;
    }

    // This covers the top & right borders (expands right, then down)
    &::before {
      top: 0;
      left: 0;
    }

    // And this the bottom & left borders (expands left, then up)
    &::after {
      bottom: 0;
      right: 0;
    }

    &::before,
    &::after {
      width: 100%;
      height: 100%;
    }

    &::before {
      border-top-color: ${theme.palette.text.primary}; // Make borders visible
      border-right-color: ${theme.palette.text.primary};
      transition: width 0.25s ease-out,
        // Width expands first
        height 0.25s ease-out 0.25s; // And then height
    }

    &::after {
      border-bottom-color: ${theme.palette.text
        .primary}; // Make borders visible
      border-left-color: ${theme.palette.text.primary};
      transition: border-color 0s ease-out 0.5s,
        // Wait for ::before to finish before showing border
        width 0.25s ease-out 0.5s,
        // And then exanding width
        height 0.25s ease-out 0.75s; // And finally height
    }
  }

  .giving-back-section {
    ${initiallyHidden}
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 4rem 1.6rem;
    ${theme.breakpoints.up('md')} {
      padding: 0 4rem 0 0;
      text-align: left;
    }
    h2 {
      padding: 1rem 0;
    }
  }

  .pushing-diversity {
    ${initiallyHidden}
    margin-bottom: 3rem;
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    ${theme.breakpoints.up('md')} {
      margin-left: auto;
      ${pl4};
    }
  }

  .badges-container {
    display: flex;
    margin: 5rem auto 3rem;
    max-width: 80%;
    ${theme.breakpoints.up('md')} {
      text-align: right;
      display: block;
      margin: 3rem 0;
      max-width: 100%;
    }
    img:nth-of-type(1) {
      width: 60%;
    }
    img:nth-of-type(2) {
      width: 39%;
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

  .modal-link {
    margin-top: 4rem;
    color: #d06e51;
    cursor: pointer;
    transition: 0.25s ease;
    ${theme.breakpoints.up('md')} {
      margin-top: auto;
    }
    &:hover {
      color: #c58876;
      transition: 0.25s ease;
    }
  }
`;

export default styles;
