import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

import { PartnerOfferCard } from '../../components/partner-offer-card';
import { Loading } from '../../components/UI/loading';
import { Paragraph, TitleWithArrow } from '../../components/UI/typography';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getBonuses } from '../../queries/bonuses';
import { useTypedQuery } from '../../queries/utils';

const Bonuses = () => {
  const { data, isLoading } = useTypedQuery('bonuses', getBonuses);

  return (
    <DashboardGrid>
      <TitleWithArrow>Бонусы</TitleWithArrow>
      <TextWrapper>
        <Paragraph bold margin='0 0 0 0'>
          Партнерские предложения для доноров
        </Paragraph>
        <Paragraph>Выбирайте актуальные для себя предложение от наших партнеров.</Paragraph>
      </TextWrapper>
      {isLoading && <Loading />}
      {data && data.map((item) => <PartnerOfferCard key={item._id} {...item} />)}
    </DashboardGrid>
  );
};

export default Bonuses;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('bonuses', getBonuses);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const TextWrapper = styled.div`
  margin: 25px 0 20px 0;
`;
