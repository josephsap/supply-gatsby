import React from "react"
import { Typography, Grid, Box } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const HeroSection = ({ contentfulHeroSection }) => (
  <Grid container id="section1" style={{ border: '1px solid', height: '700px', }}>
    <Grid item xs={12} className="richTextSection">
      {documentToReactComponents(JSON.parse(contentfulHeroSection.heroCopyRichText.raw))}
    </Grid>
    <Box>
      <Typography variant="body1" dangerouslySetInnerHTML={{
          __html: contentfulHeroSection.introCopy.childMarkdownRemark.html
        }}
      />
    </Box>
  </Grid>
);

export default HeroSection;

// https://dev.to/clairecodes/how-to-create-a-polka-dot-background-with-css-23m0