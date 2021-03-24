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
import EmailContainer from '../email/email-container';
import { chatBaseStyles } from './chat.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  const theme = useTheme();
  const showMed = useMediaQuery(theme.breakpoints.up('md'));
  const showSm = useMediaQuery(theme.breakpoints.down('sm'));

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
          <Grid container css={chatBaseStyles}>
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
                {showMed && (
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
                )}
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className="message-container">
              <div className="message-interior">
                {isLoaded ? (
                  <ChatMessages
                    messages={messages}
                    customerId={customerId}
                    scrollToRef={scrollToRef}
                  />
                ) : (
                  <div className="loading-messages">
                    <CircularProgress />
                  </div>
                )}
              </div>
              <div className="message-input-container">
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    value={message}
                    placeholder="Talky Talk."
                    onChange={handleChangeMessage}
                    variant="outlined"
                    className="chat-input"
                  />
                </form>
                <Grid container>
                  <Grid item xs={12} md={12} className="em-send-btn-container">
                    <Button
                      fullWidth
                      onClick={(e) => handleSendMessage(e)}
                      className="send-msg-btn"
                      variant="contained"
                      color="primary"
                    >
                      Send
                    </Button>
                  </Grid>
                  <Grid item xs={12} className="em-send-btn-container">
                    {showSm && (
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
                    )}
                  </Grid>
                </Grid>
              </div>
            </Grid>
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
          <div>
            <EmailContainer setChecked={setChecked} />
          </div>
        </Slide>
      ) : null}
    </div>
  );
};

export default Chat;
