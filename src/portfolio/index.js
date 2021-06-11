import React, { useState } from 'react';
import styles from './portfolio.styles';
import HelpIcon from '@material-ui/icons/Help';
import { Container, Grid, Typography, Box, Popover } from '@material-ui/core';

const PortfolioComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div css={styles}>
      <Container maxWidth={false} className="top-bar">
        <Container maxWidth="lg" className="side-padding">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={6} className="popover-anchor">
              <Typography variant="h4" component="h1">
                Sample McRegus
              </Typography>
              <Box>
                <Box
                  className="tooltip-container"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon" />
                </Box>
                <Popover
                  id="mouse-over-popover"
                  style={{ pointerEvents: 'none' }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                  // css={popoverStyles}
                >
                  <Box p={3}>
                    <Typography variant="body1">
                      It's oh-so-fun to have an edgy name + logo. But clarify if
                      you are a company or an individual somehow.{' '}
                    </Typography>
                  </Box>
                </Popover>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className="nav-links">
              <Typography variant="body1">Work</Typography>
              <Typography variant="body1">Experiments</Typography>
              <Typography variant="body1">About</Typography>
              <Typography variant="body1">Contact</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth={false} className="section-padding-bottom main">
        <Container maxWidth="lg" className="side-padding">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} className="intro-copy">
              <Typography variant="h4">
                I’m an award winning ___________ that ___________ amazing
                digital experiences. My main focus is on ___________ but I also
                have great ___________ skills. Currently living in ___________
                with my lovely cat.
              </Typography>
            </Grid>
            <Grid item xs={12} className="intro-two">
              <Typography variant="body1">
                Available for freelance / Would consider full-time if it was
                amazing
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f0.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Product Microsite Launch - Shoe
                </Typography>
                <Typography variant="body1">Vendor: Partners7</Typography>
                <Typography variant="body1">Awards: FWA + Webby</Typography>
              </Box>
              <Typography variant="caption">
                I played Sr Art Director on this thinking up ideas for user
                social something. Worked closely with a design team to execute
                look and feel.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f1.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">Company Website Launch</Typography>
                <Typography variant="body1">
                  Awards: FWA + Siteinspire
                </Typography>
              </Box>
              <Typography variant="caption">
                I was Sr Copywriter on this project. Our goal here was to
                totally Lorem Ipsum the hell out of this and that. LINK:
                www.abc.com
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f2.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Mobile Concepts for New Product
                </Typography>
                <Typography variant="body1">Vendor: Partners6</Typography>
                <Typography variant="body1">Awards: FWA Mobile</Typography>
              </Box>
              <Typography variant="caption">
                I was Design Director on this project. Our goal was to Lorem
                Ipsum the hell out of this and that. Design is fun.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f3.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  CMS Dashboard for Company5
                </Typography>
                <Typography variant="body1">
                  CMS Dashboard for Company5
                </Typography>
                <Typography variant="body1">Vendor: Partners5</Typography>
              </Box>
              <Typography variant="caption">
                I was one of the developers on this project. Our goal was to
                Lorem Ipsum the hell out of this and that while providing that
                and the other
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f4.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">iPad app with Company4</Typography>
                <Typography variant="body1">Agency: IdeaShop4</Typography>
                <Typography variant="body1">Awards: FWA Mobile</Typography>
              </Box>
              <Typography variant="caption">
                I was lead Designer on this project. Our goal was to Lorem Ipsum
                the hell out of this and that. Fun stuff.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f5.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Digital Interactive Installation for Company3
                </Typography>
                <Typography variant="body1">Vendor: Partners3</Typography>
                <Typography variant="body1">
                  Awards: FWA + Cannes + OneShow
                </Typography>
              </Box>
              <Typography variant="caption">
                I was lead Front-end Dev on this project. Created a custom Flash
                control board to control the DOOH banner. Our goal was to Lorem
                Ipsum the hell out of this and that.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f6.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Agency Dashboard for Company2
                </Typography>
                <Typography variant="body1">Internal Project</Typography>
              </Box>
              <Typography variant="caption">
                I was lead developer and designer on this project. It's now
                being used by over 250 people in the agency. Our goal was to
                Lorem Ipsum the hell out of this and that. LINK: www.abc.com
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <img src={`/images/f7.jpeg`} />
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Mobile Game for Company1
                </Typography>
                <Typography variant="body1">Agency: IdeaShop1</Typography>
                <Typography variant="body1">Awards: FWA + Cannes</Typography>
              </Box>
              <Typography variant="caption">
                I was lead Producer on this project. Our goal was to Lorem Ipsum
                the hell out of this and that.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default PortfolioComponent;
