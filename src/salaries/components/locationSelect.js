import React from 'react';
import styles from './app.styles';

const LocationSelect = (props) => {
  const {
    locations,
    controlFunction,
    selectedLocationValue,
    isEarlyClick,
  } = props;
  const locationSelectOptions = locations.map((loc) => (
    <option key={loc.locationSlug} value={loc.locationSlug}>
      {loc.location}
    </option>
  ));

  return (
    <div css={styles}>
      <p className="inlineBlock dropdownCopy">Should make in</p>
      <div
        className={
          isEarlyClick
            ? `pulsate selectWrapper locWrapper`
            : `selectWrapper locWrapper`
        }
      >
        <select onChange={controlFunction} value={selectedLocationValue}>
          <option value="location" defaultValue="location" key="location">
            location
          </option>
          {locationSelectOptions}
        </select>
      </div>
    </div>
  );
};

export default LocationSelect;
