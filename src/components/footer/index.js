import { Container, Typography, Grid } from '@material-ui/core';
import { pb4, pt4, mb6 } from '../layout/margin-padding-utils.styles';
import styles from './footer.styles';

const Footer = ({ footer }) => (
  <Container maxWidth={false} css={[styles, pb4, pt4]}>
    <Container maxWidth="lg" className="side-padding">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <img src={footer.logo.file.url} />
        </Grid>
        <Grid item xs={12} md={6} css={mb6}>
          <Typography>{footer.logoCaption}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ul className="footer-container">
            {footer.footerLinks.map((link, index) => {
              if (index === 2)
                return (
                  <li key={index} className="footer-item">
                    <img src={`images/star.svg`} />
                  </li>
                );

              return (
                <li key={link.id} className="footer-item">
                  <Typography variant="subtitle2" component="p">
                    {link.linkText}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </Container>
  </Container>
);

export default Footer;
