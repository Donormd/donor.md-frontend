/* eslint no-console:0 */
import React from 'react';
import styled from 'styled-components';
import HeaderContentFooter from '../layouts/header-content-footer';
import ButtonGroup, { ButtonsProps, OnClickProps } from '../components/UI/button-group';
import DonorStory from '../components/donor-story';
import Pagination from '../components/pagination';
import { Title } from '../components/UI';
import { Container } from '../layouts/container';
import { useAppSelector } from '../redux/store';

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

const buttons: Array<ButtonsProps> = [
  { key: 1, text: 'Истории доноров' },
  { key: 2, text: 'Истории рецепиентов' },
];

const handleClick: OnClickProps = (val) => console.log(val);

const DonorStoriesPage: React.FC = (): JSX.Element => {
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
        <div>
          {data.map((props: any) => (
            <DonorStory {...props} />
          ))}
        </div>
      </Container>
      <Pagination onChange={(...args) => console.log(args)} />
    </HeaderContentFooter>
  );
};

export default DonorStoriesPage;
