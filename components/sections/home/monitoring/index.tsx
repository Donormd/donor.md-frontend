import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import BloodItem from './blood-item';
import { useAppSelector } from '../../../../redux/store';
import { IBlood, getData } from '../../../../redux/redusers/monitoring';
import Alert from '../../../alert';

const Monitoring: React.FC = (): JSX.Element => {
  const { data, status, error } = useAppSelector((state) => state.monitoring);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (status === 'loading') return <h1>loading</h1>;

  if (status === 'error') return <Alert dismissible>{error}</Alert>;

  const dateUpdate = new Date(data[0].dateUpdate).toLocaleString('ru', options);

  return (
    <Section id='monitoring'>
      <Title as='h2' className='h1' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data.map((item: IBlood) => (
          <BloodItem key={item._id} {...item} />
        ))}
      </BloodList>
      <Paragraph align='right'>По состоянию на: {dateUpdate}</Paragraph>
    </Section>
  );
};

export default Monitoring;
