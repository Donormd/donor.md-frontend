import { FC, useEffect } from 'react';

import { getData } from '../../../../redux/redusers/monitoring';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { Alert } from '../../../alert';
import { Paragraph, Title } from '../../../UI';
import { Loading } from '../../../UI/loading';
import { Section } from '../utils';
import { BloodGroup, BloodItem } from './blood-item';
import { BloodList } from './styles';

const Monitoring: FC = () => {
  const {
    values: { status, data, error },
  } = useAppSelector((state) => state.monitoring);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (status === 'loading') return <Loading />;

  if (status === 'error') return <Alert dismissible>{error}</Alert>;

  const dateUpdate = data ? String(data.dateUpdate).split('T')[0] : 'N/A';

  return (
    <Section id='monitoring'>
      <Title as='h2' bold>
        Мониторинг запасов
      </Title>
      <BloodList>
        {data?.values &&
          Object.entries(data.values).map((item) => {
            const group = item[0] as BloodGroup;
            return <BloodItem key={item[0]} group={group} quantity={item[1]} />;
          })}
      </BloodList>
      <Paragraph align='right'>По состоянию на: {dateUpdate}</Paragraph>
    </Section>
  );
};

export default Monitoring;
