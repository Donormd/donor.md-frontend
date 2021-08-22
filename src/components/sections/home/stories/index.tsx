import { Carousel } from 'antd';
import { useRef } from 'react';

import NextSVG from '../../../../../public/images/carousel/next.svg';
import PrevSVG from '../../../../../public/images/carousel/prev.svg';
import { getStories } from '../../../../queries/stories';
import { useTypedQuery } from '../../../../queries/utils';
import { Title } from '../../../UI';
import { Loading } from '../../../UI/loading';
import { Button, ButtonGroup, WrapperDonorStory, WrapperSection } from './styles';

export const Stories = () => {
  const { data, isLoading } = useTypedQuery('stories', getStories);

  const ref = useRef<any>(null);

  const next = () => ref.current.next();
  const prev = () => ref.current.prev();

  return (
    <WrapperSection id='stories'>
      <Title as='h2' margin='30px' bold>
        Истории доноров
      </Title>
      {isLoading && <Loading />}
      <Carousel ref={ref} dots={false} effect='fade' autoplay>
        {data?.map((props) => (
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
