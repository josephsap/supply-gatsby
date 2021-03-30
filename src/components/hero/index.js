import React, { Fragment, useEffect, useRef, useState, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { DragContainer } from '../draggable-box/DragContainer';
import { CustomDragLayer } from '../draggable-box/CustomDragLayer';
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles, {
  backgroundStyles,
  backgroundDotStyles,
  dragStyles,
} from './heroSection.styles';
import Ticker from './ticker';
import ChatComponent from '../chat/chatComponent';

// TODO: adjust cache values once we are
// in production https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-heroku/

gsap.registerPlugin(ScrollTrigger);
const SCROLL_TRIGGER_ID = `heroAnimation`;

const HeroSection = ({ heroSection }) => {
  const heroCopyRef = useRef();
  const [boxPos, setBoxPos] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const theme = useTheme();
  const showMdAndUp = useMediaQuery(theme.breakpoints.up('md'));

  //for animations
  const timeline = useRef(null);
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const starRef = useRef(null);
  const cloverRef = useRef(null);
  const draggableBoxRef = useRef(null);

  const reg = new RegExp(/\s/g, '');
  const headlineSegments = heroSection.headline.split(reg);
  const headlineWords = useRef(headlineSegments.map(() => createRef()));

  useEffect(() => {
    //set up the timeline animations using scroll trigger
    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: SCROLL_TRIGGER_ID,
        start: 'top 70%',
        end: 'bottom bottom',
        trigger: wrapperRef.current,
      },
    });

    //animate the headline words
    timeline.current.staggerTo(
      [...headlineWords.current.map((ref) => ref.current)],
      0.5,
      {
        stagger: 0.02,
        y: 0,
        delay: 2,
        opacity: 1,
        ease: 'expo.out',
        onCompleteAll: () => {
          //add the shown class to the sticker
          setShowBox(true);
        },
      }
    );

    //animate the badges and logo
    timeline.current.staggerTo(
      [badge1Ref.current, badge2Ref.current],
      0.5,
      {
        stagger: 0.05,
        rotate: '0deg',
        x: 0,
        scale: 1,
        y: 0,
        opacity: 1,
        ease: 'back',
      },
      '-=.5'
    );

    timeline.current.to(
      starRef.current,
      {
        duration: 1,
        rotate: '0deg',
        opacity: 1,
        ease: 'expo.out',
      },
      '-=.5'
    );

    timeline.current.to(
      logoRef.current,
      {
        duration: 0.75,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'expo.out',
      },
      '-=.5'
    );

    timeline.current.to(
      cloverRef.current,
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        rotate: '21deg',
        ease: 'expo.out',
      },
      '-=.2'
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

  console.log(showMdAndUp, '()()(**&&&');

  const titleTransform = () => {
    const parts = headlineSegments;

    return (
      <Typography variant="h1">
        {parts.map((part, index) => {
          if (
            part.includes('talent') ||
            part.includes('maker') ||
            part.includes('mindset')
          ) {
            return (
              <span
                className="bogue-font"
                key={index}
                ref={headlineWords.current[index]}
              >
                {part}{' '}
              </span>
            );
          }
          if (part.includes('curation')) {
            return (
              <Fragment key={index}>
                <span className="bogue-font" ref={headlineWords.current[index]}>
                  {part}
                </span>
                <br />
              </Fragment>
            );
          }
          return (
            <Fragment key={index}>
              <span ref={headlineWords.current[index]}>{part}</span>{' '}
            </Fragment>
          );
        })}
      </Typography>
    );
  };

  useEffect(() => {
    const { left } = heroCopyRef.current.getBoundingClientRect();
    const { offsetHeight } = heroCopyRef.current;
    setBoxPos({ top: offsetHeight + 30, left: left + 10 });
  }, [heroCopyRef]);

  return (
    <>
      {showMdAndUp ? <Ticker /> : null}
      <div
        style={{ position: 'relative', overflow: 'hidden' }}
        ref={wrapperRef}
      >
        {boxPos && showMdAndUp && (
          <div css={dragStyles} ref={draggableBoxRef}>
            <DragContainer
              content={documentToReactComponents(
                JSON.parse(heroSection.introCopy.raw)
              )}
              boxPos={boxPos}
              isShown={showBox}
            />
            <CustomDragLayer />
          </div>
        )}
        <Container maxWidth={false} css={styles} id="section0">
          <Container maxWidth="lg" className="side-padding">
            <Grid container css={backgroundStyles}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className="top-images"
              >
                <Grid item xs={12}>
                  <div className="badge-green top-image" ref={badge1Ref}>
                    <img src={`images/rectangle-badge-top.svg`} />
                  </div>
                  <div className="peach  top-image" ref={badge2Ref}>
                    <img src={`images/top-peach-rectangle.svg`} />
                  </div>
                  <div className="star  top-image" ref={starRef}>
                    <img src={`images/star-purple.svg`} />
                  </div>
                  <div className="hero-logo top-image" ref={logoRef}>
                    <img
                      src={`images/supply-badge-logo.svg`}
                      alt="The Supply"
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className="rich-text-section"
                ref={heroCopyRef}
              >
                {titleTransform()}
                {!showMdAndUp && (
                  <div className="mobile-dragbox">
                    <div>
                      {documentToReactComponents(
                        JSON.parse(heroSection.introCopy.raw)
                      )}
                    </div>
                  </div>
                )}
                <span className="clover" ref={cloverRef}></span>
              </Grid>
            </Grid>
          </Container>
          <ChatComponent ref={wrapperRef} />
        </Container>
        <div css={backgroundDotStyles}></div>
      </div>
    </>
  );
};

export default HeroSection;
