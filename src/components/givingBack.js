import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './givingBack.styles';
import { pl4, p4 } from './layout/margin-padding-utils.styles';

const GivingBackSection = ({ givingBackSection }) => (
  <Container maxWidth={false} className="section-padding">
    <Container maxWidth="lg">
      <Grid
        container
        id="section4"
        className="border-container"
        css={[styles, p4]}
      >
        <Grid item xs={12} md={5}>
          <Typography variant="h2">
            {givingBackSection.leftSideTitle}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: givingBackSection.leftSideCopy.childMarkdownRemark.html,
            }}
          />
          <Typography variant="body1">
            {givingBackSection.orgsModalLinkText}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} css={pl4} className="pushing-diversity">
          <Box className="badges-container">
            {givingBackSection.badges.map((badge) => (
              <img key={badge.id} src={badge.file.url} />
            ))}
          </Box>
          <Box className="diversity-header-section">
            <img src={`images/arrow.svg`} />
            <Typography variant="h2">
              {givingBackSection.rightSideTitle}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: givingBackSection.rightSideCopy.childMarkdownRemark.html,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default GivingBackSection;
