import styled from 'styled-components';

export const DatePickerWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 6px;

    span {
      font-size: 15px !important;
    }
  }

  .ant-picker {
    width: 16rem;

    @media (max-width: 767.98px) {
      flex-grow: 1;
    }
  }
`;
