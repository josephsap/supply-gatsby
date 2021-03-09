export const CustomerMessage = ({ message }) => {
  return (
    <div>
      <div style={{ maxWidth: '80%' }}>{message.body}</div>
    </div>
  );
};

export const AgentMessage = ({ message }) => {
  const { user = {} } = message;
  const { display_name, full_name, profile_photo_url } = user;
  const name = display_name || full_name || 'A';
  const photoUrl = profile_photo_url || null;

  return (
    <div>
      {photoUrl && photoUrl.length ? (
        <div
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${photoUrl})`,
          }}
        ></div>
      ) : (
        <div>{name.slice(0, 1).toUpperCase()}</div>
      )}
      <div style={{ maxWidth: '80%' }}>{message.body}</div>
    </div>
  );
};
