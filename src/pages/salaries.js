import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import axios from 'axios';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from '../salaries/styles/app.module.scss';
import SVGS from '../salaries/components/svgs';
import PositionSelect from '../salaries/components/positionSelect';
import LocationSelect from '../salaries/components/locationSelect';
import JobDetails from '../salaries/components/jobDetails';
import SalaryResults from '../salaries/components/salaryResults';
import withDataFetching from '../salaries/components/withDataFetching';
import LoadingScreen from '../salaries/components/loadingScreen';
import Footer from '../components/Footer';
import { Button, Grid } from '@material-ui/core';

const SalariesPage = (props) => {
  const { loading, titles, locations } = props;
  const [sortedJobs, setSortedJobs] = useState([]);
  const [selectedPositionValue, setSelectedPositionValue] = useState('');
  const [selectedLocationValue, setSelectedLocationValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeJobItem, setActiveJobItem] = useState(null);
  const [descriptions, setDescriptions] = useState([]);
  const [handleSubmitLoading, setHandleSubmitLoading] = useState(false);
  const [isEarlyClick, setIsEarlyClick] = useState(false);

  const { contentfulFooter } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        logo {
          file {
            url
          }
        }
        logoCaption
        footerLinks {
          id
          linkText
        }
      }
    }
  `);

  const handleJobLevelSelect = (activeIndex) => {
    const selectedJobItem = descriptions.filter((jobItem, index) => {
      if (index === activeIndex) {
        return jobItem;
      }
    });
    setActiveIndex(activeIndex);
    setActiveJobItem(selectedJobItem[0]);
  };

  const handlePositionChange = (val) => {
    setSelectedPositionValue(val);
  };

  const handleLocationChange = (val) => {
    setSelectedLocationValue(val);
  };

  const setActiveSalaryRange = () => {
    if (
      selectedPositionValue === '' &&
      selectedLocationValue === '' &&
      activeIndex === 0
    ) {
      setActiveJobItem(null);
    } else {
      setActiveJobItem(sortedJobs[activeIndex]);
    }
  };

  const earlyClick = (clickStatus) => {
    setIsEarlyClick(clickStatus);
  };

  const sortJobsLowToHigh = () => {
    const sortedBySalaryLow = descriptions.sort(
      (a, b) => parseFloat(a.salaryLow) - parseFloat(b.salaryLow)
    );
    if (!handleSubmitLoading) {
      setSortedJobs(sortedBySalaryLow);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHandleSubmitLoading(true);
    setIsEarlyClick(false);
    axios
      .get(
        `https://events.thesupply.com/api/salaries/${selectedPositionValue}/${selectedLocationValue}`
      )
      .then((response) => {
        setDescriptions(response.data);
        setActiveIndex(activeIndex || 0);
        setSelectedPositionValue(selectedPositionValue);
        setSelectedLocationValue(selectedLocationValue);
        sortJobsLowToHigh();
        setHandleSubmitLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    if (sortedJobs.length === 0) {
      setDescriptions(props.descriptions);
    } else {
      setDescriptions(descriptions);
    }
    sortJobsLowToHigh();
    setActiveSalaryRange();
  }, [loading, descriptions, handleSubmitLoading, sortedJobs]);

  return (
    <Layout>
      {loading ? (
        <LoadingScreen loading={props.loading} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.app}>
            <div className="topBar">
              <Button
                href="/"
                variant="contained"
                color="primary"
                className={styles.backBtn}
              >
                <img src="images/arrow-back.svg" />
              </Button>
              <div className={styles.container}>
                <SVGS />
              </div>
            </div>
            <div className={styles.mainArea}>
              <form
                onSubmit={handleSubmit}
                className={`${styles.textCenter} ${styles.chooseWrapper}`}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} md={4} className={styles.posContainer}>
                    <PositionSelect
                      titles={titles}
                      onPositionChange={handlePositionChange}
                      posVal={selectedPositionValue}
                      isEarlyClick={isEarlyClick}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} className={styles.selectContainer}>
                    <LocationSelect
                      locations={locations}
                      locVal={selectedLocationValue}
                      onLocationChange={handleLocationChange}
                      isEarlyClick={isEarlyClick}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {selectedPositionValue !== 'position' &&
                    selectedLocationValue !== 'location' ? (
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        value="submit"
                        className={styles.subBtn}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ width: '278px' }}
                        value="submit"
                        className={`${styles.disabledButton} ${styles.subBtn}`}
                      >
                        Submit
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </form>
              <div className={`${styles.jobContainer} ${styles.contain}`}>
                <SalaryResults
                  activeJob={activeJobItem}
                  handleSubmitLoading={handleSubmitLoading}
                  posVal={selectedPositionValue}
                  locVal={selectedLocationValue}
                  isEarlyClick={isEarlyClick}
                />
                <JobDetails
                  handleJobLevelSelect={handleJobLevelSelect}
                  sortedJobsArr={sortedJobs}
                  activeIndex={activeIndex}
                  posVal={selectedPositionValue}
                  locVal={selectedLocationValue}
                  activeJobItem={activeJobItem}
                  earlyClick={earlyClick}
                />
              </div>
            </div>
          </div>
          <Footer footer={contentfulFooter} />
        </div>
      )}
    </Layout>
  );
};

export default withDataFetching(SalariesPage);
