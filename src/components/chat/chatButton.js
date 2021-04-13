import { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import ChatContainer from './chatContainer';
import styles from './chatButton.styles';

const ChatButton = () => {
  const [showChatModal, setShowChatModal] = useState(false);

  const handleOpen = () => {
    setShowChatModal(true);
  };

  const handleClose = () => {
    setShowChatModal(false);
  };

  return (
    <div css={styles}>
      <Button variant="contained" onClick={handleOpen} className="chat-button">
        <Typography variant="body1"></Typography>Talk to&nbsp;
        <span className="btn-italic-text">A real person</span>
      </Button>
      {showChatModal && (
        <ChatContainer
          showChatModal={showChatModal}
          onCloseChat={handleClose}
        />
      )}
    </div>
  );
};

export default ChatButton;
