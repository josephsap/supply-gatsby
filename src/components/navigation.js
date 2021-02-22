import React, { useState, useRef } from "react"
import styles from "./navigation.styles"
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div css={styles} id="navbar">
      <div className="nav-wrapper">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-60}
          duration={300}
          className="nav-item"><span>A</span>
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>B</span>
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>C</span>
        </Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>D</span>
        </Link>
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>E</span>
        </Link>
        <Link
          activeClass="active"
          to="section6"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>E</span>
        </Link>
        <Link
          activeClass="active"
          to="section7"
          spy={true}
          smooth={true}
          // offset={-30}
          duration={300}
          className="nav-item"><span>E</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;