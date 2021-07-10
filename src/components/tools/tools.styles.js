import { css } from '@emotion/react';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  .tools-description {
    ${initiallyHidden}
  }
  .tools-header-border {
    border: 3px solid;
    text-align: center;
    border-radius: 20px;
    padding: 4rem 2rem 4.5rem;
    ${theme.breakpoints.up('md')} {
      border-radius: 170px;
      padding-bottom: 7rem;
    }
  }

  .tools-title {
    margin-top: 0.5rem;
    div {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  .tool-item-container {
    ${initiallyHidden}
    text-align: center;
    ${theme.breakpoints.up('md')} {
      text-align: left;
    }
  }

  .tool-name {
    margin: 0.5rem 0 1rem;
  }

  .tool-link {
    margin-top: 1.1rem;
  }

  .line {
    height: 3px;
    width: 0px;
    display: inline-block;
    vertical-align: middle;
    background-color: ${theme.palette.text.primary};
    overflow: hidden;
    opacity: 0;
    margin: 0 1rem;
    transition: all 0.5s ease;
    transform: translate(0%, 0);
  }

  .line-animate {
    .line {
      width: 200px;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;

export default styles;
