import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './services.styles';

const Services = ({ servicesSection }) => {
  const titleTransform = servicesSection.title.replace(
    / /g,
    '  \u2014\u2014\u2014\u2014  '
  );

  return (
    <Container maxWidth={false} css={styles} className="section-padding">
      <Container maxWidth="lg">
        <Grid
          container
          id="section2"
          className="border-container"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={10} className="services-section-top">
            <Typography variant="h3">{titleTransform}</Typography>
            <Typography variant="subtitle1">
              {servicesSection.description.description}
            </Typography>
          </Grid>
          <Grid container className="items-container">
            {servicesSection.serviceItem.map((item) => (
              <Grid item xs={12} md={6} key={item.id} className="service-item">
                <img src={item.iconImage.file.url} />
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1" className="service-item-copy">
                  {item.description.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Services;
