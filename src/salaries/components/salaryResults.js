import React from 'react';
import Fade from 'react-reveal/Fade';
import * as styles from '../styles/salaryResults.module.scss';
import { Typography } from '@material-ui/core';

const SalaryResults = (props) => {
  const {
    handleSubmitLoading,
    activeJob,
    posVal,
    locVal,
    loading,
    isEarlyClick,
  } = props;

  if (activeJob && posVal !== '' && locVal !== '') {
    const figureLow = activeJob.salaryLow.replace(',000.00', 'k');
    const figureHigh = activeJob.salaryHigh.replace(',000.00', 'k');
    return (
      <Fade when={!handleSubmitLoading} duration={1500} wait={100}>
        <div className={`${styles.resultsContainer} ${styles.salaryArea}`}>
          <div className={styles.numberContainer}>
            <Typography variant="h3">{figureLow}</Typography>
          </div>
          <p className={`${styles.salaryResultText} ${styles.salaryDash}`}>
            &ndash;
          </p>
          <div className={styles.numberContainer}>
            <Typography variant="h3">{figureHigh}</Typography>
          </div>
        </div>
      </Fade>
    );
  } else {
    return isEarlyClick ? (
      <div
        className={
          !loading
            ? `${styles.flicker} ${styles.salaryArea}`
            : `${styles.salaryArea}`
        }
      >
        <Typography variant="body1">
          Select a position and a location!
        </Typography>
      </div>
    ) : (
      <div
        className={
          !loading
            ? `${styles.textFocusIn} ${styles.salaryArea}`
            : `${styles.salaryArea}`
        }
      >
        <Typography variant="body1">
          Select both a Job and a Location to see the estimated salary rages.
        </Typography>
      </div>
    );
  }
};

export default SalaryResults;
