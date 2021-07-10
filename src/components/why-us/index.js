import React, { useRef, createRef } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import styles from './whyUs.styles';
import PebbleStats from './pebbleStats';
import { pt4, pb4 } from '../layout/margin-padding-utils.styles';
import useScrollAnimation from '../../hooks/use-scroll-animation';

const WhyUsSection = ({ whyUsSection }) => {
  const wrapper = useRef(null);
  const headline = useRef(null);
  const description = useRef(null);
  const introCopy = useRef(null);
  const roldxImg = useRef(null);

  useScrollAnimation(wrapper, [headline, description, introCopy]);
  useScrollAnimation(roldxImg, [roldxImg]);
  console.log(whyUsSection.gifUrl, '*****');
  return (
    <Container maxWidth={false} css={styles} id="section3">
      <Container maxWidth="lg" className="side-padding">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="title-container">
            <Typography
              variant="h5"
              component="h2"
              className="why-us-title"
              ref={headline}
            >
              {whyUsSection.title}
            </Typography>
            <div ref={wrapper}></div>
          </Grid>
        </Grid>
        <Grid container className="border-container top-section">
          <Grid item xs={12} md={6} className="upper-container">
            <div
              ref={description}
              className="why-us-intro-title"
              dangerouslySetInnerHTML={{
                __html: whyUsSection.description.childMarkdownRemark.html,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="intro-copy"
            ref={introCopy}
            css={[pt4, pb4]}
          >
            <Typography variant="body1">
              {whyUsSection.descriptionTwo.descriptionTwo}
            </Typography>
          </Grid>
          <Grid item xs={12} className="second-section">
            <video loop autoPlay={true} muted width="100%">
              <source src={whyUsSection.gifUrl} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      </Container>
      <PebbleStats data={whyUsSection} />
    </Container>
  );
};

export default WhyUsSection;
