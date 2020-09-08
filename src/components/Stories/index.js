import React, { useEffect } from 'react';
import { notification } from 'antd';

import { StoriesWrap } from './Styles';

import { FETCH_DATE_FORMAT } from 'utils/dateTime';
import { useStoriesContext } from 'context/StoriesContext';
import Spin from 'components/Spin';
import Story from 'components/Story';

const END_POINT =
  'https://service.otakuscan.net/api/cosplayservice/Cosplaybydate';

function Stories() {
  const { state, dispatch } = useStoriesContext();

  useEffect(() => {
    fetchStories();
    // eslint-disable-next-line
  }, [state.date]);

  const fetchStory = async date => {
    const response = await fetch(`${END_POINT}?date=${date}`);
    const story = await response.json();
    return { date, story };
  };

  const getDate = (date, amount) => {
    return date.subtract(amount, 'days').format(FETCH_DATE_FORMAT);
  };

  const fetchStories = async () => {
    let i = 0;
    const currentDate = state.date.clone();
    const promises = [];

    try {
      dispatch({ type: 'FETCHING' });

      do {
        promises.push(fetchStory(getDate(currentDate, !i ? 0 : 1)));
        i++;
      } while (7 > i);

      const stories = await Promise.all(promises);
      dispatch({ type: 'SET_STORIES', payload: stories });
    } catch {
      dispatch({ type: 'FETCH_FAILED' });

      notification.destroy();
      notification.error({
        message: 'Error',
        description: 'Something went wrong, please try again!'
      });
    }
  };

  if (state.error) {
    return null;
  }

  if (state.loading) {
    return <Spin />;
  }

  return (
    <StoriesWrap>
      {state.stories.map(story => (
        <Story key={story.date} {...story} />
      ))}
    </StoriesWrap>
  );
}

export default Stories;
