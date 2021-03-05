import { css } from '@emotion/react';

const styles = (theme) => css`
  text-align: center;
  background-color: ${theme.palette.supply.seaGreen.main};

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
`;

export default styles;
