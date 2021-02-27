import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';

const ToolsSection = ({ toolsSection }) => (
  <Container maxWidth={false} className="section-padding app">
    <Container maxWidth="lg">
      <Grid container id="section7">
        <Typography variant="h3">{toolsSection.title}</Typography>
        <Typography variant="body1">{toolsSection.description.description}</Typography>
        {toolsSection.toolLinkItem.map(toolItem => (
          <Box key={toolItem.id}>
            <Typography variant="h4">{toolItem.title}</Typography>
            <Typography variant="body1">{toolItem.description.description}</Typography>
            <Typography variant="body1">
              <a href={toolItem.link} target="_blank">
                {toolItem.linkText}
              </a>
            </Typography>
          </Box>
        ))}
      </Grid>
    </Container>
  </Container>
);

export default ToolsSection;
