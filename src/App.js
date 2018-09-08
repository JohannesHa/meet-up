import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'
import axios from 'axios';
import config from '../config';


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
    var pinata_api_key = config.pinata_api_key;
    var pinata_secret_api_key = config.pinata_secret_api_key;

    axios
      .get("https://api.pinata.cloud/data/testAuthentication", {
        headers: {
          'pinata_api_key': pinata_api_key,
          'pinata_secret_api_key': pinata_secret_api_key
        }
      })
      .then(function (response) {
        //handle your response here
        console.log(response.data)
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
      </div>
    );
  }
}

export default App
