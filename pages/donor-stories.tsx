/* eslint no-console:0 */

import styled from 'styled-components';

import { DonorStory } from '../src/components/donor-story';
import Pagination from '../src/components/pagination';
import { Title } from '../src/components/UI';
import { ButtonGroup } from '../src/components/UI/button-group';
import { Loading } from '../src/components/UI/loading';
import { IOptions } from '../src/core/interfaces/IIterableStruct';
import { Container } from '../src/core/layouts/container';
import { HeaderContentFooter } from '../src/core/layouts/header-content-footer';
import { getStories } from '../src/queries/stories';
import { useTypedQuery } from '../src/queries/utils';

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
      <Pagination onChange={(...args) => console.log(args)} />
    </HeaderContentFooter>
  );
};

export default DonorStoriesPage;

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
