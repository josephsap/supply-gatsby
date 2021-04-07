import React, { useEffect, useRef, createRef } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import styles from './services.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

gsap.registerPlugin(ScrollTrigger);

const Services = ({ servicesSection }) => {
  const reg = new RegExp(/\s/g, '');
  const parts = servicesSection.title.split(reg);
  const theme = useTheme();
  const hideMed = useMediaQuery(theme.breakpoints.down('md'));
  const showMed = useMediaQuery(theme.breakpoints.up('lg'));

  //scroll trigger animation
  const wrapper = useRef(null);
  const description = useRef(null);
  const titleRef = useRef(null);
  const items = useRef(servicesSection.serviceItem.map(() => createRef()));

  useScrollAnimation(wrapper, [description]);

  items.current.forEach((item) => {
    useScrollAnimation(item, [item]);
  });

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top center',
        toggleClass: 'line-animate',
      },
    });
  }, []);

  const titleTransform = () => {
    return (
      <>
        {parts.map((part, index) => {
          if (index === 0) return <div key={index}>{part}</div>;
          if (index === 1)
            return (
              <div key={index}>
                <span className="line"></span>
                <div>{part}</div>
              </div>
            );
          if (index === 2)
            return (
              <div key={index}>
                <span className="line"></span>
                <div>{part}</div>
              </div>
            );
        })}
      </>
    );
  };

  return (
    <Container
      maxWidth={false}
      css={styles}
      className="section-padding"
      id="section2"
      ref={wrapper}
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid
          container
          className="border-container"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={10} className="services-section-top">
            <Typography
              variant="h5"
              component="h2"
              className="hww-title"
              ref={titleRef}
            >
              {hideMed && servicesSection.title}
              {showMed && titleTransform()}
            </Typography>
            <Typography
              variant="subtitle1"
              className="hww-description"
              ref={description}
            >
              {servicesSection.description.description}
            </Typography>
          </Grid>
          <Grid container className="items-container">
            {servicesSection.serviceItem.map((item, i) => (
              <Grid
                item
                xs={12}
                md={6}
                key={item.id}
                className="service-item"
                ref={items.current[i]}
              >
                <img src={item.iconImage.file.url} />
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1" className="service-item-copy">
                  {item.description.description}
                  {item.link && item.linkText && (
                    <a
                      href={item.link}
                      style={{ marginLeft: '0.5rem', color: '#162C29' }}
                      target="_blank"
                      rel="noopener"
                    >
                      {item.linkText}
                    </a>
                  )}
                  .
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Services;
