import { css } from '@emotion/react';

export const chatBaseStyles = (theme) => css`
  background: ${theme.palette.supply.salmon.main};
  overflow-y: auto;
  overflow-x: hidden;

  > div h5,
  div p {
    ${theme.breakpoints.down('sm')} {
      text-align: center;
    }
  }

  .em-send-btn-container {
    &:nth-of-type(2) {
      margin-left: auto;
      margin-top: 2rem;
    }
  }

  .chat-input {
    fieldset {
      border: 2px solid;
    }
    .MuiOutlinedInput-root {
      border-radius: 16px;
    }
  }

  .message-container {
    margin: 40px 0;
    padding: 0 2rem;
    ${theme.breakpoints.up('sm')} {
      padding: 0 6rem;
    }
  }

  .message-interior {
    border: 2px solid;
    border-radius: 20px;
    overflow: auto;
    height: calc(80vh - 140px);
  }

  .loading-messages {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .send-msg-btn {
    ${theme.breakpoints.up('sm')} {
      margin-top: 2rem;
    }
  }

  .message-input-container {
    margin: 3rem 0 0;
    ${theme.breakpoints.up('sm')} {
      padding: 0 1rem;
    }

    form {
      margin: 2rem 0 2.5rem;
    }
  }

  .email-side-container {
    padding: 2.8rem 2rem 0;
    ${theme.breakpoints.up('sm')} {
      padding: 4.8rem 6rem;
    }
  }

  .email-btn {
    margin-top: auto;
  }

  .slide-styles {
    overflow-x: hidden;
  }

  .email-side-interior {
    margin-top: 2.75rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    ${theme.breakpoints.up('sm')} {
      text-align: left;
      padding-bottom: 2.4rem;
    }

    h5 {
      margin-bottom: 1rem;
      ${theme.breakpoints.up('sm')} {
        width: 75%;
      }
    }
  }
`;

export const customerMsgStyles = css`
  justify-content: end;
  margin: 2rem 4rem 2rem auto;
  max-width: 60%;
`;

export const agentMsgStyles = css`
  ${'' /* margin: 4rem 8rem 2rem 2rem; */}
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;

  p {
    padding-left: 2rem;
  }
`;

export const agentPhotoStyles = (theme, { photoUrl }) => css`
  background-position: center;
  background-size: cover;
  background-image: url(${photoUrl});
  background-repeat: no-repeat;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  ${theme.breakpoints.up('sm')} {
    height: 56px;
    width: 56px;
    margin-right: 2.4rem;
  }
`;

// export default styles;
