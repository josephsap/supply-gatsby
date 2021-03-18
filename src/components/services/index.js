import React, { useRef, createRef } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import styles from './services.styles';

const Services = ({ servicesSection }) => {
  const reg = new RegExp(/\s/g, '');
  const parts = servicesSection.title.split(reg);
  

  //scroll trigger animation
  const wrapper = useRef(null);
  const headline = useRef(null);
  const description = useRef(null);
  const items = useRef(servicesSection.serviceItem.map(() => createRef()));

  useScrollAnimation(wrapper, [headline, description]);

  items.current.forEach((item) => {
    useScrollAnimation(item, [item]);
  })

  const titleTransform = () => {
    return (
      <>
        {parts.map((part, index) => {
          if (index === 0) return <div key={index}>{part}</div>;
          if (index === 1)
            return (
              <div key={index} className="line-separator">
                <span>{` \u2014\u2014\u2014 `}</span>
                {part}
              </div>
            );
          if (index === 2)
            return (
              <div key={index} className="line-separator">
                <span>{` \u2014\u2014\u2014 `}</span>
                {part}
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
            <Typography variant="h2" className="hww-title" ref={headline}>
              {titleTransform()}
            </Typography>
            <Typography variant="subtitle1" className="hww-description" ref={description}>
              {servicesSection.description.description}
            </Typography>
          </Grid>
          <Grid container className="items-container">
            {servicesSection.serviceItem.map((item, i) => (
              <Grid item xs={12} md={6} key={item.id} className="service-item" ref={items.current[i]}>
                <img src={item.iconImage.file.url} />
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1" className="service-item-copy">
                  {item.description.description}
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
