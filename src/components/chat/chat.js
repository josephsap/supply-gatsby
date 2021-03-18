import React, { useState } from 'react';
import {
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Button,
  Box,
  Slide,
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
  const [checked, setChecked] = useState(false);
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

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="left" ref={ref} {...props} />;
  // });

  return (
    <div style={{ backgroundColor: '#FEB29C' }}>
      {!checked ? (
        <Slide
          direction="right"
          in={!checked}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 400, exit: 400 }}
        >
          <Grid container css={styles}>
            {/* TODO: put this copy in the cms */}

            <Grid item xs={12} md={6} className="email-side-container">
              <Box className="email-side-interior">
                <Typography variant="h5">Talk to a real person.</Typography>
                <Typography variant="body1">
                  No, really. We are probably sitting at our computers right
                  now, waiting to talk to you. We’re the kind of folks that
                  understand how important time is when it comes to hiring the
                  right talent. Let’s chat!
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="email-btn"
                  fullWidth
                  onClick={() => setChecked(true)}
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
                  <ChatMessages
                    messages={messages}
                    customerId={customerId}
                    scrollToRef={scrollToRef}
                  />
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
        </Slide>
      ) : null}
      {checked ? (
        <Slide
          direction="left"
          in={checked}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 400, exit: 400 }}
        >
          <Grid container css={styles}>
            {/* TODO: put this copy in the cms */}

            <Grid item xs={12} md={6} className="email-side-container">
              <Box className="email-side-interior">
                <Typography variant="h5">the email side.</Typography>
                <Typography variant="body1">
                  No, really. We are probably sitting at our computers right
                  now, waiting to talk to you. We’re the kind of folks that
                  understand how important time is when it comes to hiring the
                  right talent. Let’s chat!
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="email-btn"
                  fullWidth
                  onClick={() => setChecked(false)}
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
                  <ChatMessages
                    messages={messages}
                    customerId={customerId}
                    scrollToRef={scrollToRef}
                  />
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
        </Slide>
      ) : null}
    </div>
  );
};

export default Chat;

{
  /* <Slide
        in={activeIndex}
        direction="left"
        timeout={400}
        style={{ border: '2px solid green' }}
      >
        <Grid container>
          <Grid item xs={12}>
            <div>
              <div>hello </div>
              <Button
                variant="contained"
                color="secondary"
                className="email-btn"
                fullWidth
                onClick={() => setActiveIndex(0)}
                startIcon={
                  <img
                    src={`images/arrow-left-email-btn.svg`}
                    style={{ marginRight: 'auto' }}
                  />
                }
              >
                second panel
              </Button>
            </div>
          </Grid>
        </Grid>
      </Slide> */
}
