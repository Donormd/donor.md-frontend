import { Loading } from '../../../components/UI/loading';
import { Paragraph, Title } from '../../../components/UI/typography';
import { getMonitoringData } from '../../../queries/monitoring';
import { useTypedQuery } from '../../../queries/utils';
import { Section } from '../utils';
import { BloodItem } from './blood-item';
import { BloodList } from './styles';

export const Monitoring = () => {
  const { data, isLoading } = useTypedQuery('monitoring', getMonitoringData);

  return (
    <Section id='monitoring'>
      <Title as='h2' bold>
        Мониторинг запасов
      </Title>
      {isLoading && <Loading />}

      {data && (
        <>
          <BloodList>
            {data.values.map((item) => (
              <BloodItem key={item.group} {...item} />
            ))}
          </BloodList>
          <Paragraph align='right'>По состоянию на: {data.dateUpdate}</Paragraph>
        </>
      )}
    </Section>
  );
};
