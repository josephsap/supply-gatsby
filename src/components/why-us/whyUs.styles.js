import { css } from '@emotion/react';

const styles = (theme) => css`
  .title-container {
    margin: 6rem 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 430px;
  }
  .why-us-title {
    text-align: center;
    background-image: url('images/why-us-ellipse.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 518px;
    line-height: 450px;
    height: 450px;
    width: 100%;
    position: relative;
    z-index: 2;
    &:after {
      content: '';
      position: absolute;
      height: 130px;
      width: 2px;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
      background-color: ${theme.palette.text.primary};
      z-index: -1;
    }
  }

  .upper-container {
    display: flex;
  }

  .why-us-intro-title {
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${theme.breakpoints.down('md')} {
      margin-top: 5rem;
      text-align: center;
    }

    h2 {
      font-family: 'Bogue-Black';
      font-weight: 900;
      font-size: 7.2rem;
      margin: 1rem 0;
      em {
        font-weight: 300;
        font-family: 'Bogue-LightItalic';
      }
    }
  }

  .second-section {
    border-top: 2px solid;
    line-height: 1;
    font-size: 0;
    ${theme.breakpoints.up('md')} {
      padding: 7rem 5rem 0;
    }

    img {
      width: 100%;
      ${theme.breakpoints.down('md')} {
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;
      }
    }
  }

  .intro-copy {
    padding: 4rem;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      padding-right: 9rem;
      padding-left: 6.4rem;
      text-align: left;
    }
  }
`;

export default styles;
