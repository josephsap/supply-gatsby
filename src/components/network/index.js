import React, { useRef, useEffect, createRef } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import styles, { networkItemStyles } from './network.styles';
import theme from '../../theme';

import SvgNetworkInner from '../../assets/svg/network-inner.inline.svg';
import SvgNetworkOuter from '../../assets/svg/network-outer.inline.svg';
import IconStar from '../../assets/svg/icon-star.inline.svg';

gsap.registerPlugin(ScrollTrigger);
const SCROLL_TRIGGER_ID = `networkAnimation`;
const NUM_STARS = 5; //background stars

const NetworkSection = ({ networkSection }) => {
  const stars = Array.apply(null, Array(NUM_STARS));

  //for animations
  const timeline = useRef(null);
  const wrapper = useRef(null);
  const innerRing = useRef(null);
  const outerRing = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const networkItems = useRef(
    networkSection.networkAttributeItem.map(() => createRef())
  );
  const networkItemLines = useRef(
    networkSection.networkAttributeItem.map(() => createRef())
  );
  const networkItemHeaders = useRef(
    networkSection.networkAttributeItem.map(() => createRef())
  );
  const backgroundStars = useRef(stars.map(() => createRef()));

  useScrollAnimation(titleRef, [titleRef, descRef]);

  useEffect(() => {
    //set up the timeline animations using scroll trigger
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: SCROLL_TRIGGER_ID,
        start: 'top 50%',
        end: 'bottom bottom',
        trigger: wrapper.current,
        invalidateOnRefresh: true,
      },
    });

    //animate the rings
    timeline.current.fromTo(
      innerRing.current,
      {
        scale: 0,
        z: 0,
        yPercent: -50,
        xPercent: -50,
        rotate: -20,
      },
      {
        delay: 1,
        duration: 0.75,
        scale: 1,
        z: 0,
        yPercent: -50,
        xPercent: -50,
        rotate: 0,
        ease: 'back.out',
      }
    );

    timeline.current.fromTo(
      outerRing.current,
      {
        scale: 0,
        z: 0,
        yPercent: -50,
        xPercent: -50,
        rotate: 20,
      },
      {
        duration: 0.5,
        scale: 1,
        z: 0,
        yPercent: -50,
        xPercent: -50,
        rotate: 0,
        ease: 'back.out',
      },
      '-=.4'
    );

    timeline.current.staggerTo(
      [
        ...networkItems.current.map((ref) => ref.current),
        ...backgroundStars.current.map((ref) => ref.current),
      ],
      0.5,
      {
        stagger: 0.02,
        y: '-50%',
        x: '-50%',
        opacity: 1,
        ease: 'back.out',
      },
      '-=.4'
    );

    timeline.current.staggerTo(
      [...networkItemLines.current.map((ref) => ref.current)],
      0.5,
      {
        stagger: 0.1,
        scale: 1,
        x: '-50%',
        ease: 'expo.out',
      },
      '-=.4'
    );

    timeline.current.staggerTo(
      [...networkItemHeaders.current.map((ref) => ref.current)],
      0.5,
      {
        stagger: 0.1,
        scale: 1,
        ease: 'back.out',
      },
      '-=.4'
    );

    return () => {
      if (!timeline.current) return;
      timeline.current.kill();
      const scrollTriggerRef = ScrollTrigger.getById(SCROLL_TRIGGER_ID);
      if (scrollTriggerRef) {
        scrollTriggerRef.kill(true);
      }
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      className="section-padding"
      css={styles}
      id="section5"
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid
          container
          className="border-container network-container-top"
          justify="center"
          alignItems="center"
          ref={wrapper}
        >
          <Grid item xs={12} md={6} className="network-title">
            <Typography variant="h5" component="h2" ref={titleRef}>
              {networkSection.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} className="network-desc">
            <Typography variant="body1" ref={descRef}>
              {networkSection.description.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className="network-container">
              <div
                ref={innerRing}
                className="network-inner network-ring-container"
              >
                <SvgNetworkInner />
              </div>
              <div
                ref={outerRing}
                className="network-outer network-ring-container"
              >
                <SvgNetworkOuter />
              </div>

              <div className="network-items-container">
                {networkSection.networkAttributeItem.map((item, i) => {
                  const color =
                    i === 0
                      ? theme.palette.supply.orange.main
                      : i === 1
                      ? theme.palette.supply.seaGreen.main
                      : theme.palette.supply.cobalt.main;

                  return (
                    <div
                      className="network-item"
                      key={`network-item-${i}`}
                      css={networkItemStyles(color)}
                      ref={networkItems.current[i]}
                    >
                      <div className="network-item-inner-wrapper">
                        <span
                          className="line"
                          ref={networkItemLines.current[i]}
                        ></span>
                        <header ref={networkItemHeaders.current[i]}>
                          <Typography variant="h6">{item.title}</Typography>
                        </header>

                        <div className="item-description">
                          <Typography variant="caption">
                            {item.description.description}
                          </Typography>
                        </div>
                        <div className="svg-container">
                          <IconStar />
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="background-svg-container">
                  {stars.map((star, i) => {
                    return (
                      <div
                        className="svg-container"
                        key={`star-${i}`}
                        ref={backgroundStars.current[i]}
                      >
                        <IconStar />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* {networkSection.networkAttributeItem.map((item) => (
            <Box mt={3} key={item.id}>
              <div css={networkItemStyles(item.backgroundRectangle.file.url)}>
                <Typography variant="h6">{item.title}</Typography>
              </div>
              <Typography variant="caption">
                {item.description.description}
              </Typography>
            </Box>
          ))} */}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default NetworkSection;
