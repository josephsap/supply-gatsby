import React from 'react';
import styles from './loadingScreen.styles';
import { animated, useSpring, config } from 'react-spring';

const LoadingScreen = ({ loading }) => {
  const loadingBackground = useSpring({
    config: config.stiff,
    opacity: loading ? 1 : 0,
    duration: 350,
  });

  return (
    <animated.div key={'hi'} style={loadingBackground} css={styles}>
      <div className={styles.loadingScreen}>
        <div className={styles.loader}>Loading...</div>
      </div>
    </animated.div>
  );
};

export default LoadingScreen;
