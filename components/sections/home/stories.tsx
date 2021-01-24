import React, { useRef } from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import styled from 'styled-components';
import DonorStory, { Props } from '../../donor-story';
import { Title, Button as DefaultBtn } from '../../UI';
import { Section } from './utils';

type StoriesProps = Props & { key: number };

const stories: Array<StoriesProps> = [
  {
    key: 1,
    src: '/images/avatars/women.png',
    fullname: 'Анастасия',
    count: 22,
    story: `“В детстве я мечтала помогать людям, в медицинский поступить не получилось
    и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
  {
    key: 2,
    src: '/images/avatars/women.png',
    fullname: 'Александра',
    count: 22,
    story: `“В детстве я мечтала помогать людям, в медицинский поступить не получилось
    и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
];

const WrapperDonorStory = styled(DonorStory)`
  @media (max-width: 768px) {
    background: white;
    border: ${({ theme }) => `1px solid ${theme.redDiluted}`};
  }
`;

const WrapperSection = styled(Section)`
  position: relative;
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  top: 75px;
  right: 30px;
`;

const Button = styled(DefaultBtn)`
  display: inline-block;
  width: 35px;
  height: 35px;
  padding: 0;
  background: transparent;

  border-color: ${({ theme }) => theme.redDiluted};

  & div {
    vertical-align: middle;
  }

  &:hover,
  &:focus {
    background: transparent;
    border-color: ${({ theme }) => theme.red};
  }

  @media (min-width: 768px) {
    border-color: ${({ theme }) => theme.textDark};
    background: transparent;

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.textMuted};
      background: transparent;
    }
  }
`;

const Stories: React.FC = (): JSX.Element => {
  // init redux logic

  const ref = useRef<any>();

  const next = () => ref.current.next();
  const prev = () => ref.current.prev();

  return (
    <WrapperSection id='stories'>
      <Title as='h2' bold>
        Истории доноров
      </Title>
      <Carousel ref={ref} dots={false} effect='fade' autoplay>
        {stories.map((props: StoriesProps) => (
          <WrapperDonorStory {...props} />
        ))}
      </Carousel>
      <ButtonGroup>
        <Button color='red' shape='round' outlined onClick={prev}>
          <Image src='/images/carousel/prev.svg' width={20} height={20} />
        </Button>
        <Button color='red' shape='round' outlined onClick={next}>
          <Image src='/images/carousel/next.svg' width={20} height={20} />
        </Button>
      </ButtonGroup>
    </WrapperSection>
  );
};

export default Stories;
