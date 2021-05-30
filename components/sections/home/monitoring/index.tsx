import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph, Title } from '../../../UI';
import { Section } from '../utils';
import { BloodList } from './styles';
import { BloodGroup, BloodItem } from './blood-item';
import { useAppSelector } from '../../../../redux/store';
import { getData } from '../../../../redux/redusers/monitoring';
import { Alert } from '../../../alert';
import { Loading } from '../../../UI/loading';

const Monitoring: FC = () => {
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
