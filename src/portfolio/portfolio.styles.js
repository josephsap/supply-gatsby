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

  .sample-title {
    border-bottom: 5px solid #bb9cfe;
    width: fit-content;
    max-width: fit-content;
    line-height: 0.8;
  }

  .main {
    background-color: ${theme.palette.supply.cream.main};
  }

  .portfolio-img {
    max-width: 100%;
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
    position: relative;
  }

  .portfolio-item {
    line-height: 1;
    position: relative;
  }

  .popover-anchor {
    position: relative;
  }

  .tooltip-container {
    position: absolute;
    top: 50%;
    width: 100%;
    &:hover {
      cursor: help;
    }
  }

  .help-icon {
    width: 30px;
    position: absolute;
    animation: lighten 3s linear infinite;
  }

  @keyframes lighten {
    0% {
      opacity: 0.8;
    }
    35% {
      opacity: 0.1;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.8;
    }
  }

  .help-icon-name {
    right: 1px;
    left: auto;
    top: -3px;
  }

  .name-container {
    width: 50%;
  }

  .help-icon-about {
    left: 50%;
    top: 1px;
  }

  .icon-titles {
    top: 15px;
  }

  .top-mid-item {
    left: 4rem;
    .help-icon {
      left: -10px;
      top: -10px;
    }
  }

  .help-icon-maincopy {
    position: static;
  }

  .maincopy {
    top: 10px;
    width: 30px;
    height: 30px;
    padding: 0;
    left: 40.5%;
  }

  .container-availability {
    left: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
  }

  .help-icon-available {
    position: static;
    top: 0;
    left: 0;
    padding: 0;
  }

  .container-desc {
    width: 30px;
    height: 30px;
    padding: 0;
    top: -30px;
    right: 0;
  }

  .container-img {
    top: 4rem;
    width: 30px;
    height: 30px;
    padding: 0;
    right: 50px;
  }

  .container-jobrole {
    width: 30px;
    height: 30px;
    padding: 0;
    right: 4rem;
  }
`;

export default styles;
