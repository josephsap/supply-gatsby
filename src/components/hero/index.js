import React, { Fragment, useEffect, useRef, useState } from 'react';
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

const HeroSection = ({ heroSection }) => {
  const heroCopyRef = useRef();
  const [boxPos, setBoxPos] = useState(null);

  const titleTransform = () => {
    const reg = new RegExp(/\s/g, '');
    const parts = heroSection.headline.split(reg);
    return (
      <Typography variant="h1">
        {parts.map((part, index) => {
          if (
            part.includes('talent') ||
            part.includes('maker') ||
            part.includes('mindset')
          ) {
            return (
              <span className="bogue-font" key={index}>
                {part}{' '}
              </span>
            );
          }
          if (part.includes('curation')) {
            return (
              <Fragment key={index}>
                <span className="bogue-font">{part}</span>
                <br />
              </Fragment>
            );
          }
          return <Fragment key={index}>{part} </Fragment>;
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
    <div style={{ position: 'relative' }}>
      {boxPos && (
        <div css={dragStyles}>
          <DragContainer
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
                <img src={`images/rectangle-badge-top.svg`} />
                <img src={`images/top-peach-rectangle.svg`} className="peach" />
                <img src={`images/star-purple.svg`} className="star" />
                <img
                  src={`images/supply-badge-logo.svg`}
                  alt="The Supply"
                  className="hero-logo"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className="rich-text-section" ref={heroCopyRef}>
              {titleTransform()}
            </Grid>
          </Grid>
        </Container>
      </Container>
      <div css={backgroundDotStyles}></div>
    </div>
  );
};

export default HeroSection;
