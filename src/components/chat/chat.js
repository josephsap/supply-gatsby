import React, { useState } from 'react';
import {
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import { CustomerMessage, AgentMessage } from './chatUtils';
import styles from './chat.styles';

const ChatMessages = ({ messages = [], customerId, scrollToRef }) => {
  return (
    <div>
      {messages.map((message, idx) => {
        const key = message.id || idx;
        const isMe =
          message.customer_id === customerId ||
          (!!message.sent_at && message.type === 'customer');

        return isMe ? (
          <CustomerMessage key={key} message={message} />
        ) : (
          <AgentMessage key={key} message={message} />
        );
      })}

      <div key="scroll-el" ref={scrollToRef} />
    </div>
  );
};

const Chat = ({ state, onSendMessage, scrollToRef }) => {
  const [message, setMessageBody] = useState('');
  const { messages = [], customerId, isLoaded } = state;

  const handleChangeMessage = (e) => setMessageBody(e.target.value);

  const handleSendMessage = (e) => {
    onSendMessage({ body: message });
    setMessageBody('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <>
      <Grid container css={styles}>
        {/* TODO: put this copy in the cms */}

        <Grid item xs={12} md={6} className="email-side-container">
          <Box className="email-side-interior">
            <Typography variant="h5">Talk to a real person.</Typography>
            <Typography variant="body1">
              No, really. We are probably sitting at our computers right now,
              waiting to talk to you. We’re the kind of folks that understand
              how important time is when it comes to hiring the right talent.
              Let’s chat!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className="email-btn"
              fullWidth
              startIcon={
                <img
                  src={`images/arrow-left-email-btn.svg`}
                  style={{ marginRight: 'auto' }}
                />
              }
            >
              Email us
            </Button>
          </Box>
        </Grid>

        {isLoaded ? (
          <Grid item xs={12} md={6} className="message-container">
            <div className="message-interior">
              <div
                style={{
                  flex: 1,
                  height: '100%',
                  overflow: 'scroll',
                }}
              >
                <ChatMessages
                  messages={messages}
                  customerId={customerId}
                  scrollToRef={scrollToRef}
                />
              </div>
            </div>
            <div className="message-input-container">
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  value={message}
                  placeholder="Start typing..."
                  onChange={handleChangeMessage}
                />
              </form>
              <Button
                fullWidth
                onClick={(e) => handleSendMessage(e)}
                className="send-msg-btn"
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </div>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </>
  );
};

export default Chat;
