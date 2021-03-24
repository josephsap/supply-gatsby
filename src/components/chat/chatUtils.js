import {
  customerMsgStyles,
  agentMsgStyles,
  agentPhotoStyles,
} from './chat.styles';
import { Typography } from '@material-ui/core';

export const CustomerMessage = ({ message }) => (
  <Typography variant="body1" css={customerMsgStyles}>
    {message.body}
  </Typography>
);

export const AgentMessage = ({ message }) => {
  const { user = {} } = message;
  const { display_name, full_name, profile_photo_url } = user;
  const name = display_name || full_name || 'A';
  const photoUrl = profile_photo_url || null;
  return (
    <div css={agentMsgStyles}>
      {photoUrl ? (
        <div css={(theme) => agentPhotoStyles(theme, { photoUrl })}></div>
      ) : (
        <Typography variant="body1">
          {name.slice(0, 1).toUpperCase()}
        </Typography>
      )}
      <Typography variant="body1" style={{ maxWidth: '80%' }}>
        {message.body}
      </Typography>
    </div>
  );
};
