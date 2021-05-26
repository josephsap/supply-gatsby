import { css } from '@emotion/react';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  text-align: center;
  background-color: ${theme.palette.supply.seaGreen.main};

  .team-section-title {
    ${initiallyHidden}
    position: relative;
    margin-bottom: 6rem;
  }

  .profile-img {
    mask: url('images/profile-bg.svg');
    width: 270px;
    height: 270px;
    margin: 0 auto 4.5rem;

    img {
      width: 270px;
      height: 270px;
    }
  }

  .member-wrapper {
    ${initiallyHidden}
    display: flex;
  }

  .teammate-container {
    margin-bottom: 4.4rem;
    ${theme.breakpoints.up('sm')} {
      padding: 0 3rem;
    }
  }

  .teammate-name {
    margin: 3.5rem 0 2.5rem;
    color: ${theme.palette.supply.desertTan.main};
  }

  .linkedin-icon {
    margin: 3rem 0 2rem;
    display: block;
  }

  .hiring-img {
    position: absolute;
    right: 0;
    top: -132%;
    display: none;
    ${theme.breakpoints.up('md')} {
      right: 280px;
      display: block;
    }

    img {
      width: 220px;
      height: 155px;
    }
  }
`;

export const hiringImageStyles = (theme, { teamImg }) => css`
  &:after {
    content: '';
    background-image: url(${teamImg});
    background-repeat: no-repeat;
    background-size: 130px;
    position: absolute;
    width: 130px;
    height: 130px;
    right: -60px;
    top: -50px;
    ${theme.breakpoints.up('md')} {
      width: 250px;
      height: 155px;
      background-size: 250px;
      right: -150px;
      top: -85%;
    }
  }
`;

export default styles;
