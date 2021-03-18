import React, { Fragment, useEffect, useRef, useState, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { DragContainer } from '../draggable-box/DragContainer';
import { CustomDragLayer } from '../draggable-box/CustomDragLayer';
import { Container, Grid, Typography } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles, {
  backgroundStyles,
  backgroundDotStyles,
  dragStyles,
} from './heroSection.styles';

// TODO: adjust cache values once we are
// in production https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-heroku/

gsap.registerPlugin(ScrollTrigger);
const SCROLL_TRIGGER_ID = `heroAnimation`;

const HeroSection = ({ heroSection }) => {
  const heroCopyRef = useRef();
  const [boxPos, setBoxPos] = useState(null);

  //for animations
  const timeline = useRef(null); 
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const starRef = useRef(null);
  const cloverRef = useRef(null);
  const chatboxRef = useRef(null);
  const arrowRef = useRef(null);
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
        onEnter: () => {
        }
      }
    });

    //animate the headline words
    timeline.current.staggerTo([...headlineWords.current.map((ref) => ref.current)], .5, {
      stagger: .02,
      y: 0,
      delay: 2,
      opacity: 1,
      ease: 'expo.out'
    });

    //animate the clip path of the draggable box
    let dragboxClipPath = { current: 100 };

    timeline.current.to(dragboxClipPath, .5, {
      current: 0,
      ease: 'expo.out',
      onStart: () => {
        gsap.set(draggableBoxRef.current, { opacity: 1 });
      },
      onUpdate: () => {
        const box = draggableBoxRef.current?.querySelector('.drag-box'); 
        gsap.set(box, { 'clip-path': `inset(0 ${dragboxClipPath.current}% 0 0)`});
      }
    }, '-=.5');

    //animate the badges and logo
    timeline.current.staggerTo([badge1Ref.current, badge2Ref.current], .5, {
      stagger: .1,
      rotate: '0deg',
      x: 0,
      scale: 1,
      y: 0,
      opacity: 1,
      ease: 'back'
    }, '-=.5');

    timeline.current.to(starRef.current, {
      duration: 1,
      rotate: '0deg',
      opacity: 1,
      ease: 'expo.out'
    }, '-=.5');

    timeline.current.to(logoRef.current, {
      duration: .5,
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      ease: 'expo.out'
    }, '-=.5');

    //animate the chatbox
    timeline.current.to(chatboxRef.current, {
      duration: .5,
      y: 0,
      ease: 'back'
    });

    timeline.current.to(cloverRef.current, {
      duration: .5,
      y: 0,
      opacity: 1,
      rotate: '21deg',
      ease: 'expo.out'
    }, '-=.2');

    //animate clip path of the squiggly arrow
    let arrowClipPath = { current: 100 };
    timeline.current.to(arrowClipPath, .5, {
      current: 0,
      ease: 'expo.out',
      onUpdate: () => {
        gsap.set(arrowRef.current, { 'clip-path': `inset(0 0 ${arrowClipPath.current}% 0)`});
      }
    }, '-=.2');

    timeline.current.to(arrowClipPath, .5, {
      current: 100,
      ease: 'expo.out',
      onUpdate: () => {
        gsap.set(arrowRef.current, { 'clip-path': `inset(${arrowClipPath.current}% 0 0% 0)`});
      }
    }, '+=.25');
    

    return(() => {
      if (!timeline.current) return;
      timeline.current.kill();
      const scrollTriggerRef = ScrollTrigger.getById(SCROLL_TRIGGER_ID);
      if (scrollTriggerRef) {
        scrollTriggerRef.kill(true);
      }
    })
  }, [])
  
  

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
              <span className="bogue-font" key={index} ref={headlineWords.current[index]}>
                {part}{' '}
              </span>
            );
          }
          if (part.includes('curation')) {
            return (
              <Fragment key={index}>
                <span className="bogue-font" ref={headlineWords.current[index]}>{part}</span>
                <br />
              </Fragment>
            );
          }
          return <Fragment key={index}><span ref={headlineWords.current[index]}>{part}</span> </Fragment>;
        })}
      </Typography>
    );
  };

  useEffect(() => {
    const { left } = heroCopyRef.current.getBoundingClientRect();
    const { offsetHeight } = heroCopyRef.current;
    setBoxPos({ top: offsetHeight * 1.75, left: left + 10 });
  }, [heroCopyRef]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} ref={wrapperRef}>
      {boxPos && (
        <div css={dragStyles} ref={draggableBoxRef}>
          <DragContainer
            boxClassName={'drag-box'}
            content={documentToReactComponents(
              JSON.parse(heroSection.introCopy.raw)
            )}
            boxPos={boxPos}
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
                  <img src={`images/top-peach-rectangle.svg`}  />
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
            <Grid item xs={12} className="rich-text-section" ref={heroCopyRef}>
              {titleTransform()}
            </Grid>
          </Grid>
        </Container>
        <div className="chatbox-container" ref={chatboxRef}>
          <div className="squiggly-arrow" ref={arrowRef}><span></span></div>
          <span className="clover" ref={cloverRef}></span>
          <a href="#" className="chatbox">
            <Typography className="chatbox-cta" variant="subtitle1">Talk to <em>a real person</em></Typography>
          </a>
        </div>
      </Container>
      <div css={backgroundDotStyles}></div>
    </div>
  );
};

export default HeroSection;
