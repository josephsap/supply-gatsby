import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from './tools.styles';
import { pb25, pt45, pb4, mt6 } from '../layout/margin-padding-utils.styles';

const ToolsSection = ({ toolsSection }) => {
  const reg = new RegExp(/\s/g, '');
  const parts = toolsSection.title.split(reg);

  const titleTransform = () => {
    return (
      <>
        {parts.map((part, index) => {
          if (index === 2)
            return (
              <div key={index} className="line-separator">
                <span>{` \u2014\u2014\u2014 `}</span>
                {part}
              </div>
            );
          return <div key={index}>{part}</div>;
        })}
      </>
    );
  };

  return (
    <Container maxWidth={false} className="section-padding" id="section7">
      <Container maxWidth="lg" css={styles} className="side-padding">
        <Grid container>
          <Grid
            container
            justify="center"
            alignItems="center"
            className="tools-header-border"
            css={pb4}
          >
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className="tools-title"
                css={[pb25, pt45]}
              >
                {titleTransform()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="body2" className="tools-description">
                {toolsSection.description.description}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={10}
            css={mt6}
            justify="center"
            alignItems="center"
          >
            {toolsSection.toolLinkItem.map((toolItem) => (
              <Grid
                item
                xs={12}
                md={5}
                key={toolItem.id}
                className="tool-item-container"
              >
                <img src={toolItem.icon.file.url} />
                <Typography variant="h4" className="tool-name">
                  {toolItem.title}
                </Typography>
                <Typography variant="body1">
                  {toolItem.description.description}
                </Typography>
                <Typography variant="body1" className="tool-link">
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
};

export default ToolsSection;
