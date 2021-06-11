import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles, { baseStyles, drawStyles } from './givingBack.styles';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import OrgsSupportedDialog from './orgsSupported';

gsap.registerPlugin(ScrollTrigger);

const GivingBackSection = ({ givingBackSection }) => {
  const theme = useTheme();
  const hideSm = useMediaQuery(theme.breakpoints.up('sm'));
  const leftSide = useRef(null);
  const rightSide = useRef(null);
  const drawRef = useRef(null);
  const culturalRef = useRef(null);
  const diversityRef = useRef(null);

  useScrollAnimation(leftSide, [leftSide, rightSide]);

  useEffect(() => {
    function handleOnEnter() {
      gsap.from(diversityRef.current, {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: 'back',
      });
      gsap.from(culturalRef.current, {
        scale: 0.3,
        rotation: 151,
        duration: 2,
        ease: 'elastic',
      });
    }
    gsap.from(drawRef.current, {
      scrollTrigger: {
        trigger: drawRef.current,
        start: 'top 60%',
        end: 'bottom top',
        toggleClass: 'draw',
        onEnter: handleOnEnter,
      },
    });
  }, []);

  const [showOrgsModal, setShowOrgsModal] = useState(false);

  const handleOpen = () => {
    setShowOrgsModal(true);
  };

  const handleClose = () => {
    setShowOrgsModal(false);
  };

  return (
    <Container
      maxWidth={false}
      className="section-padding"
      style={{ backgroundColor: '#E7C7AC' }}
    >
      <Container maxWidth="lg" className="side-padding">
        <div css={styles}>
          <Grid container ref={drawRef} css={[baseStyles, drawStyles]}>
            <Grid
              item
              xs={12}
              md={6}
              className="giving-back-section"
              ref={leftSide}
            >
              <Typography variant="h5" component="h2">
                {givingBackSection.leftSideTitle}
              </Typography>
              <Typography variant="body1">
                {givingBackSection.leftSideCopy.leftSideCopy}
              </Typography>
              <Typography
                variant="body1"
                className="modal-link"
                onClick={handleOpen}
              >
                {givingBackSection.orgsModalLinkText}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="pushing-diversity"
              ref={rightSide}
            >
              <Box className="badges-container">
                {givingBackSection.badges.map((badge, i) => (
                  <img
                    ref={i ? culturalRef : diversityRef}
                    key={badge.id}
                    src={badge.file.url}
                  />
                ))}
              </Box>
              <Box className="diversity-header-section">
                <Typography variant="h5" component="h2" className="title-right">
                  {hideSm && <img src={`images/arrow.svg`} />}
                  {givingBackSection.rightSideTitle}
                </Typography>
              </Box>
              <Typography variant="body1" className="copy-right">
                {givingBackSection.rightSideCopy.rightSideCopy}
              </Typography>
            </Grid>
          </Grid>
        </div>
        {showOrgsModal && (
          <OrgsSupportedDialog
            onClose={handleClose}
            showOrgsModal={showOrgsModal}
          />
        )}
      </Container>
    </Container>
  );
};

export default GivingBackSection;
