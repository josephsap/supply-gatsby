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
    margin: 0 auto 4.5rem;

    img {
      width: 270px;
      height: 270px;
    }
  }

  .teammate-container {
    margin-bottom: 4.4rem;
  }

  .teammate-name {
    margin: 3.5rem 0 2.5rem;
    color: ${theme.palette.supply.lightPeach.main};
  }

  .linkedin-icon {
    margin: 3rem 0 2rem;
    display: block;
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
