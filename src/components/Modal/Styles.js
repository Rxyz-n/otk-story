import styled from 'styled-components';

export const ModalIcon = styled.div`
  position: fixed;
  font-size: 1.3rem;
  color: #fff;
  width: 3rem;
  height: 3rem;
  z-index: 3090;
  background: transparent;
  line-height: 3rem;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #fff;
    color: #000;
  }

  &.close {
    top: 10px;
    right: 10px;
  }

  &.next {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  &.prev {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
