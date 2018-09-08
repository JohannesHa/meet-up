/**
 * Created by will on 08/09/18.
 */
import React, { Component } from 'react';
import LocationSearch from '../LocationSearch/LocationSearch';
import CategorySearch from '../CategorySearch/CategorySearch';

import Nav from '../../components/Nav.js'

class DiscoverSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      region: '',
      category: '',
      onCategoryPage: false,
      isButtonDisabled: true
    }

    this.handleSelectCountry = this.handleSelectCountry.bind(this);
    this.handleSelectRegion = this.handleSelectRegion.bind(this);
    this.searchGroups = this.searchGroups.bind(this);
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
    this.selectCategoryPage = this.selectCategoryPage.bind(this);
  }

  handleSelectRegion = (region) => {
    this.setState({
      region: region
    }, () => {
      this.setState({
        isButtonDisabled: this.state.country.trim() !== '' && this.state.region.trim() !== ''
      })
      console.log(this.state.region, region)
    })

  };

  handleSelectCountry = (country) => {
    this.setState({
      country: country
    }, () => {
      this.setState({
        isButtonDisabled: this.state.country.trim() !== '' && this.state.region.trim() !== ''
      })
      console.log(this.state.country, country)
    })
  };

  handleSelectCategory = (category) => {
    this.setState({
      category: category
    })
  };

  searchGroups = () => {
    // search web3
    // nav

    this.setState({
      country: '',
      region: '',
      category: '',
      onCategoryPage: false,
      isButtonDisabled: true
    })
  };

  //TODO need to work on how the button is disabled. Should this be a separate component??
  isButtonDisabled() {
    if (this.state.onCategoryPage) {
      return this.state.category.trim() !== '';
    }
    else {
      return !(this.state.country.trim() !== '' && this.state.region.trim() !== '')
    }
  }

  selectCategoryPage() {
    console.log("SELECT CATEGORY")
    this.setState({
      onCategoryPage: true,
      isButtonDisabled: true
    })
  }



  render() {
    return (
      <div>
        <div>
          {!this.state.onCategoryPage ?
            <LocationSearch onSelectCountry={this.handleSelectCountry}
              onSelectRegion={this.handleSelectRegion}
              country={this.state.country}
              region={this.state.region} /> :
            <CategorySearch onSelectCategory={this.handleSelectCategory} />
          }
        </div>


        {!this.state.onCategoryPage ?
          <div class="center">
            <button style={styles.buttonStyle} disabled={false} onClick={this.selectCategoryPage}>Next</button>
          </div> :
          <div class="center">
            <button style={styles.buttonStyle} onClick={this.searchGroups}>Search</button>
          </div>
        }

        <Nav current={1} />
      </div>
    )
  }
}

const styles = {
  buttonStyle: {
    marginTop: 30,
    borderRadius: 12,
    borderWidth: 0,
    backgroundColor: '#7B40FF',
    width: '100%',
    height: 40,
    color: '#ffffff',
    float: 'right',
    justifyContent: 'center',
    alignItems: 'center'
  }
};


export default DiscoverSearchContainer;
