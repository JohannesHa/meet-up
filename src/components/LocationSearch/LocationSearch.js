/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const LocationSearch = ({onSelectCountry, onSelectRegion, country, region}) => {
  return (
    <div>
      <CountryDropdown
        value={country}
        onChange={onSelectCountry} />
      <RegionDropdown
        disableWhenEmpty={true}
        country={country}
        value={region}
        onChange={onSelectRegion} />

    </div>
  )
};

LocationSearch.propTypes = {
  onSelectCountry: PropTypes.func.isRequired,
  onSelectRegion: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

export default LocationSearch;