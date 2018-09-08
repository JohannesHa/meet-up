/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import backgroundCoolImage from '../../assets/backgroundCoolImage.png';

const LocationSearch = ({ onSelectCountry, onSelectRegion, country, region }) => {
  return (
    <div>
      <img class="center" style={styles.backgroundImageStyle} src={backgroundCoolImage} />
      <h1 style={styles.h1Style}>Let's give it a try</h1>
      <h6 style={styles.h6Style}>Enter your region to start</h6>
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
    </div>
  )
};

LocationSearch.propTypes = {
  onSelectCountry: PropTypes.func.isRequired,
  onSelectRegion: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
};

const styles = {
  h6Style: {
    color: '#A1A4D3',
    textAlignVertical: "center",
    textAlign: 'center',
    marginBottom: 50
  },
  h1Style: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20
  },
  backgroundImageStyle: {
    width: 185,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default LocationSearch;