import React, { useState } from 'react';
import { stripCharacters } from '../../utils/utils'

import { categories } from './categories';
import {
  Container,
  Popover,
  Typography,
  Grid,
  Tab,
  Tabs,
  Box,
} from '@material-ui/core';
import TabContent from './TabContent';
import styles, { tabStyles } from './whoWePartnerWith.styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const WhoWePartnerWith = ({ whoWeWorkWithSection }) => {
  const [value, setValue] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  function getItems(categoryStr) {
    const category = stripCharacters(categoryStr);
    return categories[category].items;
  }

  function getIcons(categoryStr) {
    const category = stripCharacters(categoryStr);
    return categories[category].icons;
  }

  function onSetItemActive(index) {
    console.log('active', index)
    setCurrentCategoryIndex(index);
  }

  function onSetItemInactive() {
    setCurrentCategoryIndex(null);
  }

  return (
    <Container
      maxWidth={false}
      css={styles}
      className="section-padding"
      id="section1"
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid container className="partner-section-container">
          <Grid item xs={12}>
            <Typography variant="h2" component="h2">
              {whoWeWorkWithSection.whoWeWorkWithTitle}
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="talent tabs"
              textColor="secondary"
              className="partner-tabs"
              TabIndicatorProps={{ className: 'tab-indicator-override' }}
              css={tabStyles(value)}
            >
              {whoWeWorkWithSection.talentclientToggle.map((item, index) => (
                <Tab key={index} label={item} className="single-tab-item" />
              ))}
            </Tabs>
            <TabPanel value={value} index={0}>
            
              {whoWeWorkWithSection.talentItem.map((talentItem, index) => (
                <TabContent 
                  key={`${stripCharacters(talentItem.jobCategory)}-item-${index}`}
                  items={getItems(talentItem.jobCategory) }
                  title={talentItem.jobCategory}
                  icons={getIcons(talentItem.jobCategory)}
                  onSetActive={onSetItemActive}
                  onSetInactive={onSetItemInactive}
                  index={index}
                  inactive={currentCategoryIndex !== null && index !== currentCategoryIndex}/>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {whoWeWorkWithSection.clientItem.map((clientItem, index) => (
                <TabContent 
                  key={`${stripCharacters(clientItem.specialty)}-item-${index}`}
                  items={getItems(clientItem.specialty) }
                  title={clientItem.specialty}
                  icons={getIcons(clientItem.specialty)}
                  onSetActive={onSetItemActive}
                  onSetInactive={onSetItemInactive}
                  index={index}
                  inactive={currentCategoryIndex !== null && index !== currentCategoryIndex}/>
              ))}
            </TabPanel>
            <Box mt={6}>
              <Box
                className="tooltip-container"
                pt={3}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <img
                  src={`images/info-icon.svg`}
                  alt="hover for more info"
                  className="info-tooltip"
                />
              </Box>
              <Popover
                id="mouse-over-popover"
                style={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box p={3}>
                  <Typography>
                    {
                      whoWeWorkWithSection.questionTooltipCopy
                        .questionTooltipCopy
                    }
                  </Typography>
                </Box>
              </Popover>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhoWePartnerWith;