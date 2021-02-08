import React from 'react';
import styled from 'styled-components';
import DashboardGrid from '../../layouts/dashboard-grid';
import { TitleWithArrow, Paragraph } from '../../components/UI';
import PartnerOfferCard, { Props } from '../../components/partner-offer-card';

declare type KeyType = { key: string | number };
declare type MockProps = KeyType & Props;

const mock: Array<MockProps> = [
  {
    key: 1,
    src: '/stub.svg',
    name: 'Кофейня "Дайотпить"',
    discount: 'Скидка на все на питки: 25%',
    condition: `В течение 3 дней с момента сдачи крови. 
      По предъявлению справки и документа удостоверяющего личность`,
    date: new Date().toISOString(),
  },
  {
    key: 2,
    src: '/stub.svg',
    name: 'Кофейня "Дайотпить"',
    discount: 'Скидка на все на питки: 25%',
    condition: `В течение 3 дней с момента сдачи крови. 
      По предъявлению справки и документа удостоверяющего личность`,
    date: new Date().toISOString(),
  },
  {
    key: 3,
    src: '/stub.svg',
    name: 'Кофейня "Дайотпить"',
    discount: 'Скидка на все на питки: 25%',
    condition: `В течение 3 дней с момента сдачи крови. 
      По предъявлению справки и документа удостоверяющего личность`,
    date: new Date().toISOString(),
  },
  {
    key: 4,
    src: '/stub.svg',
    name: 'Кофейня "Дайотпить"',
    discount: 'Скидка на все на питки: 25%',
    condition: `В течение 3 дней с момента сдачи крови. 
      По предъявлению справки и документа удостоверяющего личность`,
    date: new Date().toISOString(),
  },
];

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;

const Bonuses: React.FC = (): JSX.Element => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Бонусы</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
          Партнерские предложения
        </Paragraph>
        <Paragraph>Выберите актуальную для себя предложение от наших партнеров.</Paragraph>
      </TextWrapper>
      {mock.map((item) => (
        <PartnerOfferCard {...item} />
      ))}
    </DashboardGrid>
  );
};

export default Bonuses;
