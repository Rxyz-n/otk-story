import React, { createContext, useReducer, useContext } from 'react';
import moment from 'moment';

const StoriesContext = createContext();

const initState = {
  date: moment(),
  loading: false,
  error: false,
  stories: []
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'DATE_CHANGE':
      return { ...state, date: payload };
    case 'FETCHING':
      return { ...state, loading: true, error: false };
    case 'SET_STORIES':
      return { ...state, loading: false, stories: payload };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

function StoriesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </StoriesContext.Provider>
  );
}

export function useStoriesContext() {
  return useContext(StoriesContext);
}

export default StoriesProvider;
