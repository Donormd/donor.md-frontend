/* eslint no-console:0 */
import { FC } from 'react';
import styled from 'styled-components';
import { HeaderContentFooter } from '../layouts/header-content-footer';
import { ButtonGroup } from '../components/UI/button-group';
import { DonorStory } from '../components/donor-story';
import Pagination from '../components/pagination';
import { Title } from '../components/UI';
import { Container } from '../layouts/container';
import { useAppSelector } from '../redux/store';
import { IOptions } from '../redux/common';

const buttons: IOptions[] = [
  { _id: '1', text: 'Истории доноров' },
  { _id: '2', text: 'Истории рецепиентов' },
];

const handleClick: (val: string) => void = (val) => console.log(val);

const DonorStoriesPage: FC = () => {
  const { data } = useAppSelector((state) => state.stories);
  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <StoriesHead>
          <Title margin='15px' bold>
            Истории доноров
          </Title>
          <ButtonGroup buttons={buttons} handleClick={handleClick} />
        </StoriesHead>
        <div>{data && data.map((props: any) => <DonorStory {...props} />)}</div>
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
