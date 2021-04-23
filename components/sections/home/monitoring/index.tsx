import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import BloodItem from './blood-item';
import { useAppSelector } from '../../../../redux/store';
import { getData } from '../../../../redux/redusers/monitoring';
import Alert from '../../../alert';
import { Loading } from '../../../UI/loading';

const Monitoring: React.FC = (): JSX.Element => {
  const {
    values: { status, data, error },
  } = useAppSelector((state) => state.monitoring);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (status === 'loading') return <Loading />;

  if (status === 'error') return <Alert dismissible>{error}</Alert>;

  const dateUpdate = data ? String(data.dateUpdate).split('T')[0] : 'N/A';

  return (
    <Section id='monitoring'>
      <Title as='h2' className='h1' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data?.values &&
          Object.entries(data.values).map((item: [string, number]) => {
            return <BloodItem key={item[0]} group={item[0]} quantity={item[1]} />;
          })}
      </BloodList>
      <Paragraph align='right'>По состоянию на: {dateUpdate}</Paragraph>
    </Section>
  );
};

export default Monitoring;
