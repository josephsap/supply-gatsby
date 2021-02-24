import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './services.styles';

const Services = ({ servicesSection }) => (
  <Container maxWidth={false} css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section3">
        <Grid item xs={12}>
          <Typography variant="h3">{servicesSection.title}</Typography>
          <Typography variant="body1">{servicesSection.description.description}</Typography>
          <Box mt={3}>
            {servicesSection.serviceItem.map(item => (
              <Box key={item.id}>
                <img src={item.iconImage.file.url} />
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">{item.description.description}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default Services;