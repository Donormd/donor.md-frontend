import { useEffect } from 'react';

import { Loading } from '../../components/UI/loading';
import { useAuth } from '../../core/hooks/useAuth';
import { useRequiredAuth } from '../../core/hooks/useRequiredAuth';
import CenterAllAxes from '../../core/layouts/center-all-axes';

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
