import { useEffect, useRef, useState } from 'react';
import { DragContainer } from '../draggable-box/DragContainer';
import { CustomDragLayer } from '../draggable-box/CustomDragLayer';
import { Container, Grid, Box } from '@material-ui/core';
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

  useEffect(() => {
    let timer = setTimeout(() => {
      const { left, bottom } = heroCopyRef.current.getBoundingClientRect();
      setBoxPos({ top: bottom * 1.49, left: left + 10 });
    }, 5);

    return () => clearTimeout(timer);
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
      <Container maxWidth={false} css={styles}>
        <Container maxWidth="lg" className="side-padding">
          <Grid container id="section0" css={backgroundStyles}>
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
            <Box className="content">
              <Grid
                item
                xs={12}
                className="rich-text-section"
                ref={heroCopyRef}
              >
                {documentToReactComponents(
                  JSON.parse(heroSection.heroCopyRichText.raw)
                )}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Container>
      <div css={backgroundDotStyles}></div>
    </div>
  );
};

export default HeroSection;
