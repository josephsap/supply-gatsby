import { useState } from 'react';
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
    <div
      style={{
        height: 640,
        width: 480,
      }}
    >
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
    </div>
  );
};

export default Chat;
