import { css } from '@emotion/react';

const styles = (theme) => css`
  .top-bar {
    background-color: #ffe8e1;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;

    p {
      margin-left: 3rem;
    }
  }

  .main {
    background-color: ${theme.palette.supply.cream.main};
  }

  .intro-copy {
    text-align: center;
    ${theme.breakpoints.up('md')} {
      max-width: 83%;
      margin: 4rem auto;
    }
    h4 {
      line-height: 2;
    }
  }

  .intro-two {
    text-align: center;
    margin-bottom: 5rem;
  }

  .portfolio-item {
    line-height: 1;
  }

  .popover-anchor {
    position: relative;
  }

  .tooltip-container {
    position: absolute;
    top: 50%;
    width: 100%;
  }

  .help-icon {
    color: rgb(224, 0, 0);
    font-size: 3rem;
    position: absolute;
    cursor: pointer;
  }

  .help-icon-name {
    top: 0;
    left: 95px;
  }
`;

export default styles;
