import React from 'react';
import * as styles from '../styles/app.module.scss';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  InputBase,
  FormHelperText,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomSelect = withStyles((theme) => ({
  input: {
    borderBottom: '3px solid #000',
    '&:focus': {
      backgroundColor: 'transparent',
      borderBottom: '3px solid #bb9cfe',
    },
    '&:hover': {
      borderBottom: '3px solid #bb9cfe',
    },
    '&:selected': {
      borderBottom: '3px solid #bb9cfe',
    },
  },
}))(InputBase);

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
        <FormControl style={{ width: '340px', textAlign: 'left' }}>
          <Select
            labelId="demo-simple-select-label"
            value={selectedPositionValue}
            onChange={controlFunction}
            variant="standard"
            input={<CustomSelect />}
            className={styles.selectForm}
            IconComponent={() => (
              <img
                style={{ width: '14px' }}
                src="/images/arrow-select-down.svg"
              />
            )}
          >
            {titles.map((title) => (
              <MenuItem key={title.id} value={title.jobTitle}>
                {title.jobTitle}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a job</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};

export default PositionSelect;
