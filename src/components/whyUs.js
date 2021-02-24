import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './whyUs.styles';

const WhyUsSection = ({ whyUsSection }) => (
  <Container maxWidth={false} css={styles} className="section-padding">
    <Container maxWidth="lg">
      <Typography variant="h3">{whyUsSection.title}</Typography>
      <Grid container id="section4" className="border-container">
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{
              __html: whyUsSection.description.childMarkdownRemark.html
            }}
          />
          <Typography variant="body1">{whyUsSection.descriptionTwo.descriptionTwo}</Typography>
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default WhyUsSection;