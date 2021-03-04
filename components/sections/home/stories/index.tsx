import React, { useRef } from 'react';
import { Carousel } from 'antd';
import PrevSVG from '../../../../public/images/carousel/prev.svg';
import NextSVG from '../../../../public/images/carousel/next.svg';
import { Title } from '../../../UI';
import { WrapperSection, WrapperDonorStory, ButtonGroup, Button } from './styles';
import { useAppSelector } from '../../../../redux/store';
import { IDonorStory } from '../../../donor-story';

const Stories: React.FC = (): JSX.Element => {
  const { data } = useAppSelector((state) => state.stories);

  const ref = useRef<any>();

  const next = () => ref.current.next();
  const prev = () => ref.current.prev();

  return (
    <WrapperSection id='stories'>
      <Title as='h2' className='h1' margin='30px' bold>
        Истории доноров
      </Title>
      <Carousel ref={ref} dots={false} effect='fade' autoplay>
        {data.map((props: IDonorStory) => (
          <WrapperDonorStory {...props} />
        ))}
      </Carousel>
      <ButtonGroup>
        <Button onClick={prev}>
          <PrevSVG />
        </Button>
        <Button onClick={next}>
          <NextSVG />
        </Button>
      </ButtonGroup>
    </WrapperSection>
  );
};

export default Stories;
