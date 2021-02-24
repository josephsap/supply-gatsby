import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles, { backgroundStyles, backgroundDotStyles } from './heroSection.styles';

const HeroSection = ({ heroSection }) => (
  <Container maxWidth={false} css={styles}>
    <Container maxWidth="lg">
      <Grid container id="section1" css={backgroundStyles}>
        <div css={backgroundDotStyles}></div>
        <Box className="content">
          <Grid item xs={12} className="richTextSection">
            {documentToReactComponents(JSON.parse(heroSection.heroCopyRichText.raw))}
          </Grid>
          <Box>
            <Typography variant="body1" dangerouslySetInnerHTML={{
                __html: heroSection.introCopy.childMarkdownRemark.html
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Container>
  </Container>
);

export default HeroSection;

// https://dev.to/clairecodes/how-to-create-a-polka-dot-background-with-css-23m0