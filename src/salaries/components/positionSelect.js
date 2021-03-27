import React from 'react';
import * as styles from '../styles/app.module.scss';
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core';

const PositionSelect = (props) => {
  const {
    titles,
    controlFunction,
    selectedPositionValue,
    isEarlyClick,
  } = props;

  return (
    <>
      <Typography
        variant="body1"
        className={`${styles.inlineBlock} ${styles.dropdownCopy}`}
      >
        I'm curious what a
      </Typography>
      <div
        className={
          isEarlyClick
            ? `${styles.pulsate} ${styles.selectWrapper} ${styles.posWrapper}`
            : `${styles.selectWrapper} ${styles.posWrapper}`
        }
      >
        <FormControl style={{ width: '340px' }}>
          <Select
            labelId="demo-simple-select-label"
            value={selectedPositionValue}
            onChange={controlFunction}
            variant="standard"
            IconComponent={() => (
              <img
                style={{ width: '14px', transform: 'rotate(90deg)' }}
                src="/images/icon-select-down.svg"
              />
            )}
          >
            {titles.map((title) => (
              <MenuItem key={title.id} value={title.jobTitle}>
                {title.jobTitle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default PositionSelect;
