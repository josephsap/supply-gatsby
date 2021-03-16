import { ChatBuilder } from '@papercups-io/chat-builder';
import { Grid } from '@material-ui/core';
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

const ChatContainer = ({ setShowChatModal }) => {
  return (
    <Grid container css={styles}>
      <p onClick={() => setShowChatModal(false)}>CLOSE CHAT</p>
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
        }) => {
          return (
            <Chat
              config={config}
              state={state}
              onClose={onClose}
              onSendMessage={onSendMessage}
              onToggleOpen={onToggleOpen}
              scrollToRef={scrollToRef}
            />
          );
        }}
      </ChatBuilder>
    </Grid>
  );
};

export default ChatContainer;
