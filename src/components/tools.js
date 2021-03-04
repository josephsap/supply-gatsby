import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import styles from './tools.styles';

const ToolsSection = ({ toolsSection }) => (
  <Container maxWidth={false} className="section-padding app">
    <Container maxWidth="lg" css={styles}>
      <Grid container id="section7">
        <Grid
          container
          justify="center"
          alignItems="center"
          className="tools-header-border"
        >
          <Grid item xs={12}>
            <Typography variant="h2">{toolsSection.title}</Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body1">
              {toolsSection.description.description}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          {toolsSection.toolLinkItem.map((toolItem) => (
            <Grid item xs={12} md={6} key={toolItem.id}>
              <img src={toolItem.icon.file.url} />
              <Typography variant="h4">{toolItem.title}</Typography>
              <Typography variant="body1">
                {toolItem.description.description}
              </Typography>
              <Typography variant="body1">
                <a href={toolItem.link} target="_blank">
                  {toolItem.linkText}
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default ToolsSection;
