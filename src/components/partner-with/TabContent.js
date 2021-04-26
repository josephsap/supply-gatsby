import React, { useState, useRef, forwardRef } from 'react';
import { stripCharacters } from '../../utils/utils';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import IconArrow from '../../assets/svg/icon-arrow.inline.svg';
import ExamplesDialog from './examplesDialog';
import { useSpring, animated } from 'react-spring'

const TabContent = forwardRef(
  (
    { index, items, title, icons, inactive, onSetActive, onSetInactive, value },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const timeout = useRef(null);

    const theme = useTheme();
    const showItems = useMediaQuery(theme.breakpoints.down('sm'));

    const [showWorkModal, setShowWorkModal] = useState(false);

    // Parallax animation
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 12}px,0)`
   
    const handleOpen = () => {
      setShowWorkModal(true);
    };

    const handleClose = () => {
      setShowWorkModal(false);
    };

    function renderCategoryItems() {
      return items.map((item, i) => {
          return ( 
            <div
              className="category-item"
              key={`item-${i}`} 
            >
              <animated.div className="animated" style={{ transform: props.xy.interpolate(trans1)}}>
                  <Typography variant="body1">
                    <span className="category-item-title">{item}</span>
                  </Typography>
              </animated.div>
            </div>
          )
      });
    }

    function renderTitle(title) {
      return title.split('').map((char, i) => <span className="title-char" key={i}>{char}</span>)
    }

    function renderCategoryIcons() {
      return icons.map((icon, i) => {
        let Icon = icon;
        return (
            <Icon key={`icon-${i}`}/>
        ) 
      });
    }

    function onMouseOver() {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      timeout.current = setTimeout(() => {
        setActive(true);
        onSetActive && onSetActive(index);
      }, 100);
    }

    function onMouseOut() {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      timeout.current = setTimeout(() => {
        setActive(false);
        onSetInactive && onSetInactive();
      }, 100);
    }

    function handleParallax({ clientX: x, clientY: y }) {
      set({ xy: calc(x, y) })
    }

    return (
      <div
        className={`
          ${stripCharacters(title)} category-container 
          ${active ? 'active' : ''} 
          ${inactive ? 'inactive' : ''}
          ${showItems ? 'active' : ''}
        `}
        onMouseLeave={onMouseOut}
        ref={ref}
        onMouseMove={handleParallax}
      >
        <div
          onMouseEnter={onMouseOver}
          className={
            index === 0 && value === 0
              ? 'category-title'
              : 'category-title category-hide'
          }
        >
          <Typography variant="h3" component="h3">
            {renderTitle(title)}
          </Typography>
          <Typography variant="body1" component="span" className="category-cta">
            <em><IconArrow /></em>
            <em onClick={handleOpen}>View work examples</em>
          </Typography>
        </div>
        {showWorkModal && (
          <ExamplesDialog onClose={handleClose} showWorkModal={showWorkModal} />
        )}
        <div className="category-items-container">
          {renderCategoryItems()}
          <div className="category-icons">{renderCategoryIcons()}</div>
        </div>
      </div>
    );
  }
);

export default TabContent;
