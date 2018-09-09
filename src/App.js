import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import HomeContainer from './layouts/home/HomeContainer'
import axios from 'axios';
//import config from '../config';

import DiscoverSearchContainer from './components/DiscoverSearch/DiscoverSearchContainer'
import GroupContainer from './components/Group/GroupContainer'
import CreateGroupContainer from './layouts/createGroup/CreateGroupContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import IntroContainer from './layouts/intro/IntroContainer';

// Styles
import './css/roboto.css'
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
    /*
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
      */
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/intro" component={IntroContainer} />
          <Route exact path="/search" component={DiscoverSearchContainer} />
          <Route exact path="/create" component={CreateGroupContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route path="*.meet-up.eth" component={GroupContainer} />
          <Route render={() => { <div>Not Found</div> }} />
        </Switch>
        <ul>
          {console.log("tested Axios:" + this.state.testingAxios)}
          {this.state.testingAxios.map(testingAxios => <li>{testingAxios.message}</li>)}
        </ul>
      </div>
    );
  }
}

export default App
