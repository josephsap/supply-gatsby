import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { networkItemStyles } from './network.styles';

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
