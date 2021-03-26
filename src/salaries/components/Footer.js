import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <footer css={styles}>
      <Grid container>
        <Grid item xs={12} md={6} className="footerLogoContainer">
          <a href="http://thesupply.com">
            <img src={`images/footer-logo.png`} alt="supply footer logo" />
          </a>
        </Grid>
        <Grid item xs={12} md={3} className="footerOneThird">
          <h4 className="titleLines">Follow Us</h4>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/TheSupply.Online"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/thesupply_feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
          <h4 className="titleLines">Lets Talk</h4>
          <ul className="social">
            <li>
              <a href="mailto:info@thesupply.com?Subject=Hello%20from%20The%20Supply%20Salaries">
                email
              </a>
            </li>
            <li>
              <a href="callto://+17202328185">720.232.8185</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
