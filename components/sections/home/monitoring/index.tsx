import React from 'react';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import BloodItem from './blood-item';
import { useAppSelector } from '../../../../redux/store';

const Monitoring: React.FC = (): JSX.Element => {
  const { data } = useAppSelector((state) => state.monitoring);
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
