import { Container, Box } from '@material-ui/core';
import styles, { backgroundDotStyles } from './pebbleStats.styles';

const PebbleStats = () => {
  return (
    <Container maxWidth={false} disableGutters={true} css={styles}>
      <Box css={backgroundDotStyles}>pebbles section</Box>
    </Container>
  );
};

export default PebbleStats;
