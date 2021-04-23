import { FC, useEffect } from 'react';
import { Loading } from '../../components/UI/loading';
import { useRequiredAuth } from '../../hooks/useRequiredAuth';
import { useAuth } from '../../hooks/useAuth';
import CenterAllAxes from '../../layouts/center-all-axes';

const Dashboard: FC = () => {
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
