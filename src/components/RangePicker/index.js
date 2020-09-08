import React from 'react';
import { DatePicker, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { RangePickerWrap } from './Styles';

function RangePicker() {
  return (
    <RangePickerWrap>
      <Button icon={<LeftOutlined />} size="large" />
      <Button icon={<RightOutlined />} size="large" />
      <DatePicker.RangePicker allowClear size="large" />
    </RangePickerWrap>
  );
}

export default RangePicker;
