import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

import { RecipientCard } from '../../src/components/recipient-card';
import { Paragraph, TitleWithArrow } from '../../src/components/UI';
import { Loading } from '../../src/components/UI/loading';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getRecipients } from '../../src/queries/recipients';
import { getUser } from '../../src/queries/user';
import { useTypedQuery } from '../../src/queries/utils';

const Recipients = () => {
  const { data, isLoading } = useTypedQuery('recipients', getRecipients);

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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
