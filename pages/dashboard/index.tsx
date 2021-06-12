import styled from 'styled-components';

import { Loading } from '../../components/UI/loading';
import { useRequiredAuth } from '../../core/hooks/useRequiredAuth';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const Dashboard = () => {
  useRequiredAuth('/dashboard/details', '/auth');

  return (
    <HeaderContentFooter>
      <Wrapper>
        <Loading />
      </Wrapper>
    </HeaderContentFooter>
  );
};

const Wrapper = styled.div`
  padding: 200px 0;
`;

export default Dashboard;
