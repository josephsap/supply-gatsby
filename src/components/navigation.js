import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './navigation.styles';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navigation = ({ pageTitles }) => {

  return (
    <div css={styles} id="navbar">
      <div className="nav-wrapper">
        {pageTitles.map((pageTitle, index) => {
          return (
            <Link
              activeClass="active"
              to={`section${[index]}`}
              spy={true}
              smooth={true}
              offset={-25}
              duration={200}
              className="nav-item"
              key={index}
            >
              <Typography variant="caption">{pageTitle.navTitle}</Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;