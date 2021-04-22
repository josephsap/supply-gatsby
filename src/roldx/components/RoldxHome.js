import React from 'react';
import RoldxEmailForm from './RoldxForm';
import {
  Container,
  Grid,
  Typography,
  Textfield,
  Button,
  Box,
} from '@material-ui/core';
import styles from './RoldxHome.styles';
import { backgroundDotStyles } from '../../components/hero/heroSection.styles';

const RoldxHome = ({ roldxData, footerLogo }) => {
  const { title, description, productImage, belowImageText } = roldxData;

  return (
    <Container maxWidth={false} css={styles} className="section-padding">
      <Container maxWidth="lg" className="side-padding">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="top-container"
        >
          <div css={backgroundDotStyles} className="bg-dots"></div>
          <Grid item xs={12} md={9}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body1" className="desc">
              {description.description}
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} className="green-bg">
            <img src={productImage.file.url} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {belowImageText.belowImageText}
            </Typography>
            <Box mt={3} mb={3}>
              <RoldxEmailForm />
            </Box>
            <Box mt={3} className="footer-logo">
              <img src={footerLogo.file.url} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default RoldxHome;
