import React from 'react';
import { Dialog, Zoom, Box, Typography, Grid, Button } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { closeChatBtnStyles } from '../chat/chatButton.styles';
import styles from './orgsSupported.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const OrgsSupportDialog = ({ showOrgsModal, onClose }) => {
  const { contentfulGivingBackSection } = useStaticQuery(graphql`
    query ModalContentQuery {
      contentfulGivingBackSection {
        orgsModalCopy {
          orgsModalCopy
        }
        orgsModalLogos {
          file {
            url
          }
        }
      }
    }
  `);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom in={showOrgsModal} ref={ref} {...props} />;
  });

  const theme = useTheme();
  const showMed = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Dialog
      BackdropProps={{
        style: { backgroundColor: 'rgba(255, 255, 255, 0.85)' },
      }}
      open={showOrgsModal}
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
        {showMed && <Typography variant="body1">Close</Typography>}
      </Button>
      <Grid
        container
        className="inner-top"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} className="orgs-copy">
          <Typography variant="body1">
            {contentfulGivingBackSection.orgsModalCopy.orgsModalCopy}
          </Typography>
        </Grid>
        <Box mt={3} className="images-container">
          {contentfulGivingBackSection.orgsModalLogos.map((image) => (
            <div key={image.file.url} className="grid-img-grid">
              <img src={image.file.url} className="grid-img" />
            </div>
          ))}
        </Box>
      </Grid>
    </Dialog>
  );
};

export default OrgsSupportDialog;
