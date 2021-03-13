import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

const NetworkSection = ({ networkSection }) => (
  <Container maxWidth={false} className="section-padding">
    <Container maxWidth="lg">
      <Grid
        container
        id="section5"
        className="border-container"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h2">{networkSection.title}</Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: networkSection.description.childMarkdownRemark.html,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default NetworkSection;
