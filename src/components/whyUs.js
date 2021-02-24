import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './whyUs.styles';

const WhyUsSection = ({ whyUsSection }) => (
  <Container maxWidth={false} css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section4">
        <Grid item xs={12}>
          <Typography variant="h3">{whyUsSection.title}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{
              __html: whyUsSection.description.childMarkdownRemark.html
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default WhyUsSection;