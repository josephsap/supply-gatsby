import React, { useState } from 'react';
import * as styles from '../styles/svgs.module.scss';
import '../styles/svgs.scss';
import { Typography, Popover, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SVGS = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <div className={styles.textCenter}>
        <Typography variant="h3" component="h1">
          Industry Salaries
        </Typography>
        <Typography variant="body1" className={styles.subhead}>
          Thoughts on salary ranges we see in our realm of talent
        </Typography>
        <Box mt={6}>
          <Box
            pt={3}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <img
              src="/images/info-icon.svg"
              alt="hover for more info"
              className={styles.infoTooltip}
            />
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
              vertical: 'bottom',
              horizontal: 'center',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            PaperProps={{
              style: { maxWidth: '600px', textAlign: 'center' },
            }}
          >
            <Box p={4}>
              <Typography>
                Hey, thanks for stopping by. This is just a quick little tool
                that gives some rough salary ranges in the industry/world we are
                familiar with. We get asked about this all the time, figured
                we’d put it in one simple place. There are so many variables to
                salaries as you know, so just a guideline. We will be adjusting
                this as time goes on, working on adding some new filters (small
                shop vs massive company, freelance rate, etc), feel free to send
                a note with ideas and thoughts.
              </Typography>
            </Box>
          </Popover>
        </Box>
      </div>
    </div>
  );
};

export default SVGS;
