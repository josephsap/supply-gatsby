import { css } from '@emotion/react';
import { pr4, pl4 } from '../layout/margin-padding-utils.styles';
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
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &::after {
    top: 0;
    left: 0;
  }
`;

const styles = (theme) => css`
  .draw {
    &::before,
    &::after {
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &::before {
      border-top-color: ${theme.palette.text.primary}; // Make borders visible
      border-right-color: ${theme.palette.text.primary};
      border-radius: 20px;
      transition: width 0.5s ease-out,
        // Width expands first
          height 0.5s ease-out 0.5s; // And then height
    }

    &::after {
      border-bottom-color: ${theme.palette.text
        .primary}; // Make borders visible
      border-left-color: ${theme.palette.text.primary};
      border-radius: 20px;
      transition: border-color 0s ease-out 0.5s,
        // Wait for ::before to finish before showing border
          width 0.5s ease-out 0.5s,
        // And then expanding width
          height 0.5s ease-out 0.75s; // And finally height
    }

    // Change colors
    &::before {
      border-top-color: ${theme.palette.text.primary};
      border-right-color: ${theme.palette.text.primary};
    }

    &::after {
      border-bottom-color: ${theme.palette.text.primary};
      border-left-color: ${theme.palette.text.primary};
      transition: // Animate height first, then width height 0.5s ease-out, width 0.5s ease-out 0.5s;
    }
  }
  .giving-back-section {
    ${initiallyHidden}
    text-align: center;
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.up('md')} {
      ${pr4};
      text-align: left;
    }
    h2 {
      padding: 1rem 0;
    }
  }

  .pushing-diversity {
    ${initiallyHidden}
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
    margin-top: auto;
    color: #bb9cfe;
    cursor: pointer;
    transition: 0.25s ease;
    &:hover {
      color: #cab1ff;
      transition: 0.25s ease;
    }
  }
`;

export default styles;
