import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './whyUs.styles';
import { pl4, pt4, pb4 } from './layout/margin-padding-utils.styles';

const WhyUsSection = ({ whyUsSection }) => (
  <Container maxWidth={false} css={styles} className="section-padding-bottom">
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className="title-container">
          <Typography variant="h2" className="why-us-title">
            {whyUsSection.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container id="section3" className="border-container top-section">
        <Grid item xs={12} md={6} css={pl4} className="upper-container">
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
  </Container>
);

export default WhyUsSection;
