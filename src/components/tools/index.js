import React, { useEffect, useRef, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from './tools.styles';
import { pb25, pb4, mt6 } from '../layout/margin-padding-utils.styles';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

gsap.registerPlugin(ScrollTrigger);

const ToolsSection = ({ toolsSection }) => {
  const reg = new RegExp(/\s/g, '');
  const parts = toolsSection.title.split(reg);
  const theme = useTheme();
  const hideMed = useMediaQuery(theme.breakpoints.down('md'));
  const showMed = useMediaQuery(theme.breakpoints.up('lg'));

  const toolsTitleRef = useRef(null);
  const descRef = useRef(null);
  const items = useRef(toolsSection.toolLinkItem.map(() => createRef()));

  useScrollAnimation(descRef, [descRef]);

  items.current.forEach((item) => {
    useScrollAnimation(item, [item]);
  });

  const titleTransform = () => {
    return (
      <>
        {parts.map((part, index) => {
          if (index === 2)
            return (
              <div key={index}>
                <span className="line"></span>
                <div>{part}</div>
              </div>
            );
          return <div key={index}>{part}</div>;
        })}
      </>
    );
  };

  useEffect(() => {
    gsap.from(toolsTitleRef.current, {
      scrollTrigger: {
        trigger: toolsTitleRef.current,
        start: 'top center',
        toggleClass: 'line-animate',
      },
    });
  }, []);

  return (
    <Container maxWidth={false} className="section-padding" id="section5" css={styles}>
      <Container maxWidth="lg" className="side-padding">
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
                variant="h5"
                component="h2"
                className="tools-title"
                css={pb25}
                ref={toolsTitleRef}
              >
                {hideMed && toolsSection.title}
                {showMed && titleTransform()}
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography
                variant="body2"
                ref={descRef}
                className="tools-description"
              >
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
            {toolsSection.toolLinkItem.map((toolItem, index) => (
              <Grid
                item
                xs={12}
                md={5}
                key={toolItem.id}
                className="tool-item-container"
                ref={items.current[index]}
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
