import React, { useState } from 'react';
import styles from './portfolio.styles';
import HelpIcon from '@material-ui/icons/Help';
import { Container, Grid, Typography, Box, Popover } from '@material-ui/core';

const PortfolioComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popNum, setPopNum] = useState(0);
  const handlePopoverOpen = (event, num) => {
    setPopNum(num);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopNum(0);
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
                  aria-owns={open ? 'mouse-over-popover1' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 1)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-name" />
                </Box>
                {popNum === 1 && (
                  <Popover
                    id="mouse-over-popover1"
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
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={3}>
                      <Typography variant="body1">
                        It's oh-so-fun to have an edgy name + logo. But clarify
                        if you are a company or an individual somehow.{' '}
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} className="nav-links popover-anchor">
              <Typography variant="body1">Work</Typography>
              <Box style={{ position: 'relative' }}>
                <Typography variant="body1">Experiments</Typography>
                <Box
                  className="tooltip-container experiment"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover2' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 2)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-about" />
                </Box>
                {popNum === 2 && (
                  <Popover
                    id="mouse-over-popover2"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={3}>
                      <Typography variant="body1">
                        You should display your side-projects and experiments.
                        Code, design, writing, whatever. It shows passion and
                        creativity outside of your nine-to-five paycheck life.
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>

              <Box style={{ position: 'relative' }}>
                <Typography variant="body1">About</Typography>
                <Box
                  className="tooltip-container"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover3' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 3)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-about" />
                </Box>
                {popNum === 3 && (
                  <Popover
                    id="mouse-over-popover3"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={3}>
                      <Typography variant="body1">
                        Personality fit is big these days. Write a bit about
                        yourself outside the office. Heck, maybe even add in a
                        link to your band.
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>

              <Box style={{ position: 'relative' }}>
                <Typography variant="body1">Contact</Typography>
                <Box
                  className="tooltip-container"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover4' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 4)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-about" />
                </Box>
                {popNum === 4 && (
                  <Popover
                    id="mouse-over-popover4"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={4}>
                      <Typography variant="body1">
                        List your name, email, Twitter, and maybe even some
                        Github or LinkedIn goodness. Oh, and where do you live?
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth={false} className="section-padding-bottom main">
        <Container maxWidth="lg" className="side-padding">
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} className="intro-copy">
              <Box style={{ position: 'relative' }}>
                <Typography variant="h4">
                  I’m an award winning ___________ that ___________ amazing
                  digital experiences. My main focus is on ___________ but I
                  also have great ___________ skills. Currently living in
                  ___________ with my lovely cat.
                </Typography>
                <Box
                  className="tooltip-container maincopy"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover3' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 5)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-maincopy" />
                </Box>
                {popNum === 5 && (
                  <Popover
                    id="mouse-over-popover5"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={4}>
                      <Typography variant="body1">
                        Clearly state what you do best. What you want to do.
                        What secondary skills you may have. Plain and simple.
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} className="intro-two">
              <Box>
                <Typography variant="body1">
                  Available for freelance / Would consider full-time if it was
                  amazing
                </Typography>
                <Box
                  className="tooltip-container container-availability"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover6' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 6)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon help-icon-available" />
                </Box>
                {popNum === 6 && (
                  <Popover
                    id="mouse-over-popover6"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={4}>
                      <Typography variant="body1">
                        Call out if you are freelancing, full-time, looking, not
                        looking, etc...
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>
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
              <Box style={{ position: 'relative' }}>
                <Typography variant="caption">
                  I played Sr Art Director on this thinking up ideas for user
                  social something. Worked closely with a design team to execute
                  look and feel.
                </Typography>
                <Box
                  className="tooltip-container container-desc"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover7' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 7)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon" />
                </Box>
                {popNum === 7 && (
                  <Popover
                    id="mouse-over-popover7"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={4}>
                      <Typography variant="body1">
                        Some titles imply so many things these days. Were you
                        the designer? Was it your amazing idea? Both?
                      </Typography>
                    </Box>
                  </Popover>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className="portfolio-item">
              <Box
                className="tooltip-container container-img"
                pt={3}
                aria-owns={open ? 'mouse-over-popover8' : undefined}
                aria-haspopup="true"
                onMouseEnter={(e) => handlePopoverOpen(e, 8)}
                onMouseLeave={handlePopoverClose}
              >
                <HelpIcon className="help-icon" />
              </Box>
              {popNum === 8 && (
                <Popover
                  id="mouse-over-popover8"
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
                  // anchorReference="anchorPosition"
                  // anchorPosition={{ top: 80, left: 100 }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Box p={4}>
                    <Typography variant="body1">
                      Provide simple clear images showing what the final
                      execution was. Make it visually obvious if it was for
                      mobile, show what client it was for, did it win awards,
                      etc...
                    </Typography>
                  </Box>
                </Popover>
              )}
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
                <Box
                  className="tooltip-container container-jobrole"
                  pt={3}
                  aria-owns={open ? 'mouse-over-popover9' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, 9)}
                  onMouseLeave={handlePopoverClose}
                >
                  <HelpIcon className="help-icon" />
                </Box>
                {popNum === 9 && (
                  <Popover
                    id="mouse-over-popover9"
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
                    // anchorReference="anchorPosition"
                    // anchorPosition={{ top: 80, left: 100 }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Box p={4}>
                      <Typography variant="body1">
                        Chances are you weren't the Designer, Copywriter, Dev
                        and Producer on this project. So clearly define what you
                        did on each project. It's important to know 'cause this
                        project is most likely on 9 other portfolios. And give
                        the vendor or partner some dang credit.
                      </Typography>
                    </Box>
                  </Popover>
                )}
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
