import React from 'react';
import DraggableContainer from './draggableBox/draggableContainer';
import { Container, Grid, Box } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles, {
  backgroundStyles,
  backgroundDotStyles,
} from './heroSection.styles';

const HeroSection = ({ heroSection }) => (
  <>
    <DraggableContainer
      content={documentToReactComponents(JSON.parse(heroSection.introCopy.raw))}
    />
    <Container maxWidth={false} css={styles} className="section-padding app">
      <img
        src={`images/supply-badge-logo.svg`}
        alt="The Supply"
        className="hero-logo"
      />
      <Container maxWidth="lg">
        <Grid container id="section0" css={backgroundStyles}>
          <div css={backgroundDotStyles}></div>
          <Box className="content">
            <Grid item xs={12} className="richTextSection">
              {documentToReactComponents(
                JSON.parse(heroSection.heroCopyRichText.raw)
              )}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Container>
  </>
);

export default HeroSection;
