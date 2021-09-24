import { DashboardButtonsLinks } from '../../components/dashboard-buttons-links';
import { DetailsForm } from '../../components/forms/dashboard/details';
import { UserStoryForm } from '../../components/forms/dashboard/user-story';
import { TitleWithArrow } from '../../components/UI/typography';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';

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
  return {
    props: {},
  };
};
