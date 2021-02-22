import React from "react"
import { Typography, Grid, Box } from '@material-ui/core';

const Services = ({ contentfulServicesSection }) => (
  <Grid container id="section3" style={{ border: '1px solid', height: '700px', }}>
    <Grid item xs={12}>
      <Typography variant="h3">{contentfulServicesSection.title}</Typography>
    </Grid>
  </Grid>
);

export default Services;