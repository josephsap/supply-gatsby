import { Container, Box } from '@material-ui/core';
import Pebbles from './pebbles';
import styles, { backgroundDotStyles } from './pebbleStats.styles';

const PebbleStats = () => {
  return (
    <Container maxWidth={false} disableGutters={true} css={styles}>
      <Box css={backgroundDotStyles}>
          <Pebbles />
      </Box>
    </Container>
  );
};

export default PebbleStats;
