import React, { useEffect, useState, useRef, createRef } from 'react';
import { stripCharacters } from '../../utils/utils';
import useScrollAnimation from '../../hooks/use-scroll-animation';
import gsap from 'gsap';

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
import styles, { tabStyles, popoverStyles } from './whoWePartnerWith.styles';
import PartnerTabs from './PartnerTabs';

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

  //animations that are scroll triggered
  const wrapper = useRef(null);
  const headline = useRef(null);
  const buttons = useRef(null);
  const talentTabHeadlines = useRef(
    whoWeWorkWithSection.talentItem.map(() => createRef())
  );
  const clientTabHeadlines = useRef(
    whoWeWorkWithSection.clientItem.map(() => createRef())
  );

  //the scroll triggered animation
  useScrollAnimation(wrapper, [
    headline,
    buttons,
    ...talentTabHeadlines.current,
  ]);

  //when the tab changes
  useEffect(() => {
    let elements =
      value === 0 ? talentTabHeadlines.current : clientTabHeadlines.current;
    gsap.to([...elements.map((ref) => ref.current)], 0.5, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
    });
  }, [value]);

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
      ref={wrapper}
    >
      <Container maxWidth="lg" className="side-padding">
        <Grid container className="partner-section-container">
          <Grid item xs={12}>
            <Typography
              className="headline"
              variant="h6"
              component="h2"
              ref={headline}
              className="partner-with-headline"
            >
              {whoWeWorkWithSection.whoWeWorkWithTitle}
            </Typography>
            {/* <Tabs
              value={value}
              onChange={handleChange}
              aria-label="talent tabs"
              textColor="secondary"
              className="partner-tabs"
              TabIndicatorProps={{ className: 'tab-indicator-override' }}
              css={tabStyles(value)}
              ref={buttons}
            >
              {whoWeWorkWithSection.talentclientToggle.map((item, index) => (
                <Tab key={index} label={item} className="single-tab-item" />
              ))}
            </Tabs> */}
            <PartnerTabs handleChange={handleChange} sections={whoWeWorkWithSection.talentclientToggle} />
            <TabPanel value={value} index={0}>
              {whoWeWorkWithSection.talentItem.map((talentItem, index) => (
                <TabContent
                  key={`${stripCharacters(
                    talentItem.jobCategory
                  )}-item-${index}`}
                  items={getItems(talentItem.jobCategory)}
                  title={talentItem.jobCategory}
                  icons={getIcons(talentItem.jobCategory)}
                  onSetActive={onSetItemActive}
                  onSetInactive={onSetItemInactive}
                  index={index}
                  value={value}
                  inactive={
                    currentCategoryIndex !== null &&
                    index !== currentCategoryIndex
                  }
                  ref={talentTabHeadlines.current[index]}
                />
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {whoWeWorkWithSection.clientItem.map((clientItem, index) => (
                <TabContent
                  key={`${stripCharacters(clientItem.specialty)}-item-${index}`}
                  items={getItems(clientItem.specialty)}
                  title={clientItem.specialty}
                  icons={getIcons(clientItem.specialty)}
                  onSetActive={onSetItemActive}
                  onSetInactive={onSetItemInactive}
                  index={index}
                  inactive={
                    currentCategoryIndex !== null &&
                    index !== currentCategoryIndex
                  }
                  ref={clientTabHeadlines.current[index]}
                />
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
                css={popoverStyles}
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
