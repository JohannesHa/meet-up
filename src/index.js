import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router'
import { DrizzleProvider } from 'drizzle-react'

// Layouts
import App from './App'
import SearchContainer from './layouts/search/SearchContainer.js'

import LoadingContainer from './components/LoadingContainer.js'
import Nav from './components/Nav.js'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
      <LoadingContainer>
        <Router history={history} store={store}>
          <div>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/search" component={SearchContainer} />
            </Switch>
            <Nav/>
          </div>
        </Router>
      </LoadingContainer>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
