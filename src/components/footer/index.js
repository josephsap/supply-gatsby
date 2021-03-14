import { Container, Typography, Grid, Box } from '@material-ui/core';
import { pb4, pt4 } from '../layout/margin-padding-utils.styles';

const Footer = ({ footer }) => (
  <Container maxWidth={false} css={[pb4, pt4]}>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <img src={footer.logo.file.url} />
          <Typography variant="">{footer.logoCaption}</Typography>
        </Grid>
        <Grid item xs={12}>
          <ul>
            {footer.footerLinks.map((link) => (
              <li key={link.id}>
                <Typography variant="subtitle2">{link.linkText}</Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default Footer;
