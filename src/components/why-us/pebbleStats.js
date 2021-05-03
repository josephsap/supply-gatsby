import { useState, useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import Pebbles from './pebbles';
import styles, { backgroundDotStyles } from './pebbleStats.styles';

const PebbleStats = ({ data }) => {
  const [winHeight, setWinHeight] = useState(null);

  useEffect(() => {
    setWinHeight(window.innerHeight);
  }, [winHeight]);

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      css={styles({ winHeight })}
    >
      <Box css={backgroundDotStyles}>
        <Pebbles data={data} />
      </Box>
    </Container>
  );
};

export default PebbleStats;
