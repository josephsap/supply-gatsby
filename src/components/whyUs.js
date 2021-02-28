import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './whyUs.styles';
import { pl4, pr4, pt4, pb4 } from './layout/margin-padding-utils.styles';

const WhyUsSection = ({ whyUsSection }) => (
  <Container maxWidth={false} css={styles} className="section-padding">
    <Container maxWidth="lg">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h3" className="why-us-title">{whyUsSection.title}</Typography>
        </Grid>
      </Grid>
      <Grid container id="section3" className="border-container top-section">
        <Grid item xs={12} md={6} css={pl4}>
          <div className="why-us-intro-title" dangerouslySetInnerHTML={{
              __html: whyUsSection.description.childMarkdownRemark.html
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} className="intro-copy" css={[pl4, pr4, pt4, pb4]}>
          <Typography variant="body1">{whyUsSection.descriptionTwo.descriptionTwo}</Typography>
        </Grid>
        <Grid item xs={12} className="second-section">
          What goes here?
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default WhyUsSection;