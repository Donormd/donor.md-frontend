import { FC } from 'react';

import DashboardButtonsLinks from '../../components/dashboard-buttons-links';

import { DashboardGrid } from '../../layouts/dashboard-grid';
import { UserStoryForm } from '../../components/forms/dashboard/user-story';
import { TitleWithArrow } from '../../components/UI';
import { DetailsForm } from '../../components/forms/dashboard/details';

const MyDetails: FC = () => {
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
