import styled from 'styled-components';
import { Collapse, Card } from 'antd';

export const StoryCollapse = styled(Collapse)`
  margin-bottom: 25px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px
    ${({ theme }) => (theme.mode === 'dark' ? 'rgba(0,0,0,.2)' : '#08090a0d')};
  border: none;

  .ant-collapse-item,
  .ant-collapse-header {
    border-radius: 4px !important;
    border-bottom: 0;
  }

  .ant-collapse-content {
    border-top-color: ${({ theme }) =>
      theme.mode === 'dark' ? '#393a3b' : '#08090a0d'};
  }

  .ant-collapse-content-box {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
  }
`;

export const StoryPanelHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: 7px;
`;

export const StoryCard = styled(Card)`
  border-radius: 4px;
  background: transparent;
  border-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#393a3b' : '#f0f0f0'};
  overflow: hidden;

  &:hover .ant-card-cover img {
    transform: scale(1.05);
  }

  .ant-card-body {
    display: none;
  }

  .ant-card-cover {
    height: 22rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s;
    }
  }

  .ant-card-actions {
    border-radius: 4px;
    border-top: 0;
    background: ${({ theme }) =>
      theme.mode === 'dark' ? '#242526' : '#ffffff'};

    .anticon {
      color: ${({ theme }) =>
        theme.mode === 'dark' ? '#ffffffa6' : '#8c8c8c'};

      &:hover {
        color: #13c2c2;
      }
    }

    li:not(:last-child) {
      border-right-color: ${({ theme }) =>
        theme.mode === 'dark' ? '#ffffffa6' : '#f0f0f0'};
    }
  }
`;
