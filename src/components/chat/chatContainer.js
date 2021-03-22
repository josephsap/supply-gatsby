import React, { useState } from 'react';
import { ChatBuilder } from '@papercups-io/chat-builder';
import { Dialog, Zoom, Tab, Tabs, Box } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import Chat from './chat';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const ChatContainer = ({ showChatModal, onClose }) => {
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
      {/* <Button onClick={onClose} color="primary" variant="contained">
          CLOSE CHAT
        </Button> */}

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
