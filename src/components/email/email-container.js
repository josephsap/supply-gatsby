import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';
import EmailForm from './email-form';
import { chatBaseStyles } from '../chat/chat.styles';
import { emailFormStyles } from './email-form.styles';

const EmailContainer = ({ setChecked }) => {
  return (
    <Grid container css={[chatBaseStyles, emailFormStyles]}>
      {/* TODO: put this copy in the cms */}

      <Grid item xs={12} md={6} className="email-side-container">
        <EmailForm setChecked={setChecked} />
      </Grid>
    </Grid>
  );
};

export default EmailContainer;
