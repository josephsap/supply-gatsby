import { css } from '@emotion/react';

const styles = (theme) => css`
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.8rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.up('sm')} {
      margin-bottom: 0;
    }
    ${theme.breakpoints.up('md')} {
      height: 430px;
      margin: 6rem 0 1rem;
    }
  }
  .why-us-title {
    text-align: center;
    background-image: url('images/why-us-ellipse.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 268px;
    line-height: 200px;
    height: 200px;
    width: 100%;
    position: relative;
    z-index: 2;
    ${theme.breakpoints.up('sm')} {
      background-size: 518px;
      line-height: 450px;
      height: 450px;
    }
    &:after {
      content: '';
      position: absolute;
      height: 72px;
      width: 2px;
      bottom: -20px;
      left: 50%;
      margin-left: -1px;
      background-color: ${theme.palette.text.primary};
      z-index: -1;
      ${theme.breakpoints.up('sm')} {
        height: 130px;
        bottom: 0;
      }
    }
  }

  .upper-container {
    display: flex;
    ${theme.breakpoints.up('sm')} {
      padding-left: 4rem;
    }
  }

  .why-us-intro-title {
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${theme.breakpoints.down('md')} {
      text-align: center;
      margin: 5rem auto 0;
    }

    h2 {
      font-family: 'Bogue-Black';
      font-weight: 900;
      font-size: 3.2rem;
      margin: 0.8rem 0;
      ${theme.breakpoints.up('sm')} {
        font-size: 7.2rem;
      }
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
    padding: 1rem 4rem 4rem;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      padding-right: 9rem;
      padding-left: 6.4rem;
      text-align: left;
    }
  }
`;

export default styles;
