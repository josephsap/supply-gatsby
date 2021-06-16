import {
  customerMsgStyles,
  agentMsgStyles,
  agentPhotoStyles,
  agentPhotoContainer,
} from './chat.styles';
import { format } from 'date-fns';
import { Typography } from '@material-ui/core';

export const CustomerMessage = ({ message }) => {
  const sentAt = format(new Date(message.sent_at), 'Pp');

  return (
    <div css={customerMsgStyles}>
      <Typography variant="caption" className="sent-at">
        {sentAt}
      </Typography>
      <Typography variant="body1">{message.body}</Typography>
    </div>
  );
};

export const AgentMessage = ({ message }) => {
  const { user = {}, sent_at } = message;
  const { display_name, full_name, profile_photo_url } = user;
  // const name = display_name || full_name || 'A';
  const photoUrl = profile_photo_url || null;
  const sentAtAgent = sent_at ? format(new Date(sent_at), 'Pp') : null;

  return (
    <div css={agentMsgStyles}>
      {message.type === 'bot' ? (
        <div className="intro-msg">
          <Typography variant="body1">{message.body}</Typography>
        </div>
      ) : (
        <div css={agentMsgStyles}>
          <div css={agentPhotoContainer}>
            {photoUrl ? (
              <div css={(theme) => agentPhotoStyles(theme, { photoUrl })}></div>
            ) : null}
            {sentAtAgent && (
              <Typography variant="caption">{sentAtAgent}</Typography>
            )}
          </div>

          <div style={{ maxWidth: '80%', lineHeight: 1, marginLeft: 'auto' }}>
            <Typography variant="body1" style={{ textAlign: 'right' }}>
              {message.body}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};
