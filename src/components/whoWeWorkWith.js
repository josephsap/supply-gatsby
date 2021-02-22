import React from "react"
import { Typography, Grid } from '@material-ui/core';

const WhoWeWorkWith = ({ contentfulWhoWeWorkWithSection }) => (
  <Grid container id="section2" style={{ border: '1px solid', height: '700px', }}>
    <Grid item xs={12}>
      <Typography variant="p" component="h2">{contentfulWhoWeWorkWithSection.whoWeWorkWithTitle}</Typography>
      {contentfulWhoWeWorkWithSection.talentItem.map(talentItem => (
        <>
          <Typography variant="h1" component="h3">{talentItem.jobCategory}</Typography>
          <Typography>{talentItem.jobTitle}</Typography>
        </>
      ))}
    </Grid>
  </Grid>
);

export default WhoWeWorkWith;
