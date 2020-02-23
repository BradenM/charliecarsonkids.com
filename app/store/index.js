/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { createContext, useContext, useReducer } from 'react';
import AuthReducer from './auth';

export const mainReducer = (state, action) => {
  console.warn('STATE CHANGE');
  console.warn(state);
  console.warn(action);
  return {
    user: AuthReducer(state, action),
  };
};

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);
