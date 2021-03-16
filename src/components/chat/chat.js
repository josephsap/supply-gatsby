import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CustomerMessage, AgentMessage } from './chatUtils';

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
  const { messages = [], customerId } = state;

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
      <Grid item xs={12} md={6} style={{ border: '3px solid aqua' }}>
        <div>
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

          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  value={message}
                  placeholder="Start typing..."
                  onChange={handleChangeMessage}
                />
              </form>
            </div>
          </div>
        </div>

        <div>
          <button onClick={(e) => handleSendMessage(e)}>Send</button>
        </div>
      </Grid>

      {/* TODO: put this copy in the cms */}
      <Grid item xs={12} md={6} style={{ border: '3px solid green' }}>
        <Typography variant="h5">Talk to a real person.</Typography>
        <Typography variant="body1">
          No, really. We are probably sitting at our computers right now,
          waiting to talk to you. We’re the kind of folks that understand how
          important time is when it comes to hiring the right talent. Let’s
          chat!
        </Typography>
      </Grid>
    </>
  );
};

export default Chat;
