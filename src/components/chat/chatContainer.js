import React, { useState } from 'react';
import { ChatBuilder } from '@papercups-io/chat-builder';
import { Dialog, Zoom, Button, Typography } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import Chat from './chat';
import { closeChatBtnStyles } from './chatButton.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const CHAT_ACCOUNT_TOKEN = process.env.GATSBY_CHAT_ACCOUNT_TOKEN;

// https://codepen.io/ig_design/pen/BajVZre

const ChatContainer = ({ showChatModal, onClose }) => {
  const { contentfulChat } = useStaticQuery(graphql`
    query ChatCopyQuery {
      contentfulChat {
        introText
      }
    }
  `);

  const theme = useTheme();
  const showMed = useMediaQuery(theme.breakpoints.up('md'));

  const { introText } = contentfulChat;

  const config = {
    accountId: CHAT_ACCOUNT_TOKEN,
    greeting: introText,
    // customer: {
    //   name: 'Demo User',
    //   // Ad hoc metadata
    //   metadata: {
    //     page: 'github',
    //   },
    // },
    // NB: we override these values during development if we want to test against our local server
    // baseUrl: 'http://localhost:4000',
    // For the demo, we just point at our demo staging environment
    // baseUrl: 'baseUrl: http://127.0.0.1:8000',
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Zoom
        in={showChatModal}
        ref={ref}
        style={{ transitionDelay: '350ms', transitionDuration: '350ms' }}
        // timeout={{ enter: 1400, exit: 1400 }}
        {...props}
      />
    );
  });

  return (
    <Dialog
      BackdropProps={{
        style: { backgroundColor: 'rgba(255, 255, 255, 0.85)' },
      }}
      open={showChatModal}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="lg"
      onClose={onClose}
      aria-labelledby="chat-dialog-title"
      aria-describedby="chat-dialog-description"
    >
      <Button
        css={closeChatBtnStyles}
        onClick={onClose}
        color="primary"
        size="small"
        variant="text"
        endIcon={<img src="images/closechaticon.svg" />}
      >
        {showMed && <Typography variant="body1">Close</Typography>}
      </Button>

      <ChatBuilder
        config={config}
        onChatLoaded={() => console.log('Chat loaded!')}
        onChatClosed={() => console.log('Chat closed!')}
        onChatOpened={() => console.log('Chat opened!')}
        onMessageReceived={(message) =>
          console.log('Message received!', message)
        }
        onMessageSent={(message) => console.log('Message sent!', message)}
      >
        {({
          config,
          state,
          onClose,
          onSendMessage,
          onToggleOpen,
          scrollToRef,
          onChatLoaded,
        }) => {
          return (
            <Chat
              config={config}
              state={state}
              onClose={onClose}
              onSendMessage={onSendMessage}
              onToggleOpen={onToggleOpen}
              scrollToRef={scrollToRef}
              onChatLoaded={onChatLoaded}
            />
          );
        }}
      </ChatBuilder>
    </Dialog>
  );
};

export default ChatContainer;
