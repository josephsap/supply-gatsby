import React from 'react';
import styles from './app.styles';

const PositionSelect = (props) => {
  const {
    titles,
    controlFunction,
    selectedPositionValue,
    isEarlyClick,
  } = props;

  const makePositionSelectOptions = titles.map((title) => {
    return (
      <option key={title.id} value={title.slug}>
        {title.jobTitle}
      </option>
    );
  });

  return (
    <div css={styles}>
      <p className="inlineBlock dropdownCopy">I'm curious what a</p>
      <div
        className={
          isEarlyClick
            ? `pulsate selectWrapper posWrapper`
            : `selectWrapper posWrapper`
        }
      >
        <select onChange={controlFunction} value={selectedPositionValue}>
          <option value="position" key="pos1">
            Choose a job
          </option>
          {makePositionSelectOptions}
        </select>
      </div>
    </div>
  );
};

export default PositionSelect;
