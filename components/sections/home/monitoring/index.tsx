import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import BloodItem from './blood-item';
import { useAppSelector } from '../../../../redux/store';
import { IBlood, getData } from '../../../../redux/redusers/monitoring';
import Alert from '../../../alert';
import { Loading } from '../../../UI/loading';

const Monitoring: React.FC = (): JSX.Element => {
  const { data, status, error } = useAppSelector((state) => state.monitoring);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const options: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (status === 'loading') return <Loading />;

  if (status === 'error') return <Alert dismissible>{error}</Alert>;

  const dateUpdate = data
    ? new Date(data[0].dateUpdate).toLocaleString('ru', options)
    : new Date().toLocaleString('ru', options);

  return (
    <Section id='monitoring'>
      <Title as='h2' className='h1' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data && data.map((item: IBlood) => <BloodItem key={item._id} {...item} />)}
      </BloodList>
      <Paragraph align='right'>По состоянию на: {dateUpdate}</Paragraph>
    </Section>
  );
};

export default Monitoring;
