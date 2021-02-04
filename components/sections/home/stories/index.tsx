import React, { useRef } from 'react';
import { Carousel } from 'antd';
import PrevSVG from '../../../../public/images/carousel/prev.svg';
import NextSVG from '../../../../public/images/carousel/next.svg';
import { Props } from '../../../donor-story';
import { Title } from '../../../UI';
import { WrapperSection, WrapperDonorStory, ButtonGroup, Button } from './styles';

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

const Stories: React.FC = (): JSX.Element => {
  // init redux logic

  const ref = useRef<any>();

  const next = () => ref.current.next();
  const prev = () => ref.current.prev();

  return (
    <WrapperSection id='stories'>
      <Title as='h2' className='h1' margin='30px' bold>
        Истории доноров
      </Title>
      <Carousel ref={ref} dots={false} effect='fade' autoplay>
        {stories.map((props: StoriesProps) => (
          <WrapperDonorStory {...props} />
        ))}
      </Carousel>
      <ButtonGroup>
        <Button color='red' shape='round' outlined onClick={prev}>
          <PrevSVG />
        </Button>
        <Button color='red' shape='round' outlined onClick={next}>
          <NextSVG />
        </Button>
      </ButtonGroup>
    </WrapperSection>
  );
};

export default Stories;
