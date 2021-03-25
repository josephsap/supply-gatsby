import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import styles from './givingBack.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const GivingBackSection = ({ givingBackSection }) => {
  const theme = useTheme();
  const hideSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container maxWidth={false} className="section-padding" id="section4">
      <Container maxWidth="lg" className="side-padding">
        <Grid container css={styles} className="border-container">
          <Grid item xs={12} md={6} className="giving-back-section">
            <Typography variant="h5" component="h2">
              {givingBackSection.leftSideTitle}
            </Typography>
            <Typography variant="body1">
              {givingBackSection.leftSideCopy.leftSideCopy}
            </Typography>
            <Typography variant="body1">
              {givingBackSection.orgsModalLinkText}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="pushing-diversity">
            <Box className="badges-container">
              {givingBackSection.badges.map((badge) => (
                <img key={badge.id} src={badge.file.url} />
              ))}
            </Box>
            <Box className="diversity-header-section">
              <Typography variant="h5" component="h2" className="title-right">
                {hideSm && <img src={`images/arrow.svg`} />}
                {givingBackSection.rightSideTitle}
              </Typography>
            </Box>
            <Typography variant="body1" className="copy-right">
              {givingBackSection.rightSideCopy.rightSideCopy}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default GivingBackSection;
