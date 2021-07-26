import { useQuery } from 'react-query';
import styled from 'styled-components';

import { RecipientCard } from '../../src/components/recipient-card';
import { Paragraph, TitleWithArrow } from '../../src/components/UI';
import { Loading } from '../../src/components/UI/loading';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getRecipients } from '../../src/queries/dashboard/recipients';

const Recipients = () => {
  const { data, isLoading } = useQuery('recipients', getRecipients);

  return (
    <DashboardGrid>
      <TitleWithArrow>Реципиенты</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin={false}>
          Рекомендованные реципиенты
        </Paragraph>
      </TextWrapper>
      {isLoading && <Loading />}
      {data?.map((item) => (
        <RecipientCard key={item._id} recipient={item.recipient} />
      ))}
    </DashboardGrid>
  );
};

export default Recipients;

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
