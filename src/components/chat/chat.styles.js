import { css } from '@emotion/react';

const styles = (theme) => css`
  background: ${theme.palette.supply.salmon.main};
  height: 100%;
  overflow: auto;

  .message-container {
    padding: 4.8rem 6rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .message-interior {
    border: 3px solid;
    border-radius: 20px;
    height: 100%;
    overflow: scroll;
  }

  .send-msg-btn {
    margin-top: 2rem;
  }

  .message-input-container {
    margin: 3rem 0 0;
    padding: 0 1rem;

    form {
      margin: 2rem 0 1rem;
    }
  }

  .email-side-container {
    padding: 4.8rem 6rem;
    height: 100%;
  }

  .email-btn {
    margin-top: auto;
  }

  .email-side-interior {
    margin-top: 2.75rem;
    padding-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    height: 100%;

    h5 {
      margin-bottom: 1rem;
      ${theme.breakpoints.up('md')} {
        width: 75%;
      }
    }
  }
`;

export const customerMsgStyles = css`
  display: flex;
  justify-content: end;
  margin: 2rem 4rem 2rem auto;
  max-width: 60%;
`;

export const agentMsgStyles = css`
  display: flex;
  margin: 4rem 8rem 2rem 2rem;
`;

export const agentPhotoStyles = (photoUrl) => css`
  background-position: center;
  background-size: cover;
  background-image: url(${photoUrl});
  height: 56px;
  width: 56px;
  border-radius: 50%;
  margin-right: 2.4rem;
`;

export default styles;
