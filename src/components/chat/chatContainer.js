import React from 'react';
import { ChatBuilder } from '@papercups-io/chat-builder';
import { Dialog, DialogActions, Button, Zoom } from '@material-ui/core';
import Chat from './chat';
import styles from './chatContainer.styles';

const CHAT_ACCOUNT_TOKEN = process.env.CHAT_ACCOUNT_TOKEN;

const config = {
  accountId: CHAT_ACCOUNT_TOKEN,
  greeting: 'Whaddup wit it?',
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

// https://codepen.io/ig_design/pen/BajVZre

const ChatContainer = ({ showChatModal, onClose }) => {
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
      css={styles}
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
