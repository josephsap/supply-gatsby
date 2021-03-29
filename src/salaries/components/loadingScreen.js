import React from 'react';
import * as styles from '../styles/loading.module.scss';
import { animated, useSpring, config } from 'react-spring';
import { CircularProgress } from '@material-ui/core';

const LoadingScreen = ({ loading }) => {
  const loadingBackground = useSpring({
    config: config.stiff,
    opacity: loading ? 1 : 0,
    duration: 350,
  });

  return (
    <animated.div key={'hi'} style={loadingBackground}>
      <div className={styles.loadingScreen}>
        <CircularProgress className={styles.progress} size="5rem" />
      </div>
    </animated.div>
  );
};

export default LoadingScreen;
