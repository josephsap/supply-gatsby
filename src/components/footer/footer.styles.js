import { css } from '@emotion/react';

const styles = (theme) => css`
  margin-bottom: 9rem;
  .footer-container {
    list-style: none;
    padding-left: 0;
    ${theme.breakpoints.down('sm')} {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .img-container,
  .text-container {
    margin-left: auto;
    margin-right: auto;
    ${theme.breakpoints.up('sm')} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .text-container {
    margin-bottom: 4rem;
    ${theme.breakpoints.up('sm')} {
      margin-bottom: 6rem;
    }
  }

  .footer-item {
    display: inline-block;
    margin: 0 2rem;
    vertical-align: top;
    ${theme.breakpoints.up('sm')} {
      margin: 0 3rem 0 0;
    }

    .email-link {
      color: ${theme.palette.text.primary};
    }

    img {
      width: 19px;
      height: 19px;
    }
  }

  .star {
    margin-top: -4px;
    ${theme.breakpoints.down('sm')} {
      width: 100%;
      text-align: center;
      margin: 2rem 0;
    }
  }
`;

export default styles;
