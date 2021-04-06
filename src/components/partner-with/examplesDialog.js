import React from 'react';
import { Dialog, Zoom, Box, Typography, Grid, Button } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './examplesDialog.styles';
import { closeChatBtnStyles } from '../chat/chatButton.styles';

const ExamplesDialog = ({ showWorkModal, onClose }) => {
  const { contentfulWorkExamplesModal } = useStaticQuery(graphql`
    query OrgsContentQuery {
      contentfulWorkExamplesModal {
        title
        description {
          description
        }
        images {
          file {
            url
          }
        }
      }
    }
  `);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Zoom
        in={showWorkModal}
        ref={ref}
        style={{ transitionDelay: '350ms', transitionDuration: '350ms' }}
        {...props}
      />
    );
  });

  return (
    <Dialog
      BackdropProps={{
        style: { backgroundColor: 'rgba(255, 255, 255, 0.85)' },
      }}
      open={showWorkModal}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="lg"
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      css={styles}
    >
      <Button
        css={closeChatBtnStyles}
        onClick={onClose}
        color="primary"
        size="small"
        variant="text"
        endIcon={<img src="/images/closechaticon.svg" />}
      >
        <Typography variant="body1">Close</Typography>
      </Button>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className="inner-top"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" className="modal-title">
            {contentfulWorkExamplesModal.title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            {contentfulWorkExamplesModal.description.description}
          </Typography>
        </Grid>
      </Grid>
      <Box mt={3} className="images-container">
        {contentfulWorkExamplesModal.images.map((image) => (
          <div key={image.file.url} className="grid-img-grid">
            <img src={image.file.url} className="grid-img" />
          </div>
        ))}
      </Box>
    </Dialog>
  );
};

export default ExamplesDialog;