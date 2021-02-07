/* eslint no-console:0 */
import React from 'react';
import styled from 'styled-components';
import HeaderContentFooter from '../layouts/header-content-footer';
import ButtonGroup, { ButtonsProps, OnClickProps, KeyType } from '../components/button-group';
import DonorStory, { Props } from '../components/donor-story';
import Pagination from '../components/pagination';
import { Title } from '../components/UI';
import { Container } from '../layouts/container';

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

type StoriesProps = Props & { key: KeyType };

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
    fullname: 'Анастасия',
    count: 22,
    story: `“В детстве я мечтала помогать людям, в медицинский поступить не получилось
    и я решила реализовать свою мечту как донор! 
    Сдаю кровь каждый 3 месяца и чувствую себя супергероем.”`,
  },
];

const handleClick: OnClickProps = (val) => console.log(val);

const DonorStoriesPage: React.FC = (): JSX.Element => (
  <HeaderContentFooter background='/images/pages/welcome.png'>
    <Container>
      <StoriesHead>
        <Title margin='15px' bold>Истории доноров</Title>
        <ButtonGroup buttons={buttons} handleClick={handleClick} />
      </StoriesHead>
      <div>
        {stories.map((props: StoriesProps) => (
          <DonorStory {...props} />
        ))}
      </div>
    </Container>
    <Pagination onChange={(...args) => console.log(args)} />
  </HeaderContentFooter>
);

export default DonorStoriesPage;
