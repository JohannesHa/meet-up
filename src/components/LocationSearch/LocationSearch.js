/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import backgroundCoolImage from '../../assets/backgroundCoolImage.png';

import Title from '../Title.js'
import Header from '../Header.js'
import Subheader from '../Subheader.js'

const LocationSearch = ({ onSelectCountry, onSelectRegion, country, region }) => {
  return (
    <main className="container">
      <Header>Let's give it a try</Header>
      <Subheader>Enter your region to start</Subheader>
      <CountryDropdown
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
