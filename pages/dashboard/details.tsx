import DashboardButtonsLinks from '../../src/components/dashboard-buttons-links';
import { DetailsForm } from '../../src/components/forms/dashboard/details';
import { UserStoryForm } from '../../src/components/forms/dashboard/user-story';
import { TitleWithArrow } from '../../src/components/UI';
import { DashboardGrid } from '../../src/core/layouts/dashboard-grid';

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
