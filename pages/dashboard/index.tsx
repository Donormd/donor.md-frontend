import styled from 'styled-components';

import { Loading } from '../../src/components/UI/loading';
import { useRequiredAuth } from '../../src/core/hooks/useRequiredAuth';
import { HeaderContentFooter } from '../../src/core/layouts/header-content-footer';

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
