import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import { DrizzleProvider } from 'drizzle-react'
import {ApolloProvider} from 'react-apollo';
import client from './apollo-client';
// Layouts
import App from './App'

import LoadingContainer from './components/LoadingContainer.js'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

ReactDOM.render((
    <DrizzleProvider options={drizzleOptions} store={store}>
      <ApolloProvider client={client}>
        <LoadingContainer>
          <Router history={history} store={store}>
            <App/>
          </Router>
        </LoadingContainer>
      </ApolloProvider>
    </DrizzleProvider>
  ),
  document.getElementById('root')
);
