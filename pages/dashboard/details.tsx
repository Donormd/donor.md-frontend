import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { DashboardButtonsLinks } from '../../src/components/dashboard-buttons-links';
import { DetailsForm } from '../../src/components/forms/dashboard/details';
import { UserStoryForm } from '../../src/components/forms/dashboard/user-story';
import { TitleWithArrow } from '../../src/components/UI';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';
import { getUserStory } from '../../src/queries/stories';
import { getUser } from '../../src/queries/user';

const MyDetails = () => {
  return (
    <DashboardGrid>
      <TitleWithArrow>Мои данные</TitleWithArrow>
      <DashboardButtonsLinks />
      <DetailsForm />
      <UserStoryForm />
    </DashboardGrid>
  );
};

export default MyDetails;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  await queryClient.prefetchQuery(['user', 'story'], getUserStory);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
