import React, { useState, useRef, useEffect, useCallback } from 'react';
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
import { useTheme } from '@material-ui/core/styles';
import gsap from 'gsap/gsap-core';

const ChatMessages = ({ messages = [], customerId, scrollToRef }) => {
  return (
    <div className="msg-container">
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

const Chat = ({ state, onSendMessage, scrollToRef, chatCloseButton }) => {
  const [message, setMessageBody] = useState('');
  const [checked, setChecked] = useState(false);
  const { messages = [], customerId, isLoaded } = state;
  const theme = useTheme();
  const emailTitleRef = useRef(null);
  const emailDescriptionRef = useRef(null);
  const emailButtonRef = useRef(null);
  const formRef = useRef(null);
  const sendButtonRef = useRef(null);
  const closeRef = useRef(null);

  const handleChangeMessage = (e) => setMessageBody(e.target.value);
  const animateTalkSection = useCallback(() => {
    gsap.from(formRef.current, {
      x: -50,
      opacity: 0,
      ease: 'power4.out',
      duration: 0.75,
      delay: 0.3,
    });
    gsap.from(sendButtonRef.current, {
      x: -50,
      opacity: 0,
      ease: 'power4.out',
      duration: 0.75,
      delay: 0.4,
    });

    gsap.from(emailTitleRef.current, {
      x: -300,
      opacity: 0,
      ease: 'power4.out',
      duration: 0.75,
      delay: 0.5,
    });
    gsap.from(emailDescriptionRef.current, {
      y: 100,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.75,
      delay: 0.6,
    });
    gsap.from(emailButtonRef.current, {
      x: 100,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.6,
      delay: 0.75,
    });

    gsap.from(closeRef.current, { opacity: 0, duration: 0.75, delay: 1 });
  }, [checked]);

  useEffect(() => {
    animateTalkSection();
  }, []);

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
            <div className="close-container" ref={closeRef}>
              {chatCloseButton}
            </div>
            <Grid item xs={12} md={6} className="email-side-container">
              <Box className="email-side-interior">
                <Typography ref={emailTitleRef} variant="h5">
                  Talk to a real person.
                </Typography>
                <Typography ref={emailDescriptionRef} variant="body1">
                  No, really. We are probably sitting at our computers right
                  now, waiting to talk to you. We’re the kind of folks that
                  understand how important time is when it comes to hiring the
                  right talent. Let’s chat!
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className="email-btn email-md"
                  ref={emailButtonRef}
                  fullWidth
                  onClick={() => setChecked(true)}
                  startIcon={
                    <img
                      src={`/images/arrow-left-email-btn.svg`}
                      style={{ marginRight: 'auto' }}
                    />
                  }
                >
                  Email us
                </Button>
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
                <form onSubmit={handleSubmit} ref={formRef}>
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
                      ref={sendButtonRef}
                    >
                      Send
                    </Button>
                  </Grid>
                  <Grid item xs={12} className="em-send-btn-container">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="email-btn email-sm"
                      fullWidth
                      onClick={() => setChecked(true)}
                      startIcon={
                        <img
                          src={`/images/arrow-left-email-btn.svg`}
                          style={{ marginRight: 'auto' }}
                        />
                      }
                    >
                      Email us
                    </Button>
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
