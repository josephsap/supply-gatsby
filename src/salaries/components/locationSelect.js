import React from 'react';
import * as styles from '../styles/app.module.scss';
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core';

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
        <FormControl style={{ width: '340px' }}>
          <Select
            labelId="location"
            value={selectedLocationValue}
            onChange={controlFunction}
            variant="standard"
            IconComponent={() => (
              <img
                style={{ width: '14px', transform: 'rotate(90deg)' }}
                src="/images/icon-select-down.svg"
              />
            )}
          >
            {locations.map((location) => (
              <MenuItem key={location.id} value={location.location}>
                {location.location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default LocationSelect;
