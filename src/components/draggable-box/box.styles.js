import { css } from '@emotion/react';

const boxStyles = (theme) => css`
  opacity: 0;
  transition: ${theme.transitions.create(['opacity'], {
    duration: '.2s',
    easing: theme.transitions.easing.outExpo,
  })};

  .sticker-front {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: linear-gradient(
      to right,
      #feb29c 70%,
      #f9d9cf 80%,
      #f9d9cf 81%,
      #feb29c 100%
    );
    z-index: 2;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transform-origin: 100% 100%;
    transform: translateX(-100%) skewY(15deg);
  }
  .sticker-content {
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  }

  .sticker-content,
  .sticker-front {
    transition: ${theme.transitions.create(['all'], {
      duration: '.5s',
      easing: theme.transitions.easing.outExpo,
    })};
  }

  .sticker-content {
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.supply.desertTan.main};
    borderradius: 8px;
    padding: 2rem;
  }

  &.shown {
    opacity: 1;
    .sticker-content {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    .sticker-front {
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
      transform: translateX(0%) rotate(0deg) skew(0deg, 15deg);
    }
  }
`;

export default boxStyles;
