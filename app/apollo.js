/**
 *
 * Setup Apollo Client
 *
 */

import ApolloClient from 'apollo-boost';

// Attempt to retrieve auth token from local Storage
export const getAuthToken = () => {
  try {
    return JSON.parse(localStorage.getItem('token'));
  } catch {
    return null;
  }
};

// Request Handler
const handleRequest = operation => {
  const authToken = getAuthToken();
  if (authToken) {
    operation.setContext({
      headers: {
        Authorization: authToken ? `JWT ${authToken}` : null,
      },
    });
  }
};

// Determine API URI
const API_URI = process.env.API_URI
  ? process.env.API_URI
  : 'https://api.charliecarsonkids.com/graphql/';

// Create Apollo Client
const client = new ApolloClient({
  uri: API_URI,
  request: handleRequest,
});

export default client;
