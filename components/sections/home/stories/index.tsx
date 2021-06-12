import { Carousel } from 'antd';
import { FC, useRef } from 'react';

import NextSVG from '../../../../public/images/carousel/next.svg';
import PrevSVG from '../../../../public/images/carousel/prev.svg';
import { useAppSelector } from '../../../../redux/store';
import { Title } from '../../../UI';
import { Button, ButtonGroup, WrapperDonorStory, WrapperSection } from './styles';

const Stories: FC = () => {
  const { data } = useAppSelector((state) => state.stories);

  const ref = useRef<any>();

  const next = () => ref.current.next();
  const prev = () => ref.current.prev();

  return (
    <WrapperSection id='stories'>
      <Title as='h2' margin='30px' bold>
        Истории доноров
      </Title>
      <Carousel ref={ref} dots={false} effect='fade' autoplay>
        {data && data.map((props: any) => <WrapperDonorStory {...props} />)}
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
