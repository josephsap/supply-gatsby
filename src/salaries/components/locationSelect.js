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

const LocationSelect = (props) => {
  const {
    locations,
    controlFunction,
    selectedLocationValue,
    isEarlyClick,
  } = props;

  return (
    <>
      <Typography
        variant="body1"
        className={`${styles.inlineBlock} ${styles.dropdownCopy}`}
      >
        Should make in
      </Typography>
      <div
        className={
          isEarlyClick
            ? `${styles.pulsate} ${styles.selectWrapper} ${styles.locWrapper}`
            : `${styles.selectWrapper} ${styles.locWrapper}`
        }
      >
        <FormControl style={{ width: '340px', textAlign: 'left' }}>
          <Select
            input={<CustomSelect />}
            labelId="location"
            value={selectedLocationValue}
            onChange={controlFunction}
            variant="standard"
            IconComponent={() => (
              <img
                style={{ width: '14px' }}
                src="/images/arrow-select-down.svg"
              />
            )}
          >
            {locations.map((location) => (
              <MenuItem key={location.id} value={location.location}>
                {location.location}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a location</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};

export default LocationSelect;
