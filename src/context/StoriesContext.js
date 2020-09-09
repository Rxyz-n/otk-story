import React, { createContext, useReducer, useContext } from 'react';
import moment from 'moment';

const StoriesContext = createContext();

const initState = {
  date: moment(),
  loading: false,
  error: false,
  stories: [],
  story: [],
  currentImage: {}
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
    case 'ADD_STORY':
      const story = state.stories.find(s => s.date === payload.date).story;
      const currentImageIdx = story.findIndex(s => s.Id === payload.id);
      return {
        ...state,
        story,
        currentImage: {
          ...story[currentImageIdx],
          idx: currentImageIdx,
          isFirstImage: currentImageIdx === 0,
          isLastImage: currentImageIdx === story.length - 1
        }
      };
    case 'REMOVE_STORY':
      return { ...state, story: [], currentImage: {} };
    case 'CHANGE_CURRENT_IMAGE':
      const newIdx = state.currentImage.idx + payload;
      return {
        ...state,
        currentImage: {
          ...state.story[newIdx],
          idx: newIdx,
          isFirstImage: newIdx === 0,
          isLastImage: newIdx === state.story.length - 1
        }
      };
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
