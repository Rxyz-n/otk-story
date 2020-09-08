import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker as AntdDatePicker, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { DatePickerWrap } from './Styles';

import { DISPLAY_DATE_FORMAT } from 'utils/dateTime';
import { useStoriesContext } from 'context/StoriesContext';

function DatePicker() {
  const [date, setDate] = useState(moment());
  const { state, dispatch } = useStoriesContext();

  const handleChangeDate = amount => () => {
    const newDate = date.clone().add(amount, 'days');
    handleDateChage(newDate);
  };

  const handleDateChage = momentDate => {
    setDate(momentDate);
    dispatch({ type: 'DATE_CHANGE', payload: momentDate });
  };

  return (
    <DatePickerWrap>
      <AntdDatePicker
        size="large"
        value={date}
        format={DISPLAY_DATE_FORMAT}
        allowClear={false}
        onChange={handleDateChage}
        disabled={state.loading}
      />
      <Button
        size="large"
        icon={<LeftOutlined />}
        loading={state.loading}
        disabled={state.loading}
        onClick={handleChangeDate(-7)}
      />
      <Button
        size="large"
        icon={<RightOutlined />}
        loading={state.loading}
        disabled={state.loading}
        onClick={handleChangeDate(7)}
      />
    </DatePickerWrap>
  );
}

export default DatePicker;
