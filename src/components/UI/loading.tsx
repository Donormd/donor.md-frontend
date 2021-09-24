import HeartIcon from '@Public/images/logo/heart.svg';
import styled from 'styled-components';

export const Loading = () => (
  <Wrapper>
    <Image />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Image = styled(HeartIcon)`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 1.5s infinite;
`;
