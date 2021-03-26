import React, { forwardRef, useState } from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import * as styles from '../styles/svgs.module.scss';
import '../styles/svgs.scss';
// import CloseIcon from '@material-ui/icons/Close';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    maxWidth: '555px',
    width: '90%',
    margin: '0 auto',
    outline: 'none',
  },
  root: {
    outline: 'none',
  },
}));

const Fade = forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const SVGS = ({ loading }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const trail = useTrail(SVGConfig.length, {
  //   config: { mass: 1, tension: 200, friction: 24 },
  //   opacity: loading ? 0 : 1,
  //   from: { opacity: 0 },
  // });

  return (
    <div className={styles.svgWrapper}>
      <div className={styles.textCenter}>
        <Typography variant="h3" component="h1">
          Industry Salaries
        </Typography>
        <Typography variant="body1" className={styles.subhead}>
          Thoughts on salary ranges we see in our realm of talent
        </Typography>
        <button
          type="button"
          onClick={handleOpen}
          className={styles.modalButton}
        >
          What is this?
        </button>
      </div>
      {/* {trail.map(({ height, ...rest }, index) => (
        <animated.span
          key={index}
          style={{ ...rest }}
          className={styles[`${SVGConfig[index].class}`]}
        >
          {SVGConfig[index].svg}
        </animated.span>
      ))} */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={styles.modalStyles}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className={classes.root}>
          <div className={classes.paper}>
            <div className={styles.modalTop}>
              <p>What is this?</p>
              <div onClick={handleClose} className={styles.modalCloseIcon} />
            </div>
            <div className={styles.modalInner}>
              <p id="spring-modal-description">
                Hey, thanks for stopping by. This is just a quick little tool
                that gives some rough salary ranges in the industry/world we are
                familiar with. We get asked about this all the time, figured
                we’d put it in one simple place. There are so many variables to
                salaries as you know, so just a guideline. We will be adjusting
                this as time goes on, working on adding some new filters (small
                shop vs massive company, freelance rate, etc), feel free to send
                a note with ideas and thoughts.{' '}
                <a
                  href="mailto:hi@thesupply.com?subject=An email from The Supply Salaries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hi@thesupply.com
                </a>{' '}
                - Thanks
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SVGS;
