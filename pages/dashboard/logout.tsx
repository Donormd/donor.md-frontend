import { useEffect } from 'react';

import { Loading } from '../../src/components/UI/loading';
import { useAuth } from '../../src/core/hooks/useAuth';
import { useRequiredAuth } from '../../src/core/hooks/useRequiredAuth';
import CenterAllAxes from '../../src/core/layouts/center-all-axes';

const Dashboard = () => {
  const auth = useAuth();

  useRequiredAuth('/auth', '/');

  useEffect(() => {
    auth?.signOut();
  }, [auth]);

  return (
    <CenterAllAxes>
      <Loading />
    </CenterAllAxes>
  );
};

export default Dashboard;
