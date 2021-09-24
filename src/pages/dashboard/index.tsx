import styled from 'styled-components';

import { Loading } from '../../components/UI/loading';
import { HeaderContentFooter } from '../../core/layouts/header-content-footer';

const Dashboard = () => {
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

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
