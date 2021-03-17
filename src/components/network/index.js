import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles, { networkItemStyles } from './network.styles';

const NetworkSection = ({ networkSection }) => (
  <Container
    maxWidth={false}
    className="section-padding"
    css={styles}
    id="section5"
  >
    <Container maxWidth="lg" className="side-padding">
      <Grid
        container
        className="border-container"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} className="network-title">
          <Typography variant="h2">{networkSection.title}</Typography>
        </Grid>
        <Grid item xs={12} md={5} className="network-desc">
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: networkSection.description.childMarkdownRemark.html,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {networkSection.networkAttributeItem.map((item) => (
            <Box mt={3} key={item.id}>
              <div css={networkItemStyles(item.backgroundRectangle.file.url)}>
                <Typography variant="h6">{item.title}</Typography>
              </div>
              <Typography variant="caption">
                {item.description.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default NetworkSection;