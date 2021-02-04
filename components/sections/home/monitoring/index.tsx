import React from 'react';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import BloodItem, { Props } from './blood-item';

const data: Array<Props> = [
  { key: 1, quantity: 1, group: '0 (I) - Rh+' },
  { key: 2, quantity: 2, group: '0 (I) - Rh-' },
  { key: 3, quantity: 3, group: 'A (II) - Rh+' },
  { key: 4, quantity: 3, group: 'A (II) - Rh-' },
  { key: 5, quantity: 2, group: 'B (III) - Rh+' },
  { key: 6, quantity: 1, group: 'B (III) - Rh-' },
  { key: 7, quantity: 2, group: 'B (IV) - Rh+' },
  { key: 8, quantity: 3, group: 'B (IV) - Rh-' },
];

const Monitoring: React.FC = (): JSX.Element => {
  return (
    <Section id='monitoring'>
      <Title as='h2' className='h1' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data.map((item) => (
          <BloodItem {...item} />
        ))}
      </BloodList>
      <Paragraph align='right'>По состоянию на: 24.07.2020</Paragraph>
    </Section>
  );
};

export default Monitoring;
