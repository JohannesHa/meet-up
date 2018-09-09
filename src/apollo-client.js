/**
 * Created by will on 08/09/18.
 */
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const endpoints = {
  simple: 'http://35.198.181.248/eth-meetup',
};


const client = {
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link: new HttpLink({uri: endpoints.simple}),
  cache: new InMemoryCache()
}

export default new ApolloClient(client);