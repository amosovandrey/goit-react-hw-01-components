import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    background-color: green;
  }
  50% {
    background-color: lightgreen;
  }
  100% {
    background-color: green;
  }
`;

const fadeAnimation = keyframes`
  0% {
    background-color: red;
  }
  50% {
    background-color: lightcoral;
  }
  100% {
    background-color: red;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  max-width: 320px;
  height: fit-content;
  border-radius: 20px;
  gap: 16px;
  text-align: center;
  background: #ededed;
  font-family: 'Nunito', sans-serif;
`;

export const Item = styled.li`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  animation: ${props => (props.isOnline ? blinkAnimation : fadeAnimation)} 1s
    linear infinite;
`;

export const Avatar = styled.img`
  height: auto;
  width: 48px;
  border-radius: 8px;
  border-width: 1px;
  border-color: grey;
  border-style: solid;
  background: #a4bdb7;
  display: block;
  padding: 8px;
`;

export const FriendName = styled.p`
  font-size: 1.25em;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-bottom: 16px;

  background-image: linear-gradient(to right, #d7a548 55%, #000000 45%);
  background-size: 220% 100%;
  background-position: 100% 50%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-repeat: no-repeat;
  transition: 0.5s ease-out;

  ${Item}:hover & {
    background-position: 0% 50%;
  }
`;
