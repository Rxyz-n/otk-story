import styled, { keyframes } from 'styled-components';

const spinning1 = keyframes`
  100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
  }
`;

const spinning2 = keyframes`
  100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  }
`;

const spinning3 = keyframes`
  100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  }
`;

export const SpinWrap = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  height: 60px;
  width: 60px;
  overflow: hidden;
`;

export const SpinInner = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;

  .line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: 1s;
    border-left-width: calc(60px / 25);
    border-top-width: calc(60px / 25);
    border-left-color: #13c2c2;
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;

    &:nth-child(1) {
      animation: ${spinning1} 1s linear infinite;
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
    }

    &:nth-child(2) {
      animation: ${spinning2} 1s linear infinite;
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
    }

    &:nth-child(3) {
      animation: ${spinning3} 1s linear infinite;
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
    }
  }

  .circle {
    display: block;
    position: absolute;
    color: #13c2c2;
    font-size: calc(60px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
