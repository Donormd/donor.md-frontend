import { FC } from 'react';
import styled from 'styled-components';
import { HeaderContentFooter } from '../../layouts/header-content-footer';
import { Loading } from '../../components/UI/loading';
import { useRequiredAuth } from '../../hooks/useRequiredAuth';

const Dashboard: FC = () => {
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
