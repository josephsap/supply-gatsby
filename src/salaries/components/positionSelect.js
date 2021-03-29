import React from 'react';
import * as styles from '../styles/app.module.scss';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  InputBase,
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
  const { titles, onPositionChange, posVal, isEarlyClick } = props;

  const handleChange = (e) => {
    onPositionChange(e.target.value);
  };

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
        <FormControl className={styles.formWrap}>
          <Select
            value={posVal}
            onChange={(e) => handleChange(e)}
            displayEmpty={true}
            variant="standard"
            input={<CustomSelect />}
            IconComponent={() => (
              <img
                style={{ width: '14px' }}
                src="/images/arrow-select-down.svg"
              />
            )}
          >
            <MenuItem value="" disabled>
              Choose a job
            </MenuItem>
            {titles.map((title) => (
              <MenuItem key={title.id} value={title.slug}>
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
