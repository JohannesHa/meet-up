import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'
import axios from 'axios';
import config from '../config';
import DiscoverSearchContainer from './components/DiscoverSearch/DiscoverSearchContainer';

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      testingAxios: []
    }
  }


  componentDidMount() {
    var pinata_api_key = config.MY_KEY;
    var pinata_secret_api_key = config.SECRET_KEY;

    axios
      .get("https://api.pinata.cloud/data/testAuthentication", {
        headers: {
          'pinata_api_key': pinata_api_key,
          'pinata_secret_api_key': pinata_secret_api_key
        }
      })
      .then(function (response) {
        //handle your response here
        const testingAxios = response.data;
        this.setState({ testingAxios });
      })
      .catch(function (error) {
        //handle error here
        console.log("Error: " + error)
      });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
        <ul>
          {console.log("tested Axios:" + this.state.testingAxios)}
          {this.state.testingAxios.map(testingAxios => <li>{testingAxios.message}</li>)}
        </ul>
        <DiscoverSearchContainer/>
      </div>
    );
  }
}

export default App
