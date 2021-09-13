import Image from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';

import { IDonorStory } from '../core/interfaces/story';

export const DonorStory = memo(({ src, fullname, count, story, ...rest }: IDonorStory) => (
  <Wrapper {...rest}>
    <Image src={src} width={70} height={70} layout='fixed' />
    <StoryHead>
      <StoryHeadTitle>{fullname}</StoryHeadTitle>
      <StoryHeadCount>Количество донаций {count}</StoryHeadCount>
    </StoryHead>
    <StoryBody>{story}</StoryBody>
  </Wrapper>
));

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding: 20px 30px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.redDiluted};
  border-radius: ${({ theme }) => theme.radius};
`;

const StoryHead = styled.div`
  align-self: center;
`;

const StoryHeadTitle = styled.h4`
  font-size: 1.1rem;
  margin: 0;
`;

const StoryHeadCount = styled.p`
  margin: 0;
  font-weight: bold;
`;

const StoryBody = styled.div`
  grid-column: 1 / 3;

  @media (min-width: 992px) {
    grid-column: 2 / 3;
  }
`;
