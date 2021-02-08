import React from 'react';
import styled from 'styled-components';
import DashboardGrid from '../../layouts/dashboard-grid';
import { TitleWithArrow, Paragraph } from '../../components/UI';
import RecipientCard, { Props } from '../../components/recipient-card';

declare type KeyType = { key: string | number };
declare type MockProps = KeyType & Props;

const mock: Array<MockProps> = [
  {
    key: 1,
    src: '/stub.svg',
    name: 'Снегирева Алина',
    age: 24,
    bloodGroup: 'В(|||) - Rh+',
    disease: 'Заболевание печени',
    placeName: 'Республиканская клиническая больница',
    city: 'Тирасполь, ул. Мира, 33 А',
    date: new Date().toISOString(),
  },
  {
    key: 2,
    src: '/stub.svg',
    name: 'Снегирева Алина',
    age: 24,
    bloodGroup: 'В(|||) - Rh+',
    disease: 'Заболевание печени',
    placeName: 'Республиканская клиническая больница',
    city: 'Тирасполь, ул. Мира, 33 А',
    date: new Date().toISOString(),
  },
  {
    key: 3,
    src: '/stub.svg',
    name: 'Снегирева Алина',
    age: 24,
    bloodGroup: 'В(|||) - Rh+',
    disease: 'Заболевание печени',
    placeName: 'Республиканская клиническая больница',
    city: 'Тирасполь, ул. Мира, 33 А',
    date: new Date().toISOString(),
  },
];

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;

const Recipients: React.FC = (): JSX.Element => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Реципиенты</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
          Рекомендованные реципиенты
        </Paragraph>
      </TextWrapper>
      {mock.map((item) => (
        <RecipientCard {...item} />
      ))}
    </DashboardGrid>
  );
};

export default Recipients;
