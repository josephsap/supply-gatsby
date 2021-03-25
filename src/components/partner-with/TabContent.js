import React, { useState, useRef, forwardRef } from 'react';
import { stripCharacters } from '../../utils/utils';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import IconArrow from '../../assets/svg/icon-arrow.inline.svg';

const TabContent = forwardRef(
  (
    { index, items, title, icons, inactive, onSetActive, onSetInactive },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const timeout = useRef(null);

    const theme = useTheme();
    const showItems = useMediaQuery(theme.breakpoints.down('md'));

    function renderCategoryItems() {
      return items.map((item, i) => {
        return (
          <Typography
            key={`item-${i}`}
            className="category-item"
            variant="body1"
          >
            <span className="category-item-title">{item}</span>
          </Typography>
        );
      });
    }

    function renderCategoryIcons() {
      return icons.map((icon, i) => {
        const Icon = icon;
        return <Icon key={`icon-${i}`} />;
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

    return (
      <div
        className={`
          ${stripCharacters(title)} category-container 
          ${active ? 'active' : 'active'} 
          ${inactive ? 'inactive' : ''}
        `}
        ref={ref}
      >
        <div
          className={'category-title'}
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseOut}
        >
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" component="span" className="category-cta">
            <IconArrow />
            <em>View work examples</em>
          </Typography>
        </div>
        <div className="category-items-container">
          {renderCategoryItems()}
          <div className="category-icons">{renderCategoryIcons()}</div>
        </div>
      </div>
    );
  }
);

export default TabContent;
