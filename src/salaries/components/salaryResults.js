import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './salaryResults.styles';

const SalaryResults = (props) => {
  const {
    handleSubmitLoading,
    activeJob,
    posVal,
    locVal,
    loading,
    isEarlyClick,
  } = props;

  if (activeJob && posVal !== 'position' && locVal !== 'location') {
    return (
      <Fade when={!handleSubmitLoading} duration={1500} wait={100} css={styles}>
        <div className="resultsContainer salaryArea">
          <div className="numberContainer">
            <h3 className="salaryResultText firstNumber">
              ${activeJob.salaryLow.slice(0, -3)}
            </h3>
            <p className="rangeDesc">{activeJob.salaryRangeLowDesc}</p>
          </div>
          <p className="salaryResultText salaryDash">&ndash;</p>
          <div className="numberContainer">
            <h3 className="salaryResultText">
              ${activeJob.salaryHigh.slice(0, -3)}
            </h3>
            <p className="rangeDesc">{activeJob.salaryRangeHighDesc}</p>
          </div>
        </div>
      </Fade>
    );
  } else {
    return isEarlyClick ? (
      <div className={!loading ? 'flicker salaryArea' : 'salaryArea'}>
        <h2 className="introText">Select a position and a location!</h2>
      </div>
    ) : (
      <div className={!loading ? 'textFocusIn salaryArea' : 'salaryArea'}>
        <h4 className="introText">
          Select both a Job and a Location to see the estimated salary rages.
        </h4>
      </div>
    );
  }
};

export default SalaryResults;
