import { FC, memo } from 'react';
import styled from 'styled-components';

import { LeftMenu } from '../../components/left-menu';
import RightMenu from '../../components/right-menu';
// import { useAuth } from '../hooks/useAuth';

type DashboardGridType = {
  leftImage?: string;
  className?: string;
};

export const DashboardGrid: FC<DashboardGridType> = memo(({ children, className, leftImage }) => {
  // useAuth();
  return (
    <Main>
      <LeftMenu image={leftImage} />
      <Container className={className}>{children}</Container>
      <RightMenu />
    </Main>
  );
});

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  @media (min-width: 576px) {
    grid-template-columns: max-content 1fr max-content;
  }
`;

const Container = styled.section`
  padding: 50px 30px;
  width: 100%;
`;
