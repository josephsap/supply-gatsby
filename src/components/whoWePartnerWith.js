import React, { useState } from "react"
import { Container, Popover, Typography, Grid, Tab, Tabs, Box } from '@material-ui/core';
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false} css={styles} className="section-padding">
      <Container maxWidth="lg">
        <Grid container id="section2" className="partner-section-container">
          <Grid item xs={12}>
            <Typography variant="h2" component="h2">{whoWeWorkWithSection.whoWeWorkWithTitle}</Typography>
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
                <Tab
                  key={index}
                  label={item}
                  className="single-tab-item"
                />
              ))}
            </Tabs>
            <TabPanel value={value} index={0}>
              {whoWeWorkWithSection.talentItem.map((talentItem, index)=> (
                <div key={index}>
                  <Typography variant="h1" component="h3">{talentItem.jobCategory}</Typography>
                  <Typography>{talentItem.jobTitle}</Typography>
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {whoWeWorkWithSection.clientItem.map((clientItem, index) => (
                <div key={index}>
                  <Typography variant="h1" component="h3">{clientItem.specialty}</Typography>
                  <Typography>{clientItem.specialtyItem}</Typography>
                </div>
              ))}
            </TabPanel>
            <img src={`info-icon.svg`} alt="hover for more info" className="info-tooltip" />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhoWePartnerWith;

