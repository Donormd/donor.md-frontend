/* eslint no-console:0 */
import styled from 'styled-components';

import { DonorStory } from '../components/donor-story';
import { Pagination } from '../components/pagination';
import { ButtonGroup } from '../components/UI/button-group';
import { Loading } from '../components/UI/loading';
import { Title } from '../components/UI/typography';
import { IOptions } from '../core/interfaces/IIterableStruct';
import { Container } from '../core/layouts/container';
import { HeaderContentFooter } from '../core/layouts/header-content-footer';
import { getStories } from '../queries/stories';
import { useTypedQuery } from '../queries/utils';

const buttons: IOptions[] = [
  { _id: '1', text: 'Истории доноров' },
  // { _id: '2', text: 'Истории рецепиентов' },
];

const handleClick: (val: string) => void = (val) => console.log(val);

const DonorStoriesPage = () => {
  const { data, isLoading } = useTypedQuery('stories', getStories);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <StoriesHead>
          <Title margin='15px' bold>
            Истории доноров
          </Title>
          <ButtonGroup buttons={buttons} handleClick={handleClick} />
        </StoriesHead>
        <div>
          {isLoading && <Loading />}
          {data?.map((props) => (
            <DonorStory {...props} />
          ))}
        </div>
      </Container>
      <Pagination onChange={(...args: any) => console.log(args)} />
    </HeaderContentFooter>
  );
};

export default DonorStoriesPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const StoriesHead = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: start;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
