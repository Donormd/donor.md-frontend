import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { FC } from 'react';

export const Loading: FC = () => (
  <Wrapper>
    <Image
      afterInjection={(_err: Error, svg: SVGAElement) => {
        svg.classList.add('animate-heart');
      }}
      src='/images/logo/heart.svg'
    />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Image = styled(ReactSVG)`
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

  .animate-heart {
    animation: pulse 1.5s infinite;
  }
`;
