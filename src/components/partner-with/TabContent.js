import React from 'react';
import { stripCharacters } from '../../utils/utils';
import {
  Typography,
  Box,
} from '@material-ui/core';



const TabContent = ({ items, title, icons }) => {
  function renderCategoryItems() {
    return items.map((item, i) => {
      return <Typography key={`item-${i}`} className="category-item" variant="body1"><span className="category-title">{item}</span></Typography>
    })
  }

  function renderCategoryIcons() {
    return icons.map((icon, i) => {
      const Icon = icon;
      // console.log(icon)
      return <Icon />
    })
  }

  
  return  (
    <div className={stripCharacters(title)}>
        <Typography variant="h1" component="h3">
        {title}
        </Typography>
        <div className="category-items-container">
          { renderCategoryItems() }
          <div className="category-icons">
          { renderCategoryIcons() }
          </div>
        </div>
    </div>)

};

export default TabContent;
