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
    ${'' /* ${theme.breakpoints.down('md')} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
    } */}

    h2 {
      font-family: 'Bogue-Black';
      font-weight: 900;
      font-size: 7.2rem;
      margin: 1rem 0;
      ${'' /* ${theme.breakpoints.down('md')} {
        margin-bottom: 0;
        line-height: 1;
      } */}
      em {
        font-weight: 300;
        font-family: 'Bogue-LightItalic';
      }
    }
  }

  .second-section {
    border-top: 2px solid;
    padding: 7rem 5rem 0;
    line-height: 1;
    font-size: 0;

    img {
      width: 100%;
    }
  }

  .intro-copy {
    padding: 4rem;
    ${theme.breakpoints.up('md')} {
      padding-right: 9rem;
      padding-left: 6.4rem;
    }
  }
`;

export default styles;
