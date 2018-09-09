/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import backgroundCoolImage from '../../assets/backgroundCoolImage.png';

import Title from '../Title.js'

const StyledCountryDropdown = styled(CountryDropdown)`
  color: white !important;
`

const LocationSearch = ({ onSelectCountry, onSelectRegion, country, region }) => {
  return (
    <main className="container">
      <StyledCountryDropdown
        classes="dropdown-country"
        value={country}
        onChange={onSelectCountry} />
      <RegionDropdown
        classes="dropdown-country"
        disableWhenEmpty={true}
        country={country}
        value={region}
        onChange={onSelectRegion} />
    </main>
  )
};

LocationSearch.propTypes = {
  onSelectCountry: PropTypes.func.isRequired,
  onSelectRegion: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

export default LocationSearch;
