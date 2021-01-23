import React from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';
import { Paragraph, Title } from '../../UI';
import { Section } from './utils';

const data = [
  { key: 1, quantity: 1, group: '0 (I) - Rh+' },
  { key: 2, quantity: 2, group: '0 (I) - Rh-' },
  { key: 3, quantity: 3, group: 'A (II) - Rh+' },
  { key: 4, quantity: 3, group: 'A (II) - Rh-' },
  { key: 5, quantity: 2, group: 'B (III) - Rh+' },
  { key: 6, quantity: 1, group: 'B (III) - Rh-' },
  { key: 7, quantity: 2, group: 'B (IV) - Rh+' },
  { key: 8, quantity: 3, group: 'B (IV) - Rh-' },
];

const quantityText = (quantity: number): string => {
  switch (quantity) {
    case 1:
      return 'Мало';
    case 2:
      return 'Достаточно';
    default:
      return 'Много';
  }
};

const BloodList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px 0;
  list-style-type: none;

  @media (min-width: 992px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const BloodItem = styled.div`
  width: 100%;
`;

const BloodTitle = styled(Title)`
  margin: 0;
`;

const Image = styled(NextImage)<{ layout: string }>`
  margin-top: -5px;
`;

const Monitoring: React.FC = (): JSX.Element => {
  return (
    <Section id='monitoring'>
      <Title as='h2' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data.map((item) => (
          <BloodItem>
            <BloodTitle as='h4' align='center' bold>
              {item.group}
            </BloodTitle>
            <Image
              src='/images/pages/home/hearts/few.svg'
              width={100}
              height={100}
              layout='fixed'
            />
            <Title as='h4' align='center' bold>
              {quantityText(item.quantity)}
            </Title>
          </BloodItem>
        ))}
      </BloodList>
      <Paragraph align='right'>По состоянию на: 24.07.2020</Paragraph>
    </Section>
  );
};

export default Monitoring;
