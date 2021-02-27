import React from "react"
import { Container, Typography, Grid, Box } from '@material-ui/core';

const GivingBackSection = ({ givingBackSection }) => (
  <Container maxWidth={false} className="section-padding">
    <Container maxWidth="lg">
      <Grid container id="section4" className="border-container">
        <Grid item xs={12}>
          <Typography variant="h3">{givingBackSection.leftSideTitle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{
              __html: givingBackSection.leftSideCopy.childMarkdownRemark.html
            }}
          />
          <Typography variant="body1">{givingBackSection.orgsModalLinkText}</Typography>
          <Typography variant="h3">{givingBackSection.rightSideTitle}</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{
              __html: givingBackSection.rightSideCopy.childMarkdownRemark.html
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </Container>
)

export default GivingBackSection;