import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './whyUs.styles';
import PebbleStats from './pebbleStats';
import { pt4, pb4 } from '../layout/margin-padding-utils.styles';

const WhyUsSection = ({ whyUsSection }) => (
  <>
    <Container maxWidth={false} css={styles} id="section3">
      <Container maxWidth="lg" className="side-padding">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="title-container">
            <Typography variant="h5" component="h2" className="why-us-title">
              {whyUsSection.title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className="border-container top-section">
          <Grid item xs={12} md={6} className="upper-container">
            <div
              className="why-us-intro-title"
              dangerouslySetInnerHTML={{
                __html: whyUsSection.description.childMarkdownRemark.html,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} className="intro-copy" css={[pt4, pb4]}>
            <Typography variant="body1">
              {whyUsSection.descriptionTwo.descriptionTwo}
            </Typography>
          </Grid>
          <Grid item xs={12} className="second-section">
            <img src={whyUsSection.mainImage.file.url} />
          </Grid>
        </Grid>
      </Container>
      <PebbleStats />
    </Container>
  </>
);

export default WhyUsSection;
