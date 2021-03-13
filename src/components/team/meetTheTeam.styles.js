import { css } from '@emotion/react';

const styles = (theme) => css`
  text-align: center;
  background-color: ${theme.palette.supply.seaGreen.main};

  .team-section-title {
    position: relative;
    display: table;
    margin: 0 auto 7rem;
  }

  .profile-img {
    mask: url('images/profile-bg.svg');
    width: 270px;
    height: 270px;
    margin: 0 auto;

    img {
      width: 270px;
      height: 270px;
    }
  }

  .teammate-name {
    margin: 3.5rem 0 2.5rem;
  }

  .linkedin-icon {
    margin: 3rem 0 2rem;
    display: block;
  }
`;

export const hiringImageStyles = (img) => css`
  &:after {
    content: '';
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 250px;
    position: absolute;
    right: -150px;
    top: -85%;
    width: 250px;
    height: 155px;
  }
`;

export default styles;
