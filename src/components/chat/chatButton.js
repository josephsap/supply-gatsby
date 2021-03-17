import { useState } from 'react';
import { Button } from '@material-ui/core';
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
        Talk to&nbsp;<span className="btn-italic-text">A real person</span>
      </Button>
      {showChatModal && (
        <ChatContainer
          setShowChatModal={setShowChatModal}
          showChatModal={showChatModal}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ChatButton;
