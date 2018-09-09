/**
 * Created by will on 08/09/18.
 */
import React, { Component } from 'react';
import LocationSearch from '../LocationSearch/LocationSearch';
import CategorySearch from '../CategorySearch/CategorySearch';

import Nav from '../../components/Nav.js'
import Button from '../../components/Button.js'
import Header from '../Header.js'
import Subheader from '../Subheader.js'

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
        <main className="container">
          <Header>Search</Header>
          <Subheader>Enter your region to start</Subheader>
          {!this.state.onCategoryPage ?
            <LocationSearch onSelectCountry={this.handleSelectCountry}
              onSelectRegion={this.handleSelectRegion}
              country={this.state.country}
              region={this.state.region} /> :
            <CategorySearch onSelectCategory={this.handleSelectCategory} />
          }


        {!this.state.onCategoryPage ?
          <div>
            <Button disabled={false} onClick={this.selectCategoryPage}>Next</Button>
          </div> :
          <div>
            <Button onClick={this.searchGroups}>Search</Button>
          </div>
        }
        </main>
        <Nav current={1} />
      </div>
    )
  }
}


export default DiscoverSearchContainer;
