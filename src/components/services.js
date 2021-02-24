import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './services.styles';

const Services = ({ servicesSection }) => (
  <Container maxWidth={false} css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section3" className="services-container">
        <Grid item xs={12}>
          <Typography variant="h3" dangerouslySetInnerHTML={{
              __html: servicesSection.title.childMarkdownRemark.html
            }}
          />
          <Typography variant="body1">{servicesSection.description.description}</Typography>
        </Grid>
        <Grid container className="items-container">
          {servicesSection.serviceItem.map(item => (
            <Grid item xs={12} md={6} key={item.id} className="service-item">
              <img src={item.iconImage.file.url} />
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body1" className="service-item-copy">{item.description.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default Services;