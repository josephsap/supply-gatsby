import { Container, Box } from '@material-ui/core';
import Pebbles from './pebbles';
import styles, { backgroundDotStyles } from './pebbleStats.styles';

const PebbleStats = ({data}) => {
  return (
    <Container maxWidth={false} disableGutters={true} css={styles}>
      <Box css={backgroundDotStyles}>
          <Pebbles data={data} />
      </Box>
    </Container>
  );
};

export default PebbleStats;
