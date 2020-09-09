import styled from 'styled-components';
import { Skeleton } from 'antd';

export const ImageWrap = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 0;
    height: 0;
    object-fit: cover;
    opacity: 0;
    transition: 0.2s;
    border-radius: 4px;
  }

  &.loaded img {
    opacity: 1;
    width: 100%;
    height: 100%;
  }
`;

export const ImageSkeleton = styled(Skeleton)`
  height: 100%;

  .ant-skeleton-header,
  .ant-skeleton-avatar {
    padding: 0;
    height: 100%;
    width: 100%;
    border-radius: 4px;
  }
`;

export const ImageErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5222d;
  font-size: 1.1rem;
  letter-spacing: 0.2px;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)'};

  .anticon-warning {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;
